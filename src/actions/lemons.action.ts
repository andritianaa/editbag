"use server";
import {
  cancelSubscription,
  createCheckout,
  createWebhook,
  getPrice,
  getProduct,
  getSubscription,
  lemonSqueezySetup,
  listPrices,
  listProducts,
  listWebhooks,
  updateSubscription,
  Variant,
} from "@lemonsqueezy/lemonsqueezy.js";

import crypto from "node:crypto";
import { configureLemonSqueezy } from "../config/lemonsqueezy";
import { prisma } from "../prisma";
import { Plan, Prisma, Subscription, WebhookEvent } from "@prisma/client";
import { currentUser } from "../lib/current-user";
import { webhookHasData, webhookHasMeta } from "../lib/typeguards";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

export const syncPlans = async () => {
  configureLemonSqueezy();

  const productVariants = await prisma.plan.findMany();

  async function _addVariant(variant: Plan) {
    console.log(`Syncing variant ${variant.name} with the database...`);
    // Sync the variant with the plan in the database.
    await prisma.plan.upsert({
      where: {
        variantId: variant.variantId,
      },
      update: variant,
      create: variant,
    });
    console.log(`${variant.name} synced with the database...`);
    productVariants.push(variant);
  }

  const products = await listProducts({
    filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID },
    include: ["variants"],
  });

  const allVariants = products.data?.included as Variant["data"][] | undefined;

  console.log(allVariants);

  if (allVariants) {
    /* eslint-disable no-await-in-loop -- allow */
    for (const v of allVariants) {
      const variant = v.attributes;

      // Skip draft variants or if there's more than one variant, skip the default
      // variant. See https://docs.lemonsqueezy.com/api/variants
      if (
        variant.status === "draft" ||
        (allVariants.length !== 1 && variant.status === "pending")
      ) {
        // `return` exits the function entirely, not just the current iteration.
        // so use `continue` instead.
        continue;
      }

      // Fetch the Product name.
      const productName =
        (await getProduct(variant.product_id)).data?.data.attributes.name ?? "";

      // Fetch the Price object.
      const variantPriceObject = await listPrices({
        filter: {
          variantId: v.id,
        },
      });

      const currentPriceObj = variantPriceObject.data?.data.at(0);
      const isUsageBased =
        currentPriceObj?.attributes.usage_aggregation !== null;
      const interval = currentPriceObj?.attributes.renewal_interval_unit;
      const intervalCount =
        currentPriceObj?.attributes.renewal_interval_quantity;
      const trialInterval = currentPriceObj?.attributes.trial_interval_unit;
      const trialIntervalCount =
        currentPriceObj?.attributes.trial_interval_quantity;

      const price = isUsageBased
        ? currentPriceObj?.attributes.unit_price_decimal
        : currentPriceObj.attributes.unit_price;

      const priceString = price !== null ? price?.toString() ?? "" : "";

      const isSubscription =
        currentPriceObj?.attributes.category === "subscription";

      // If not a subscription, skip it.
      if (!isSubscription) {
        continue;
      }

      await _addVariant({
        id: variant.product_id.toString(),
        name: variant.name,
        description: variant.description,
        price: priceString,
        interval: interval ?? null,
        intervalCount: intervalCount ?? null,
        isUsageBased,
        productId: variant.product_id,
        productName,
        variantId: parseInt(v.id) as unknown as number,
        trialInterval: trialInterval ?? null,
        trialIntervalCount: trialIntervalCount ?? null,
        sort: variant.sort,
      });
    }
  }

  return productVariants;
};

