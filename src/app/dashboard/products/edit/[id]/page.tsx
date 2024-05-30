import type { PageParams } from "@/types/next";
import { Form } from "./Form";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { Post } from "@prisma/client";
export default async function RoutePage(props: PageParams<{ id: string }>) {
  const post: Post | null = await prisma.post.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
  });
  if (post) {
    return <Form {...post} />;
  } else notFound();
}
