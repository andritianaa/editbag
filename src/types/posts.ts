import { Prisma, User } from "@prisma/client";


export type PostWithAuthor = Prisma.PostGetPayload<{
    include: { author: true };
}> & { author: User };

