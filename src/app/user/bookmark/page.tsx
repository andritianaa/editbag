import type { PageParams } from "@/types/next";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getFavorite } from "@/actions/favorite.actions";

export default async function RoutePage(props: PageParams<{}>) {
  const saved = await getFavorite();
  return (
    <div className="p-8">
      <CardTitle className="pb-4">All saved files</CardTitle>

      <div className="mt-2 flex w-full flex-wrap gap-4 p-2">
        {saved.map((post) => (
          <Link
            href={`/products/${post.post.id}`}
            key={post.post.id}
            className="w-1/3 rounded border bg-background p-4 hover:bg-[#191919] hover:shadow-xl"
          >
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
      </div>
      {saved.length == 0 && (
        <Card className="mt-2 flex max-w-lg flex-col justify-center gap-4 p-6">
          <CardTitle>Oops! No files saved</CardTitle>
          <CardDescription>
            You have not saved any files yet. Your saved files will appear here.
          </CardDescription>
        </Card>
      )}
    </div>
  );
}
