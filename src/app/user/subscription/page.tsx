import Link from "next/link";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { currentUser } from "@/lib/current-user";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function RoutePage() {
    const user = await currentUser();

    const isSubscriptionActive = user?.subscribeEnd
        ? new Date(user.subscribeEnd).getTime() > new Date().getTime()
        : false;

    if (user) {
        return (
            <div className="p-8">
                {!isSubscriptionActive ? (
                    <Card className="mt-2 flex max-w-lg flex-col justify-center gap-4 p-6">
                        <CardTitle>{"You haven't paid for your subscription yet"}</CardTitle>
                        <CardDescription>
                            <ul className={"list-disc ml-4"}>
                                <li>
                                    You can subscribe monthly or yearly
                                </li>
                                <li>
                                    Payments are processed through Gumroad
                                </li>
                                <li>
                                    {"If you've just paid your subscription, please wait up to 5 minutes for Gumroad to update our system with your payment information"}
                                </li>
                            </ul>
                        </CardDescription>
                        <CardContent className={"p-0"}>
                            <a
                                target="_blank"
                                href={"https://editbag.gumroad.com/l/jswlxl?wanted=true"}
                                className={"p-4 bg-[#ffffff] w-full flex justify-between items-center hover:opacity-90"}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={"/gumroad.png"} className={"h-10"} alt={""} />
                                <p className={"text-black text-lg font-bold"}>Subscribe Monthly</p>
                            </a>
                            <a
                                target="_blank"
                                href={"https://editbag.gumroad.com/l/jswlxl?wanted=true"}
                                className={"p-4 bg-[#ffffff] w-full flex justify-between items-center hover:opacity-90 my-4"}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={"/gumroad.png"} className={"h-10"} alt={""} />
                                <p className={"text-black text-lg font-bold"}>Subscribe Yearly</p>
                            </a>
                            <Button className={"w-full"} variant={"outline"}>
                                <Link href={"/user/subscription"}>Refresh</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="mt-2 flex max-w-lg flex-col justify-center gap-4 p-6">
                        <CardTitle>Your subscription is active</CardTitle>
                        <CardDescription>
                            Your subscription is active until {format(new Date(user.subscribeEnd!), "MMMM dd, yyyy HH:mm:ss")}.
                        </CardDescription>
                    </Card>
                )}
            </div>
        );
    } else {
        redirect("/authentication")
    }
}
