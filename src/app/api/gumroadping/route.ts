import { NextResponse } from "next/server";
import { prisma } from "@/prisma";
import { addDays } from 'date-fns';

export async function POST(request: Request) {
    try {
        const bodyText = await request.text();
        const params = new URLSearchParams(bodyText);
        const body = Object.fromEntries(params.entries());
        console.log('Received webhook:', body, request.headers);

        const userEmail = body.email;
        const product = body.product_id;
        console.log("body.product_id == ", body.product_id)
        if (product == "jswlxl") {
            const updatedUser = await prisma.user.update({
                where: {
                    email: userEmail,
                },
                data: {
                    subscribeEnd: addDays(new Date(), 30),
                },
            });
            console.log("Updated User : ", updatedUser);
        } else {
            const updatedUser = await prisma.user.update({
                where: {
                    email: userEmail,
                },
                data: {
                    subscribeEnd: addDays(new Date(), 365),
                },
            });
            console.log("Updated User : ", updatedUser);
        }
        console.log("BODY : ", body);



        return NextResponse.json("", { status: 200 });
    } catch (error: any) {
        console.log(error, "ERROR_MESSAGES");
        return new NextResponse("InternalError", { status: 500 });
    }
}
