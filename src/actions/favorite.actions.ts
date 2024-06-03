"use server";

import { prisma } from "../prisma";
import { currentUser } from "../lib/current-user";

export const addFavorite = async (postId: number) => {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const existingFavorite = await prisma.favorite.findFirst({
    where: {
      postId: postId,
      userId: user.id,
    },
  });
  if (!existingFavorite) {
    await prisma.favorite.create({
      data: {
        postId,
        userId: user.id,
      },
    });
  }
};

export const removeFavorite = async (postId: number) => {
  const user = await currentUser();
  if (!user) {
    return;
  }
  const favorite = await prisma.favorite.findFirst({
    where: {
      postId: postId,
      userId: user.id,
    },
  });
  if (favorite) {
    await prisma.favorite.delete({
      where: {
        id: favorite.id,
      },
    });
  }
};

export const getFavorite = async (): Promise<
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
    const downloaded = await prisma.favorite.findMany({
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
