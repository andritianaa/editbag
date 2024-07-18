import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        // const {
        //     sale_id,
        //     sale_timestamp,
        //     order_number,
        //     seller_id,
        //     product_id,
        //     product_permalink,
        //     short_product_id,
        //     product_name,
        //     email,
        //     url_params,
        //     full_name,
        //     purchaser_id,
        //     subscription_id,
        //     ip_country,
        //     price,
        //     recurrence,
        //     variants,
        //     offer_code,
        //     test,
        //     custom_fields,
        //     shipping_information,
        //     is_recurring_charge,
        //     is_preorder_authorization,
        //     license_key,
        //     quantity,
        //     shipping_rate,
        //     affiliate,
        //     affiliate_credit_amount_cents,
        //     is_gift_receiver_purchase,
        //     gifter_email,
        //     gift_price,
        //     refunded,
        //     discover_fee_charged,
        //     can_contact,
        //     referrer,
        //     gumroad_fee,
        //     card
        // } = body;
        console.log("BODY : ", body);

        return NextResponse.json("", { status: 200 });
    } catch (error: any) {
        console.log(error, "ERROR_MESSAGES");
        return new NextResponse("InternalError", { status: 500 });
    }
}
