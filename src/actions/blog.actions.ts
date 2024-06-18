"use server";

import { PostStatus } from "@prisma/client";
import { currentUser } from "@/lib/current-user";
import { prisma } from "../prisma";

export const publish = async (
  type: string,
  title: string,
  content: string,
  image: string,
  status: PostStatus,
  subtitle: string,
  subImage: string,
  fileSize: string,
  fileUrl: string,
  category: string,
  subCategory: string
) => {
  const user = await currentUser();
  if (user) {
    console.log(title, content, image);
    await prisma.post.create({
      data: {
        title,
        type,
        subtitle,
        content,
        image,
        subImage,
        fileSize,
        fileUrl,
        status,
        category,
        subCategory,
        createdAt: new Date(),
      },
    });
  }
};

export const edit = async (
  type: string,
  title: string,
  content: string,
  image: string,
  status: PostStatus,
  subtitle: string,
  subImage: string | null,
  fileSize: string,
  fileUrl: string,
  category: string,
  subCategory: string,
  id: number
) => {
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      type,
      subtitle,
      content,
      image,
      subImage,
      fileSize,
      fileUrl,
      status,
      category,
      subCategory,
    },
  });
};

export const remove = async (id: number) => {
  await prisma.post.update({
    where: {
      id,
    },
    data: {
      status: PostStatus.trash,
    },
  });
};
