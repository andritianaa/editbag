"use client";
import { MDXInput } from "./MDXInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCheck, BookDashed } from "lucide-react";
import { ImageUpload } from "@/features/upload/Images";
import { useState } from "react";
import { edit, publish } from "@/actions/blog.actions";
import { toast } from "sonner";
import { Post, PostStatus } from "@prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FileUpload } from "@/features/upload/File";

export const Form = (props: Post) => {
  const [imageUrl, setImageUrl] = useState<string>(props.image);
  const [text, setText] = useState<string | null>(props.content);
  const [title, setTitle] = useState<string>(props.title);
  const [subtitle, setSubtitle] = useState<string>(props.subtitle);
  const [subImage, setSubImage] = useState<string | null>(props.subImage ?? "");
  const [fileSize, setFileSize] = useState<string>(props.fileSize ?? "");
  const [fileURL, setFileURL] = useState<string>(props.fileUrl ?? "");
  const [type, setType] = useState<string>(props.title);

  const handleImageUrlChange = (newImageUrl: string) => {
    console.log(newImageUrl);
    setImageUrl(newImageUrl);
  };
  const handleFileUrlChange = (newFileUrl: string, fileSize: string) => {
    console.log(newFileUrl);
    setFileURL(newFileUrl);
    setFileSize(fileSize);
  };
  const handleSubImageUrlChange = (newImageUrl: string) => {
    setSubImage(newImageUrl);
  };
  const handleTextChange = (newText: string | null) => {
    setText(newText);
  };
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };
  const handleSubtitleChange = (newSubtitle: string) => {
    setSubtitle(newSubtitle);
  };

  const handlePublish = async () => {
    if (text && title && imageUrl && subtitle && fileURL && type) {
      await edit(
        title,
        text,
        imageUrl,
        PostStatus.online,
        subtitle ?? "",
        subImage ?? "",
        fileSize ?? "",
        fileURL,
        type,
        props.id
      );
      toast.success("New product added");
      window.location.href = "/dashboard/products";
    } else if (!title) {
      toast.error("You must provide a title");
    } else if (!subtitle) {
      toast.error("You must provide a subtitle");
    } else if (!text) {
      toast.error("You must provide a text");
    } else if (!imageUrl) {
      toast.error("You must provide an image");
    } else if (!fileURL) {
      toast.error("You must provide a file");
    } else if (!type) {
      toast.error("You must provide a type");
    }
  };

  const handleDraft = async () => {
    if (title) {
      await edit(
        title,
        text ?? "",
        imageUrl ?? "",
        PostStatus.draft,
        subtitle ?? "",
        subImage ?? "",
        fileSize ?? "",
        fileURL ?? "",
        type ?? "",
        props.id
      );
      toast.success("Saved to draft");
    } else {
      toast.error("You must provide a title");
    }
  };

  return (
    <div className="container my-4 space-y-4">
      <Input
        type="text"
        placeholder="My new post"
        label="Title"
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <Input
        type="text"
        placeholder="My new post"
        label="Subtitle"
        value={subtitle}
        onChange={(e) => handleSubtitleChange(e.target.value)}
      />
      <Select value={type} onValueChange={setType}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select an asset type..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select an asset type...</SelectLabel>
            <SelectItem value="3D Assets">3D Assets</SelectItem>
            <SelectItem value="After Effect">After Effect</SelectItem>
            <SelectItem value="Illustrator">Illustrator</SelectItem>
            <SelectItem value="Photoshop">Photoshop</SelectItem>
            <SelectItem value="Premier Pro">Premier Pro</SelectItem>
            <SelectItem value="Sound effect">Sound effect</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div className="flex flex-wrap gap-2">
        <ImageUpload
          image={imageUrl}
          onImageUpload={handleImageUrlChange}
          title="Product image"
          subTitle="The image that will be displayed first"
        />
        <ImageUpload
          image={subImage ?? ""}
          onImageUpload={handleSubImageUrlChange}
          title="Illustration"
          subTitle="The image that will be displayed on product hover"
        />
        <FileUpload
          onFileUpload={handleFileUrlChange}
          file={fileURL}
          title="Product file"
          subTitle="The file to download"
          fileSize={fileSize}
        />
      </div>

      <MDXInput onChange={handleTextChange} value={text ?? ""} />

      <div className="flex w-full justify-end gap-4 pt-4">
        <Button
          variant="ghost"
          className="flex items-center justify-center gap-2"
          onClick={handleDraft}
        >
          <BookDashed />
          Draft
        </Button>
        <Button
          className="flex items-center justify-center gap-2"
          onClick={handlePublish}
        >
          <BookCheck />
          Publish
        </Button>
      </div>
    </div>
  );
};
