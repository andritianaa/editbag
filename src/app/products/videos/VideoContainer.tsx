/* eslint-disable @next/next/no-img-element */
"use client";
import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover";
import { Photo, Video } from "@/types/pexels";

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
import { bitsToMegabits, formatTime } from "@/lib/utils";
import { useAskToSub } from "../../../store/askToSub";
import { canDownload } from "../../../actions/canDownload";
import { useState } from "react";

export const VideoContainer = (props: Video) => {
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
        <div className={`overflow-hidden rounded-md`} onClick={check}>
          <DirectionAwareHover imageUrl={props.video_pictures[0].picture}>
            <p>{props.user.name}</p>
          </DirectionAwareHover>
        </div>
      </DialogTrigger>
      {isSubed &&
        <DialogContent className="max-w-5xl">
          <Content {...props} />
        </DialogContent>
      }
    </Dialog>
  );
};

const Content = (props: Video) => {

  const handleDownload = async (videoUrl: string, quality: string) => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download =
        quality.toUpperCase() + " - " + props.user.id + ".mp4" ||
        "download.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download image", error);
    }
  };
  return (
    <div className="flex items-center gap-12">
      <video
        src={props.video_files[props.video_files.length - 1].link}
        className="max-w-[50%] flex-1 rounded-lg shadow-md"
        controls
      ></video>
      <div className="flex flex-1 flex-col justify-between">
        <div className="">
          <p className="mb-8 text-3xl font-semibold leading-none tracking-tight"></p>

          <div className="flex gap-8">
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-lg">Author</p>
              <p className="text-muted-foreground">{props.user.name}</p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-lg">Dimmension</p>
              <p className="text-muted-foreground">
                {props.width} x {props.height}
              </p>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p className="text-lg">Duration</p>
              <p className="text-muted-foreground">
                {" "}
                {formatTime(props.duration)}
              </p>
            </div>
            {props.avg_color && (
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-lg">Color</p>
                <p
                  className="rounded-lg text-transparent"
                  style={{ backgroundColor: props.avg_color }}
                >
                  {props.width} X {props.height}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2">
          <p className="text-lg">Download</p>
          {props.video_files.map((f, i) => (
            <Button
              key={i}
              variant="outline"
              onClick={() => handleDownload(f.link, f.quality)}
              className={`${f.width == props.width && f.height == props.height
                ? "bg-white text-black hover:bg-slate-200 hover:text-black"
                : ""
                }  `}
            >
              {f.width} X {f.height} - {f.fps} ips
              <span className="mx-2 uppercase">({f.quality}) - </span>
              {bitsToMegabits(f.size)} MB
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
