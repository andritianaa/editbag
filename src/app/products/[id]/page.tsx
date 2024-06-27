/* eslint-disable @next/next/no-img-element */
import type { PageParams } from "@/types/next";
import { prisma } from "@/prisma";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Download } from "@/features/Download";
import { Content } from "./Content";
import { currentUser } from "@/lib/current-user";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/common/Footer";
import { getPost } from "@/actions/getters/post.get";
import { Product } from "@/components/products/Product";
import { BackBtn } from "./BackBtn";
export default async function RoutePage(props: PageParams<{ id: string }>) {
  const user = await currentUser();
  let similarPosts = await getPost();
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

  similarPosts = similarPosts.filter(
    (similarPost) =>
      similarPost.status === "online" && similarPost.type === post?.type
  );

  if (post) {
    return (
      <>
        <div className="dark mx-auto min-h-[calc(100vh-10.56rem)] max-w-7xl pt-6">
          <div className="max-w-6xl">
            <BackBtn />
            <div className="flex gap-16 space-y-5 md:space-y-8">
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
                  <div>
                    <ul className="text-xs text-gray-500 dark:text-neutral-500">
                      <li className="relative inline-block pe-6 capitalize before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600">
                        {post.category}
                      </li>
                      <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600">
                        {post.type}
                      </li>
                      <li className="relative inline-block pe-6 before:absolute before:end-2 before:top-1/2 before:size-1 before:-translate-y-1/2 before:rounded-full before:bg-gray-300 last:pe-0 last-of-type:before:hidden dark:text-neutral-400 dark:before:bg-neutral-600">
                        {post.subCategory}
                      </li>
                    </ul>
                  </div>
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

            <h2 className="mt-8 text-2xl font-bold dark:text-white md:text-3xl">
              Similar products
            </h2>
            <div className="mt-2 flex flex-wrap justify-start">
              {similarPosts.map((product) => (
                <Product
                  key={product.id}
                  subImage={product.subImage ?? null}
                  id={parseInt(product.id)}
                  imageUrl={product.image}
                  title={product.title}
                  category={product.category}
                  subTitle={product.subtitle}
                  isFavorite={product.isFavorite}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else notFound();
}
