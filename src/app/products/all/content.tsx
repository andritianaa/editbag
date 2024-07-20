"use client";
import { LayoutContent } from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import { useEffect, useState } from "react";
import { Tab } from "@/components/products/Tab";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { fetchPhotosFromAll, fetchVideos } from "@/lib/pexels";
import { Photo, Video } from "@/types/pexels";
import { toast } from "sonner";
import { VideoContainer } from "./VideoContainer";
import Link from "next/link";
import { PhotoContainer } from "@/app/products/all/PhotoContainer";
import { getPost } from "@/actions/getters/post.get";
import { Post } from "@prisma/client";
import { Product } from "@/components/products/Product";
import { Skeleton } from "@/components/ui/skeleton";

export type contentProps = {};

export const Content = (props: contentProps) => {
  console.log(props);

  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search");
  const [isLoading, setIsLoading] = useState(true);
  const [textSearch, setTextSearch] = useState<string>(currentSearch || "");
  const [videos, setVideos] = useState<Video[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [emoji, setEmoji] = useState<
    (Omit<Post, "id"> & {
      id: string;
      isFavorite: boolean;
      favoriteCount: number;
      downloadedCount: number;
    })[]
  >([]);
  const [template, setTemplate] = useState<
    (Omit<Post, "id"> & {
      id: string;
      isFavorite: boolean;
      favoriteCount: number;
      downloadedCount: number;
    })[]
  >([]);
  const [posts, setPosts] = useState<
    (Omit<Post, "id"> & {
      id: string;
      isFavorite: boolean;
      favoriteCount: number;
      downloadedCount: number;
    })[]
  >([]);

  const fetchVideo = async () => {
    try {
      const p = await fetchVideos({
        query: textSearch != "" ? textSearch : "",
        orientation: "landscape",
        page: 1,
      });
      setVideos(p.videos);
      console.log(p);
    } catch (e) {
      toast.error("There is an error");
      console.log(e);
    }
  };

  const fetchPhoto = async () => {
    try {
      const p = await fetchPhotosFromAll({
        query: textSearch.length ? textSearch : "",
        size: "",
        color: "",
        page: 1,
      });
      setPhotos(p.photos);
      console.log(p);
    } catch (e) {
      toast.error("There is an error");
      console.log(e);
    }
  };

  const fetchPosts = async () => {
    const products = await getPost();
    console.log(products);

    setPosts(products);

    const emojiFiltered = products.filter(
      (product) =>
        product.status === "online" &&
        product.type === "emoji" &&
        (textSearch.trim() === "" ||
          product.title.toLowerCase().includes(textSearch.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(textSearch.toLowerCase()) ||
          product.category.toLowerCase().includes(textSearch.toLowerCase()) ||
          product.subCategory.toLowerCase().includes(textSearch.toLowerCase()))
    );

    const templatesFiltered = products.filter(
      (product) =>
        product.status === "online" &&
        product.type === "templates" &&
        (textSearch.trim() === "" ||
          product.title.toLowerCase().includes(textSearch.toLowerCase()) ||
          product.subtitle.toLowerCase().includes(textSearch.toLowerCase()) ||
          product.category.toLowerCase().includes(textSearch.toLowerCase()) ||
          product.subCategory.toLowerCase().includes(textSearch.toLowerCase()))
    );

    setEmoji(emojiFiltered);
    setTemplate(templatesFiltered);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPosts();
    fetchVideo();
    fetchPhoto();
  }, []);

  return (
    <>
      <div className="mx-auto flex w-full max-w-[1500px] gap-4 px-4 pr-0 md:justify-center">
        <LayoutContent className="flex min-h-[calc(100vh-10.56rem)] gap-2 md:justify-center">
          <div className="flex w-full flex-col items-center">
            <div className="w-full max-w-6xl">
              <Tab type="home" />
              {template.length > 0 && (
                <Link
                  href={`/products?search=${currentSearch}`}
                  className="mt-8 flex w-fit items-center gap-4 border-b-2 border-b-transparent text-xl hover:gap-6 hover:border-b-white"
                >
                  Templates
                  <ArrowRight size={24} />
                </Link>
              )}
              <div className="mt-2 flex flex-wrap justify-start">
                {template.slice(0, 9).map((product) => (
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
              {emoji.length > 0 && (
                <Link
                  href={`/products/emoji?search=${currentSearch}`}
                  className="mt-8 flex w-fit items-center gap-4 border-b-2 border-b-transparent text-xl hover:gap-6 hover:border-b-white"
                >
                  Emoji
                  <ArrowRight size={24} />
                </Link>
              )}
              <div className="mt-2 flex flex-wrap justify-start">
                {emoji.slice(0, 9).map((product) => (
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
              {photos.length > 0 && (
                <Link
                  href={`/products/images?search=${currentSearch}`}
                  className="mt-8 flex w-fit items-center gap-4 border-b-2 border-b-transparent text-xl hover:gap-6 hover:border-b-white"
                >
                  Images
                  <ArrowRight size={24} />
                </Link>
              )}
              <div className="my-4 columns-3 gap-2 space-y-2">
                {photos.slice(0, 9).map((p, i) => (
                  <PhotoContainer key={i} {...p} />
                ))}
              </div>
              {videos.length > 0 && (
                <Link
                  href={`/products/videos?search=${currentSearch}`}
                  className="mt-8 flex w-fit items-center gap-4 border-b-2 border-b-transparent text-xl hover:gap-6 hover:border-b-white"
                >
                  Videos
                  <ArrowRight size={24} />
                </Link>
              )}
              <div className="my-4 columns-3 gap-2 space-y-2">
                {videos.slice(0, 9).map((p, i) => (
                  <VideoContainer key={i} {...p} />
                ))}
              </div>

              {isLoading && (
                <div className="my-4 columns-3 gap-2 space-y-2">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <Skeleton key={index} className="h-96 w-full" />
                  ))}
                </div>
              )}

              {emoji.length == 0 &&
                videos.length == 0 &&
                template.length == 0 &&
                photos.length == 0 &&
                isLoading == false && (
                  <Card className="mt-2 flex flex-col items-center justify-center gap-4 p-6">
                    <CardTitle>Oups! There is no product</CardTitle>
                    <CardDescription>
                      No products found. Please try again with different
                      filters.
                    </CardDescription>
                  </Card>
                )}
            </div>
          </div>
        </LayoutContent>
      </div>
    </>
  );
};
