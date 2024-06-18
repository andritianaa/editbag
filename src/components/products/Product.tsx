/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { BookmarkCheck, BookmarkPlus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { addFavorite, removeFavorite } from "../../actions/favorite.actions";

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
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  const handleMouseEnter = () => {
    if (props.subImage) {
      document.getElementById(`firstImage${props.id}`)!.style.display = "none";
      document.getElementById(`secondImage${props.id}`)!.style.display =
        "block";
    }
  };

  const handleMouseLeave = () => {
    document.getElementById(`firstImage${props.id}`)!.style.display = "block";
    document.getElementById(`secondImage${props.id}`)!.style.display = "none";
  };

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    setIsFavorite(false);
    removeFavorite(props.id);
  };
  const handleAddToFavorites = async (e) => {
    e.preventDefault();
    setIsFavorite(true);
    addFavorite(props.id);
  };
  return (
    <Link
      href={`/products/${props.id}`}
      className="relative w-full max-w-xs overflow-hidden rounded-xl p-4 hover:bg-[rgba(38,38,38,.9)]"
    >
      {isFavorite ? (
        <Button
          variant="outline"
          size="icon"
          className="absolute right-6 top-6 z-10 border-none bg-red-700/50 hover:bg-red-700/70"
          onClick={handleRemoveFromFavorites}
        >
          <BookmarkCheck color="#ffffff" />
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={handleAddToFavorites}
          className="absolute right-6 top-6 z-10 border-none bg-muted-foreground/50 hover:bg-muted-foreground/70"
        >
          <BookmarkPlus color="#ffffff" />
        </Button>
      )}
      <Card className="w-full max-w-sm space-y-4 overflow-hidden rounded-none bg-transparent pb-2">
        <div
          className="relative aspect-square w-full"
          style={{ cursor: "pointer" }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            id={`firstImage${props.id}`}
            src={props.imageUrl}
            alt=""
            style={{ display: "block" }}
            className="h-full w-full rounded-md object-cover shadow-xl"
          />
          {props.subImage && (
            <img
              id={`secondImage${props.id}`}
              src={props.subImage}
              alt=""
              style={{ display: "none" }}
              className="h-full w-full rounded-md object-cover shadow-xl"
            />
          )}
          <Badge className="absolute bottom-2 left-2 rounded">
            {props.category}
          </Badge>
        </div>
        <div className="h-16">
          <p className="text-md font-semibold">{props.title}</p>
          <p className="text-muted-foreground">{props.subTitle}</p>
        </div>
      </Card>
    </Link>
  );
};
