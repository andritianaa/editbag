/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { uploadMultipleFile } from "@/actions/upload.actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useLoadingStore } from "../../store/loading";
import { Card } from "../../components/ui/card";

export type ImagesProps = {
  image: string;
  onImageUpload: (newImageUrl: string) => void;
  className?: string;
  title: string;
  subTitle: string;
};

export const ImageUpload = (props: ImagesProps) => {
  const { startLoading, stopLoading } = useLoadingStore();
  const [files, setFiles] = useState<File[]>([]);
  const [image, setImage] = useState<string>(props.image);
  const componentId = Math.floor(Math.random() * 100);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    startLoading();
    e.preventDefault();
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setFiles(fileArray);
      setImage(URL.createObjectURL(fileArray[0]));
      const formData = new FormData();
      fileArray.forEach((file) => formData.append("files", file));
      if (fileArray.length > 0) {
        const newImageUrls = await uploadMultipleFile(formData);
        setImage(newImageUrls[0]);
        props.onImageUpload(newImageUrls[0]);
        console.log("uploaded");
      } else {
        toast("You must provide a file");
      }
    }
    stopLoading();
  };

  return (
    <Card
      className={cn(
        props.className,
        "block flex-1 rounded-lg border border-input bg-background p-4 text-sm space-y-4 min-w-lg "
      )}
    >
      <div className="">
        <Label>{props.title}</Label>
        <Label className="text-sm font-medium text-muted-foreground">
          {props.subTitle}
        </Label>
      </div>
      <form>
        {files.length > 0 || image ? (
          <>
            <img
              src={image}
              className="rounde-lg size-40 object-cover"
              alt=""
            />
            <label
              htmlFor={`image${componentId}`}
              className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#191919] p-2 text-sm"
            >
              Select another image
            </label>
          </>
        ) : (
          <>
            <label
              htmlFor={`image${componentId}`}
              className="flex size-40 cursor-pointer items-center justify-center rounded-lg border-dashed bg-[#191919] p-2 text-center text-sm"
            >
              Click to select image or drop here
            </label>
            <label
              htmlFor={`image${componentId}`}
              className="transparent w-full cursor-pointer p-2 text-sm text-transparent"
            >
              Select another image
            </label>
          </>
        )}

        <input
          type="file"
          id={`image${componentId}`}
          className="hidden max-w-[500px]"
          onChange={handleFileChange}
        />
      </form>
    </Card>
  );
};
