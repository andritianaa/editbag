/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-dropdown-menu";
import { useLoadingStore } from "../../store/loading";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { fileServer } from "@/actions/getters/env.get";

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
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [xhr, setXhr] = useState<XMLHttpRequest | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    if (files.length > 0) {
      try {
        const newFileUrls = await uploadFilesWithProgress(
          formData,
          setUploadProgress,
          setXhr
        );
        setFile(newFileUrls[0]);
        props.onFileUpload(newFileUrls[0], fileSize);
        toast.success("Your file is ready!");
      } catch (error) {
        toast.error("Upload failed. Please try again.");
      } finally {
        stopLoading();
      }
    }
    setFiles([]);
    setUploadProgress(0); // Reset the progress
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

  const handleCancel = () => {
    if (xhr) {
      xhr.abort();
      toast("Upload canceled");
      setUploadProgress(0);
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
                className="flex size-40 w-full cursor-pointer items-center justify-center rounded-lg border-dashed bg-[#191919] p-2 text-center text-sm"
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
          {uploadProgress > 0 && (
            <button
              className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-red-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
        {uploadProgress > 0 && <p>{`${uploadProgress}%`}</p>}
        {uploadProgress > 0 && (
          <div className="mt-2 h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="h-2.5 rounded-full bg-blue-600"
              style={{ width: `${uploadProgress}%` }}
            ></div>
          </div>
        )}
        <p>{file}</p>
      </form>
    </Card>
  );
};

// Function to upload files with progress tracking
const uploadFilesWithProgress = async (
  formData: FormData,
  onProgress: (progress: number) => void,
  setXhr: (xhr: XMLHttpRequest) => void
): Promise<string[]> => {
  const env = await fileServer();
  console.log(env);
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    setXhr(xhr);

    xhr.open("POST", `${env}/`);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        onProgress(Math.round(percentComplete));
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const responseData = JSON.parse(xhr.responseText);
        const urls = responseData.map((filename: string) => {
          return `${env}/public/${filename}`;
        });
        resolve(urls);
      } else {
        reject(new Error(`Upload failed: ${xhr.statusText}`));
      }
    };

    xhr.onerror = () => {
      reject(new Error("Upload failed"));
    };

    xhr.send(formData);
  });
};
