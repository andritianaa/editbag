"use server"
import { currentUser } from "../lib/current-user";

export const canDownload = async (): Promise<Boolean> => {
    console.log("here");

    const user = await currentUser()
    return user?.subscribeEnd
        ? new Date(user.subscribeEnd).getTime() > new Date().getTime()
        : false;
}