export async function getCheckoutURL(variantId: number, embed = false) {
  configureLemonSqueezy();

  const user = await currentUser();

  if (!user) {
    throw new Error("User is not authenticated.");
  }

  const checkout = await createCheckout(
    process.env.LEMONSQUEEZY_STORE_ID!,
    variantId,
    {
      checkoutOptions: {
        embed,
        media: false,
        logo: !embed,
      },
      checkoutData: {
        email: user.email ?? undefined,
        custom: {
          user_id: user.id,
        },
      },
      productOptions: {
        enabledVariants: [variantId],
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/billing/`,
        receiptButtonText: "Go to Dashboard",
        receiptThankYouNote: "Thank you for signing up to Lemon Stand!",
      },
    }
  );

  return checkout.data?.data.attributes.url;
}

export async function hasWebhook() {
  configureLemonSqueezy();

  if (!process.env.WEBHOOK_URL) {
    throw new Error(
      "Missing required WEBHOOK_URL env variable. Please, set it in your .env file."
    );
  }

  // Check if a webhook exists on Lemon Squeezy.
  const allWebhooks = await listWebhooks({
    filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID },
  });

  // Check if WEBHOOK_URL ends with a slash. If not, add it.
  let webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl.endsWith("/")) {
    webhookUrl += "/";
  }
  webhookUrl += "api/webhook";

  const webhook = allWebhooks.data?.data.find(
    (wh) => wh.attributes.url === webhookUrl && wh.attributes.test_mode
  );

  return webhook;
}

export async function setupWebhook() {
  configureLemonSqueezy();

  if (!process.env.WEBHOOK_URL) {
    throw new Error(
      "Missing required WEBHOOK_URL env variable. Please, set it in your .env file."
    );
  }

  // Check if WEBHOOK_URL ends with a slash. If not, add it.
  let webhookUrl = process.env.WEBHOOK_URL;
  if (!webhookUrl.endsWith("/")) {
    webhookUrl += "/";
  }
  webhookUrl += "api/webhook";

  console.log("Setting up a webhook on Lemon Squeezy (Test Mode)...");

  // Do not set a webhook on Lemon Squeezy if it already exists.
  let webhook = await hasWebhook();

  // If the webhook does not exist, create it.
  if (!webhook) {
    const newWebhook = await createWebhook(process.env.LEMONSQUEEZY_STORE_ID!, {
      secret: process.env.LEMONSQUEEZY_WEBHOOK_SECRET!,
      url: webhookUrl,
      testMode: true, // will create a webhook in Test mode only!
      events: [
        "subscription_created",
        "subscription_expired",
        "subscription_updated",
      ],
    });

    webhook = newWebhook.data?.data;
  }

  console.log(`Webhook ${webhook?.id} created on Lemon Squeezy.`);
}

export async function storeWebhookEvent(
  eventName: string,
  body: WebhookEvent["body"] | null
) {
  if (!process.env.POSTGRES_URL) {
    throw new Error("POSTGRES_URL is not set");
  }

  const id = crypto.randomInt(100000000, 1000000000);

  const returnedValue = await prisma.webhookEvent.upsert({
    where: { id }, // Specify the unique identifier for the upsert operation
    update: {}, // Leave empty since we don't want to update existing records
    create: {
      id,
      eventName,
      processed: false,
      body: body as Prisma.InputJsonValue,
    },
  });
  return returnedValue[0];
}

export async function processWebhookEvent(webhookEvent: WebhookEvent) {
  configureLemonSqueezy();

  const dbWebhookEvent = await prisma.webhookEvent.findUnique({
    where: {
      id: webhookEvent.id,
    },
  });

  if (!dbWebhookEvent) {
    throw new Error(
      `Webhook event #${webhookEvent.id} not found in the database.`
    );
  }

  if (!process.env.WEBHOOK_URL) {
    throw new Error(
      "Missing required WEBHOOK_URL env variable. Please, set it in your .env file."
    );
  }

  let processingError = "";
  const eventBody = webhookEvent.body;

  if (!webhookHasMeta(eventBody)) {
    processingError = "Event body is missing the 'meta' property.";
  } else if (webhookHasData(eventBody)) {
    if (webhookEvent.eventName.startsWith("subscription_payment_")) {
      // Save subscription invoices; eventBody is a SubscriptionInvoice
      // Not implemented.
    } else if (webhookEvent.eventName.startsWith("subscription_")) {
      // Save subscription events; obj is a Subscription
      const attributes = eventBody.data.attributes;
      const variantId = attributes.variant_id as string;

      // We assume that the Plan table is up to date.

      const plan = await prisma.plan.findFirst({
        where: {
          variantId: parseInt(variantId),
        },
      });
      if (!plan) {
        processingError = `Plan with variantId ${variantId} not found.`;
      } else {
        // Update the subscription in the database.

        const priceId = attributes.first_subscription_item.price_id;

        // Get the price data from Lemon Squeezy.
        const priceData = await getPrice(priceId);
        if (priceData.error) {
          processingError = `Failed to get the price data for the subscription ${eventBody.data.id}.`;
        }

        const isUsageBased = attributes.first_subscription_item.is_usage_based;
        const price = isUsageBased
          ? priceData.data?.data.attributes.unit_price_decimal
          : priceData.data?.data.attributes.unit_price;
        const updateData = {
          lemonSqueezyId: eventBody.data.id,
          orderId: attributes.order_id as number,
          name: attributes.user_name as string,
          email: attributes.user_email as string,
          status: attributes.status as string,
          statusFormatted: attributes.status_formatted as string,
          renewsAt: attributes.renews_at as string,
          endsAt: attributes.ends_at as string,
          trialEndsAt: attributes.trial_ends_at as string,
          price: price?.toString() ?? "",
          isPaused: false,
          subscriptionItemId: attributes.first_subscription_item.id,
          isUsageBased: attributes.first_subscription_item.is_usage_based,
          userId: parseInt(eventBody.meta.custom_data.user_id),
          planId: plan[0].id,
        };

        try {
          const updatedSubscription = await prisma.subscription.upsert({
            where: { lemonSqueezyId: updateData.lemonSqueezyId }, // Condition de recherche
            update: updateData, // Données à mettre à jour si l'enregistrement existe déjà
            create: updateData, // Données à créer si l'enregistrement n'existe pas
          });
          return updatedSubscription;
        } catch (error) {
          const processingError = `Failed to upsert Subscription #${updateData.lemonSqueezyId} to the database.`;
          console.error(processingError);
          throw new Error(processingError);
        }
      }
    } else if (webhookEvent.eventName.startsWith("order_")) {
      // Save orders; eventBody is a "Order"
      /* Not implemented */
    } else if (webhookEvent.eventName.startsWith("license_")) {
      // Save license keys; eventBody is a "License key"
      /* Not implemented */
    }

    // Update the webhook event in the database.
    await prisma.webhookEvent.update({
      where: {
        id: webhookEvent.id,
      },
      data: {
        processed: true,
        processingError: processingError,
      },
    });
  }
}

export async function getUserSubscriptions(): Promise<Subscription[]> {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) {
    notFound();
  }

  const userSubscriptions: Subscription[] = await prisma.subscription.findMany({
    where: {
      userId: userId,
    },
  });

  return userSubscriptions;
}

