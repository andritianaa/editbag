/* eslint-disable @next/next/no-img-element */
import type { PageParams } from "@/types/next";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Download } from "@/features/Download";
import { Content } from "./Content";
import { currentUser } from "../../../lib/current-user";
import { Button } from "../../../components/ui/button";
import { Footer } from "../../../components/common/Footer";

export default async function RoutePage(props: PageParams<{ id: string }>) {
  const user = await currentUser();

  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(props.params.id),
    },
    include: {
      Downloaded: {
        where: {
          userId: user?.id,
        },
      },
    },
  });

  if (post) {
    return (
      <>
        <div className="dark mx-auto min-h-[calc(100vh-10.56rem)] max-w-7xl pt-6">
          <div className="max-w-6xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex w-full gap-x-5 sm:items-center sm:gap-x-3">
                <div className="grow">
                  <div className="flex items-center justify-between gap-x-2">
                    <div>
                      <ul className="text-xs text-gray-500 dark:text-neutral-500">
                        <li className="relative inline-block pe-6 capitalize before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600">
                          {post.type}
                        </li>
                        <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600">
                          {post.subCategory}
                        </li>
                        <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600">
                          <Badge variant="default">{post.category}</Badge>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-around space-y-5 md:space-y-8">
              <img
                className="w-full max-w-xl rounded-xl object-cover shadow-lg"
                src={post.image}
                alt="Image Description"
              />
              <div className="">
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold dark:text-white md:text-3xl">
                    {post.title}
                  </h2>
                  <div className="flex gap-2">
                    {post.status == "online" && user && (
                      <Download postId={post.id} />
                    )}
                    {post.Downloaded.some((d) => d.userId === user?.id) && (
                      <Button variant="ghost">
                        You have already downloaded it
                      </Button>
                    )}
                  </div>
                </div>
                <Content content={post.content} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else notFound();
}
