import { User } from "@prisma/client"
import { baseAuth } from "./auth"

export const currentUser = async () => {
    const session = await baseAuth()
    if (!session) return null
    const user = session.user as User
    return user
}

export const requiredCurrentUser = async () => {
    const user = await currentUser()
    if (!user) throw new Error()
    return user
}