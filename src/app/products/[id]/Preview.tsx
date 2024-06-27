/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRef } from "react";
export type previewProps = { url: string };

export const Preview = (props: previewProps) => {
  const videoExtensions = /\.(mp4|3gp|avi|mov)$/i;
  const isVideo = videoExtensions.test(props.url || "");
  const videoRef = useRef(null);
  const videoElement: any = videoRef.current;
  if (videoElement) {
    videoElement.src = props.url;
    videoElement.style.display = "block";
    videoElement.play();
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Preview</Button>
      </DialogTrigger>
      <DialogContent className="">
        <div className="">
          {isVideo ? (
            <video
              ref={videoRef}
              id="videoPreview"
              muted
              controls
              loop
              src={props.url}
              className="h-full w-full max-w-4xl object-cover shadow-xl"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={props.url}
              alt=""
              id="imgPreview"
              className="aspect-video h-full w-full rounded-lg object-cover shadow-xl"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
