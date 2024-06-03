import type { PageParams } from "@/types/next";
import { prisma } from "../../prisma";
import { getDownloaded } from "../../actions/download.actions";
import { Layout } from "../../components/layout/Layout";
import { Card, CardTitle } from "../../components/ui/card";
import Image from "next/image";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";
import { NavBar } from "../../components/common/NavBar";
import { getFavorite } from "../../actions/favorite.actions";
import { Footer } from "../../components/common/Footer";

export default async function RoutePage(props: PageParams<{}>) {
  const downloaded = await getFavorite();
  return (
    <>
      <NavBar />
      <Layout className="flex flex-col items-center justify-center">
        <Card className="mt-2 flex w-full max-w-xl flex-col-reverse p-2">
          {downloaded.map((post) => (
            <Link href={`/products/${post.post.id}`} key={post.post.id}>
              <div className="flex gap-2 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.post.imageUrl}
                  alt={post.post.title}
                  className="size-16 rounded-lg"
                />
                <div className="flex flex-col">
                  <h3>{post.post.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {post.post.subtitle}
                  </p>
                  <Badge className="w-fit">{post.post.category}</Badge>
                </div>
              </div>
            </Link>
          ))}
          <CardTitle className="pb-4">All files you have saved</CardTitle>
        </Card>
      </Layout>
      <Footer />
    </>
  );
}
