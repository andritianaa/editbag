"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useAskToSub } from "../../store/askToSub"
import { User } from "@prisma/client"
import { useEffect } from "react"

interface AskToSbuscribeProps {
    user: User
}
export function AskToSbuscribe(props: AskToSbuscribeProps) {
    const { isAsking, stopAsking, startAsking } = useAskToSub()
    const handleChange = () => {
        if (isAsking) {
            stopAsking()
        } else {
            startAsking()
        }
    }
    useEffect(() => {
        console.log(isAsking)
    }, [isAsking])
    return (
        <Dialog onOpenChange={handleChange} open={isAsking}>
            <DialogTrigger asChild>
                <></>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join Our Community!</DialogTitle>
                    <DialogDescription>
                        Enjoy exclusive features and benefits by subscribing. Gain access to premium content, resources, and more.
                    </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                    <a
                        target="_blank"
                        href={`https://editbag.gumroad.com/l/jswlxl?wanted=true&email=${props.user.email}`}
                        className={"p-4 bg-[#ffffff] w-full flex justify-between items-center hover:opacity-90"}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"/gumroad.png"} className={"h-7"} alt={""} />
                        <p className={"text-black text-lg font-bold"}>Subscribe Monthly</p>
                    </a>
                    <a
                        target="_blank"
                        href={`https://editbag.gumroad.com/l/jswlxl?wanted=true&email=${props.user.email}`}
                        className={"p-4 bg-[#ffffff] w-full flex justify-between items-center hover:opacity-90"}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={"/gumroad.png"} className={"h-7"} alt={""} />
                        <p className={"text-black text-lg font-bold"}>Subscribe Yearly</p>
                    </a>
                    <p className="text-muted-foreground">If you've just paid your subscription, please wait up to 5 minutes for Gumroad to update our system with your payment information</p>
                </div>
            </DialogContent>
        </Dialog>
    )
}
