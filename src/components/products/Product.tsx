/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  ArrowDownToLine,
  FolderMinus,
  FolderPlus,
  Forward,
} from "lucide-react";
import { useState, useRef } from "react";
import { addFavorite, removeFavorite } from "../../actions/favorite.actions";
import { addDownload } from "@/actions/download.actions";
import { useLoadingStore } from "@/store/loading";
import { toast } from "sonner";

export type ProductProps = {
  id: number;
  imageUrl: string;
  subImage: string | null;
  title: string;
  subTitle: string;
  category: string;
  isFavorite: boolean;
};

export const Product = (props: ProductProps) => {
  const videoExtensions = /\.(mp4|3gp|avi|mov)$/i;
  const isVideo = videoExtensions.test(props.subImage || "");
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const randomId = Math.floor(Math.random() * 1000);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (props.subImage) {
      document.getElementById(
        `firstImage${props.id}${randomId}`
      )!.style.display = "none";

      if (isVideo) {
        const videoElement: any = videoRef.current;
        if (videoElement) {
          videoElement.src = props.subImage;
          videoElement.style.display = "block";
          videoElement.play();
        }
      } else {
        document.getElementById(
          `secondImage${props.id}${randomId}`
        )!.style.display = "block";
      }
    }
  };

  const handleMouseLeave = () => {
    document.getElementById(`firstImage${props.id}${randomId}`)!.style.display =
      "block";

    if (isVideo) {
      const videoElement: any = videoRef.current;
      if (videoElement) {
        videoElement.pause();
        videoElement.style.display = "none";
        videoElement.src = "";
      }
    } else {
      document.getElementById(
        `secondImage${props.id}${randomId}`
      )!.style.display = "none";
    }
  };

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    setIsFavorite(false);
    removeFavorite(props.id);
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://www.editbag.com/products/${props.id}`
      );
      toast("Link copied to clipboard! You can now share it anywhere.");
    } catch (err) {
      toast("Error copying the link. Please try again.");
    }
  };

  const handleAddToFavorites = async (e) => {
    e.preventDefault();
    setIsFavorite(true);
    addFavorite(props.id);
  };

  const { startLoading, stopLoading } = useLoadingStore();

  const handleDownload = async (e) => {
    e.preventDefault();
    startLoading();

    try {
      const url = await addDownload(props.id);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", url.split("/").pop() || "default_filename");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      toast.error("Erreur lors du téléchargement");
    }

    stopLoading();
  };

  return (
    <div className="w-full max-w-[24rem] p-2">
      <div className="w-full overflow-hidden rounded-xl bg-[rgba(38,38,38,.9)]">
        <Card className="w-full max-w-sm overflow-hidden rounded-md bg-[rgba(38,38,38,.9)]">
          <Link
            href={`/products/${props.id}`}
            className="relative w-full"
            style={{ cursor: "pointer" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              id={`firstImage${props.id}${randomId}`}
              src={props.imageUrl}
              alt=""
              style={{ display: "block" }}
              className="aspect-video h-full w-full object-cover shadow-xl"
            />
            {props.subImage &&
              (isVideo ? (
                <video
                  ref={videoRef}
                  id={`secondImage${props.id}${randomId}`}
                  muted
                  controls
                  style={{ display: "none" }}
                  className="productVideo aspect-video h-full w-full object-cover shadow-xl"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  id={`secondImage${props.id}${randomId}`}
                  src={props.subImage}
                  alt=""
                  style={{ display: "none" }}
                  className="aspect-video h-full w-full object-cover shadow-xl"
                />
              ))}
            <Badge className="absolute bottom-2 left-2 rounded">
              {props.category}
            </Badge>
          </Link>
          <div className="flex items-center justify-between p-4">
            <div className="">
              <p className="font-semibold">{props.title}</p>
              <p className="text-sm text-muted-foreground">{props.subTitle}</p>
            </div>
            <div className="flex items-center gap-4">
              <Forward onClick={copyToClipboard} />
              {isFavorite ? (
                <FolderMinus
                  onClick={handleRemoveFromFavorites}
                  color="#ffffff"
                />
              ) : (
                <FolderPlus onClick={handleAddToFavorites} color="#fff" />
              )}
              <ArrowDownToLine onClick={(e) => handleDownload(e)} />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