export async function getSubscriptionURLs(id: string) {
  configureLemonSqueezy();
  const subscription = await getSubscription(id);

  if (subscription.error) {
    throw new Error(subscription.error.message);
  }

  return subscription.data?.data.attributes.urls;
}

export async function cancelSub(id: string) {
  configureLemonSqueezy();

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions();

  // Check if the subscription exists
  const subscription = userSubscriptions.find(
    (sub) => sub.lemonSqueezyId === id
  );

  if (!subscription) {
    throw new Error(`Subscription #${id} not found.`);
  }

  const cancelledSub = await cancelSubscription(id);

  if (cancelledSub.error) {
    throw new Error(cancelledSub.error.message);
  }

  try {
    await prisma.subscription.update({
      where: {
        lemonSqueezyId: id,
      },
      data: {
        status: cancelledSub.data?.data.attributes.status,
        statusFormatted: cancelledSub.data?.data.attributes.status_formatted,
        endsAt: cancelledSub.data?.data.attributes.ends_at,
      },
    });
  } catch (error) {
    throw new Error(`Failed to cancel Subscription #${id} in the database.`);
  }

  revalidatePath("/");

  return cancelledSub;
}

export async function pauseUserSubscription(id: string) {
  configureLemonSqueezy();

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions();

  // Check if the subscription exists
  const subscription = userSubscriptions.find(
    (sub) => sub.lemonSqueezyId === id
  );

  if (!subscription) {
    throw new Error(`Subscription #${id} not found.`);
  }
}

export async function unpauseUserSubscription(id: string) {
  configureLemonSqueezy();

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions();

  // Check if the subscription exists
  const subscription = userSubscriptions.find(
    (sub) => sub.lemonSqueezyId === id
  );

  if (!subscription) {
    throw new Error(`Subscription #${id} not found.`);
  }

  const returnedSub = await updateSubscription(id, {
    pause: null,
  });

  // Update the db
  try {
    await prisma.subscription.update({
      where: {
        lemonSqueezyId: id,
      },
      data: {
        status: returnedSub.data?.data.attributes.status,
        statusFormatted: returnedSub.data?.data.attributes.status_formatted,
        endsAt: returnedSub.data?.data.attributes.ends_at,
        isPaused: returnedSub.data?.data.attributes.pause !== null,
      },
    });
  } catch (error) {
    throw new Error(`Failed to pause Subscription #${id} in the database.`);
  }

  revalidatePath("/");

  return returnedSub;
}

export async function changePlan(currentPlanId: string, newPlanId: string) {
  configureLemonSqueezy();

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions();

  // Check if the subscription exists
  const subscription = await prisma.subscription.findFirst({
    where: {
      planId: currentPlanId.toString(),
    },
  });

  if (!subscription) {
    throw new Error(
      `No subscription with plan id #${currentPlanId} was found.`
    );
  }

  // Get the new plan details from the database.
  const newPlan = await prisma.plan.findUniqueOrThrow({
    where: {
      id: newPlanId,
    },
  });

  // Send request to Lemon Squeezy to change the subscription.
  const updatedSub = await updateSubscription(subscription.lemonSqueezyId, {
    variantId: newPlan.variantId,
  });

  // Save in db
  try {
    await prisma.subscription.update({
      where: {
        lemonSqueezyId: subscription.lemonSqueezyId,
      },
      data: {
        planId: newPlanId,
        price: newPlan.price,
        endsAt: updatedSub.data?.data.attributes.ends_at,
      },
    });
  } catch (error) {
    throw new Error(
      `Failed to update Subscription #${subscription.lemonSqueezyId} in the database.`
    );
  }

  revalidatePath("/");

  return updatedSub;
}
