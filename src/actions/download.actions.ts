"use server";
import { prisma } from "../prisma";
import { currentUser } from "../lib/current-user";

export const addDownload = async (postId: number): Promise<string> => {
  const user = await currentUser();
  if (!user) {
    throw new Error("you must be connected to download");
  } else {
    const existingDownloaded = await prisma.downloaded.findFirst({
      where: {
        postId: postId,
        userId: user.id,
      },
    });

    console.log(existingDownloaded);

    if (!existingDownloaded) {
      await prisma.downloaded.create({
        data: {
          postId,
          userId: user.id,
        },
      });
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (post) return post.fileUrl;
    else throw new Error("post not found");
  }
};
export const getDownloaded = async (): Promise<
  {
    post: {
      id: number;
      title: string;
      subtitle: string;
      category: string;
      imageUrl: string;
    };
  }[]
> => {
  const user = await currentUser();
  if (!user) {
    throw new Error("vous devez être connecté pour télécharger");
  } else {
    const downloaded = await prisma.downloaded.findMany({
      where: {
        userId: user.id,
      },
      include: {
        post: {
          select: {
            id: true,
            title: true,
            subtitle: true,
            category: true,
            image: true, // Sélectionner spécifiquement l'image du post
          },
        },
      },
    });
    return downloaded.map((d) => ({
      post: {
        id: d.post.id,
        title: d.post.title,
        subtitle: d.post.subtitle,
        category: d.post.category,
        imageUrl: d.post.image, // Assurez-vous que la propriété renvoyée correspond à la structure attendue
      },
    }));
  }
};
