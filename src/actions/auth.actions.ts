"use server"
import { signIn, signOut } from "@/lib/auth";

export const SignOutAction = async () => {
    await signOut();
}

export const SignInAction = async () => {
    await signIn();
}