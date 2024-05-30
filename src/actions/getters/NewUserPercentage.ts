"use server"

import { prisma } from "@/prisma";

export const getNewUserPercentage = async () => {
    try {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const newUsersLast30Days = await prisma.user.count({
            where: {
                createdAt: {
                    gte: thirtyDaysAgo
                }
            }
        });
        const totalUsers = await prisma.user.count();
        const percentageNewUsers = (newUsersLast30Days / totalUsers) * 100;
        return percentageNewUsers;
    } catch (error) {
        throw new Error(`Erreur lors du calcul du pourcentage de nouveaux utilisateurs : ${error}`);
    }
}
