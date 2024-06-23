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
    orderBy: {
      postId: "desc",
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

export const mostDownloadedPost = async (
  type: string
): Promise<(Omit<Post, "id"> & { id: string; isFavorite: boolean })[]> => {
  const user = await currentUser();
  const posts = await prisma.post.findMany({
    where: {
      type: type,
      status: "online",
    },
    take: 3,
    orderBy: {
      Downloaded: {
        _count: "desc",
      },
    },
    include: {
      Downloaded: true,
    },
  });
  const favoritePosts = await prisma.favorite.findMany({
    where: {
      userId: user?.id ?? 0,
    },
    select: {
      postId: true,
    },
    orderBy: {
      postId: "desc",
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
export const mostPopularPost = async (
  type: string
): Promise<(Omit<Post, "id"> & { id: string; isFavorite: boolean })[]> => {
  const user = await currentUser();
  const posts = await prisma.post.findMany({
    where: {
      type: type,
      status: "online",
    },
    take: 3,
    orderBy: {
      Favorite: {
        _count: "desc",
      },
    },
    include: {
      Favorite: true,
    },
  });
  const favoritePosts = await prisma.favorite.findMany({
    where: {
      userId: user?.id ?? 0,
    },
    select: {
      postId: true,
    },
    orderBy: {
      postId: "desc",
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
