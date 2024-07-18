/* eslint-disable @next/next/no-img-element */
"use client";
import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover";
import { Photo } from "@/types/pexels";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAskToSub } from "../../../store/askToSub";
import { canDownload } from "../../../actions/canDownload";
import { useEffect, useState } from "react";

export const PhotoContainer = (props: Photo) => {
  const [isSubed, setIsSubed] = useState(false)
  const { startAsking, stopAsking } = useAskToSub()
  const check = async () => {
    const e = await canDownload()
    if (e) {
      setIsSubed(true)
    } else {
      startAsking()
    }
  }
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`overflow-hidden rounded-md`}
          style={{ backgroundColor: props.avg_color }}
          onClick={check}
        >
          <DirectionAwareHover imageUrl={props.src.large}>
            <p>{props.alt}</p>
          </DirectionAwareHover>
        </div>
      </DialogTrigger>
      {isSubed == true &&
        <DialogContent className="max-w-5xl">
          <Content {...props} />
        </DialogContent>
      }
    </Dialog>
  );
};

const Content = (props: Photo) => {



  const handleDownload = async (type: string) => {
    try {
      const response = await fetch(props.src[type]);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = type + " - " + props.alt || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image", error);
    }
  };
  return (
    <div className="flex gap-12">
      <img
        alt={props.alt}
        src={props.src.large}
        className="h-auto w-[50%] flex-1 rounded-lg object-cover shadow-md"
      />
      <div className="flex flex-1 flex-col justify-between">
        <div className="">
          <p className="mb-8 text-3xl font-semibold leading-none tracking-tight">
            {props.alt}
          </p>

          <div className="flex gap-8">
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-lg">Photographer</p>
              <p className="text-muted-foreground">{props.photographer}</p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-lg">Dimmension</p>
              <p className="text-muted-foreground">
                {props.width} x {props.height}
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-lg">Color</p>
              <p
                className="rounded-lg text-transparent"
                style={{ backgroundColor: props.avg_color }}
              >
                {props.width} x {props.height}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <p className="text-lg">Download</p>

          <Button variant="outline" onClick={() => handleDownload("large2x")}>
            Large2x
          </Button>
          <Button variant="outline" onClick={() => handleDownload("medium")}>
            Medium
          </Button>
          <Button variant="outline" onClick={() => handleDownload("portrait")}>
            portrait
          </Button>
          <Button variant="outline" onClick={() => handleDownload("landscape")}>
            landscape
          </Button>
          <Button
            className="bg-white hover:bg-slate-200"
            onClick={() => handleDownload("original")}
          >
            Original
          </Button>
        </div>
      </div>
    </div>
  );
};
