import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const { product_id: productId, test } = req.body;

    if (!test && req.method?.toUpperCase() === 'POST' && productId === 'YOUR_PRODUCT_ID') {
        console.log(req.body)
    }

    res.status(200).send('');
}

export const POST = async (req: NextRequest) => {
    const body = await req.json();
    const {
        sale_id,
        sale_timestamp,
        order_number,
        seller_id,
        product_id,
        product_permalink,
        short_product_id,
        product_name,
        email,
        url_params,
        full_name,
        purchaser_id,
        subscription_id,
        ip_country,
        price,
        recurrence,
        variants,
        offer_code,
        test,
        custom_fields,
        shipping_information,
        is_recurring_charge,
        is_preorder_authorization,
        license_key,
        quantity,
        shipping_rate,
        affiliate,
        affiliate_credit_amount_cents,
        is_gift_receiver_purchase,
        gifter_email,
        gift_price,
        refunded,
        discover_fee_charged,
        can_contact,
        referrer,
        gumroad_fee,
        card
    } = body;
    console.log(body)
    return NextResponse.json(body, { status: 200 });
};
