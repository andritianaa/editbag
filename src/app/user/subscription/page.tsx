import Link from "next/link";
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { currentUser } from "@/lib/current-user";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import {Glowing} from "@/components/common/Glowing";
import {Check} from "lucide-react";

export default async function RoutePage() {
    const user = await currentUser();

    const isSubscriptionActive = user?.subscribeEnd
        ? new Date(user.subscribeEnd).getTime() > new Date().getTime()
        : false;

    if (user) {
        return (
            <div className="container mx-auto">
                <div className="mt-8 flex justify-center gap-4">
                    <Glowing color="#8ecffb" className="relative w-full max-w-[22rem] rounded-xl p-6 px-8 pl-10 pr-2 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:pl-10 xl:p-14">
                        <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">BETA</span>
                        <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                            <span className="-ml-1 -tracking-[2px]">€ 10</span>
                            <span className="text-body-color ml-2 text-base font-normal text-muted-foreground">Per Month</span>
                        </h2>
                        <div className="mb-[30px]">
                            <h5 className="text-dark mb-5 text-lg font-medium dark:text-white">
                                Features
                            </h5>
                            <ul className="mt-8 flex flex-col space-y-4">
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">
                                      <p className="whitespace-nowrap text-lg text-white">Full access to beta version</p>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {user.planName== "beta" ?
                            <Link href="#" className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]">Active plan</Link>:
                            <Link href={`https://editbag.gumroad.com/l/jswlxl?wanted=true&email=${user.email}`} className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]">Upgrade</Link>
                        }
                    </Glowing>
                    <Glowing color="#8ecffb" className="relative w-full max-w-[22rem] overflow-hidden rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14">
                        <p className="recommended absolute right-[-50px] inline-block -rotate-90 rounded-bl-md rounded-tl-md px-5 py-2 text-base font-medium text-black">Recommended</p>
                        <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">Annually</span>
                        <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                            <span className="-ml-1 -tracking-[2px]">€ 199</span>
                            <span className="text-body-color ml-2 text-base font-normal text-muted-foreground">Per Year</span>
                        </h2>
                        <div className="mb-[30px]">
                            <h5 className="text-dark mb-5 text-lg font-medium dark:text-white">Features</h5>
                            <ul className="mt-8 flex flex-col space-y-4">
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}HD Footage & Photos{" "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}Musics & sound Effects{" "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" Adobe's app templates "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}Pack for video editing and thumbnails{" "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}Cancel anytime{" "}</span>
                                </li>
                            </ul>
                        </div>
                        {user.planName== "annually" ?
                            <Link href="#" className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]">Active plan</Link>:
                            <Link href={`https://editbag.gumroad.com/l/jswlxl?wanted=true&email=${user.email}`} className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]">Upgrade</Link>
                        }
                    </Glowing>
                    <Glowing color="#8ecffb" className="relative w-full max-w-[22rem] rounded-xl p-6 px-8 py-10 sm:p-12 md:w-1/2 lg:w-1/3 lg:px-6 lg:py-10 xl:p-14">
                          <span className="mb-5 block rounded-full bg-white/10 px-6 py-2 text-xl font-medium text-white backdrop-blur-2xl">Monthly</span>
                          <h2 className="text-dark mb-4 text-4xl font-semibold dark:text-white xl:text-[42px] xl:leading-[1.21]">
                            <span className="-ml-1 -tracking-[2px]">€ 19</span>
                            <span className="text-body-color ml-2 text-base font-normal text-muted-foreground">Per Month</span>
                          </h2>
                        <div className="mb-[30px]">
                            <h5 className="text-dark mb-5 text-lg font-medium dark:text-white">Features</h5>
                            <ul className="mt-8 flex flex-col space-y-4">
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}HD Footage & Photos{" "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}Musics & sound Effects{" "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" Adobe's app templates "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}Pack for video editing and thumbnails{" "}</span>
                                </li>
                                <li className="inline-flex items-center space-x-2">
                                    <Check color="#ffffff"/>
                                    <span className="text-base font-medium text-white">{" "}Cancel anytime{" "}</span>
                                </li>
                            </ul>
                        </div>
                        {user.planName== "monthly" ?
                            <Link href="#" className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]">Active plan</Link>:
                            <Link href={`https://editbag.gumroad.com/l/jswlxl?wanted=true&email=${user.email}`} className="hover:bg-blue-dark inline-block rounded-md bg-white px-7 py-3 text-center text-base font-medium text-black transition hover:bg-[#ffffffbb]">Upgrade</Link>
                        }
                    </Glowing>
                </div>
            </div>)
    } else {
        redirect("/signin")
    }
}
