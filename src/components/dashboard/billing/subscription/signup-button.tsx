"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Loading } from "@lemonsqueezy/wedges";
import { Plan } from "@prisma/client";
import { getCheckoutURL } from "../../../../actions/lemons.action";
import { toast } from "sonner";

declare global {
  interface Window {
    createLemonSqueezy?: () => void;
    LemonSqueezy: {
      Url: { Open: (url: string) => void };
    };
  }
}

window.LemonSqueezy = {
  Url: { Open: (url: string) => window.open(url) },
};

(window as any).LemonSqueezy = {
  Url: { Open: (url: string) => window.open(url) },
};

export function SignupButton(props: {
  plan: Plan;
  currentPlan?: Plan;
  embed?: boolean;
}) {
  const { plan, currentPlan, embed = true } = props;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const isCurrent = plan.id === currentPlan?.id;

  const label = isCurrent ? "Your plan" : "Sign up";

  // Make sure Lemon.js is loaded, you need to enqueue the Lemon Squeezy SDK in your app first.
  useEffect(() => {
    if (typeof window.createLemonSqueezy === "function") {
      window.createLemonSqueezy();
    }
  }, []);

  return (
    <Button
      disabled={loading || isCurrent}
      onClick={async () => {
        // Create a checkout and open the Lemon.js modal
        let checkoutUrl: string | undefined = "";

        try {
          setLoading(true);
          checkoutUrl = await getCheckoutURL(plan.variantId, embed);
        } catch (error) {
          setLoading(false);
          toast("Error creating a checkout.", {
            description:
              "Please check the server console for more information.",
          });
        } finally {
          embed && setLoading(false);
        }

        embed
          ? checkoutUrl && window.LemonSqueezy.Url.Open(checkoutUrl)
          : router.push(checkoutUrl ?? "/");
      }}
    >
      {label}
    </Button>
  );
}
