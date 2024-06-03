/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState, useCallback } from "react";
import { uploadMultipleFile } from "@/actions/upload.actions";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useLoadingStore } from "../../store/loading";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export type FileProps = {
  file: string;
  onFileUpload: (newFileUrl: string, fileSize: string) => void;
  className?: string;
  title: string;
  subTitle: string;
  fileSize: string;
};

export const FileUpload = (props: FileProps) => {
  const { startLoading, stopLoading } = useLoadingStore();
  const [files, setFiles] = useState<File[]>([]);
  const [file, setFile] = useState<string>(props.file);
  const [fileSize, setFileSize] = useState<string>(props.fileSize);
  const [fileName, setFileName] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    if (files.length > 0) {
      const newFileUrls = await uploadMultipleFile(formData);
      setFile(newFileUrls[0]);
      props.onFileUpload(newFileUrls[0], fileSize);
    }
    stopLoading();
    setFiles([]);
    toast.success("Your file is ready!");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startLoading();
    try {
      e.preventDefault();
      if (e.target.files) {
        const fileArray = Array.from(e.target.files);
        setFiles(fileArray);
        const fileSizeInMB = fileArray[0].size / 1024 / 1024;
        setFileSize(fileSizeInMB.toFixed(2) + " MB");
        setFileName(fileArray[0].name);
      }
    } catch (error) {
    } finally {
      stopLoading();
    }
  };

  return (
    <Card
      className={cn(
        props.className,
        "block w-full rounded-lg border border-input bg-background p-4 text-sm space-y-4 min-w-lg flex-1"
      )}
    >
      <div className="">
        <Label>{props.title}</Label>
        <Label className="text-sm font-medium text-muted-foreground">
          {props.subTitle}
        </Label>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2">
          <div className="input">
            <>
              <label
                htmlFor="file"
                className="flex size-40 w-full cursor-pointer items-center justify-center rounded-lg border-dashed bg-[#020817] p-2 text-center text-sm"
              >
                {files.length > 0
                  ? `${fileName} - ${fileSize}`
                  : "Click to select file or drop here"}
              </label>
              <label
                htmlFor="file"
                className="transparent w-full cursor-pointer p-2 text-sm text-transparent"
              >
                Select another file
              </label>
            </>

            <input
              type="file"
              id="file"
              className="hidden max-w-[500px]"
              onChange={handleFileChange}
            />
          </div>
          <Button type="submit">Upload</Button>
        </div>
        <p>{file}</p>
      </form>
    </Card>
  );
};
