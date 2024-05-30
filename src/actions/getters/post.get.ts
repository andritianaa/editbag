"use server";

import { Post } from "@prisma/client";
import { currentUser } from "../../lib/current-user";
import { prisma } from "../../prisma";

export const getPost = async (): Promise<
  (Omit<Post, "id"> & { id: string; isFavorite: boolean })[]
> => {
  const posts = await prisma.post.findMany();
  const user = await currentUser();

  const favoritePosts = await prisma.favorite.findMany({
    where: {
      userId: user?.id ?? 0,
    },
    select: {
      postId: true,
    },
  });
  const favoritePostIds = favoritePosts.map((fav) => fav.postId);
  const results = posts.map((post) => ({
    ...post,
    id: post.id.toString(),
    isFavorite: favoritePostIds.includes(post.id),
  }));
  return results;
};
