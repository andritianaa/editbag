"use client";
import { MDXInput } from "./MDXInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCheck, BookDashed } from "lucide-react";
import { ImageUpload } from "@/features/upload/Images";
import { useState } from "react";
import { edit } from "@/actions/blog.actions";
import { toast } from "sonner";
import { Post, PostStatus } from "@prisma/client";
import { PostWithAuthor } from "@/types/posts";

export type formProps = {
  post: Post;
};

export const Form = (props: formProps) => {
  const [imageUrl, setImageUrl] = useState<string>(props.post.image);
  const [text, setText] = useState<string>(props.post.content);
  const [title, setTitle] = useState<string>(props.post.title);
  const [subtitle, setSubtitle] = useState<string>(props.post.subtitle);

  const handleImageUrlChange = (newImageUrl: string) => {
    setImageUrl(newImageUrl);
  };
  const handleTextChange = (newText: string) => {
    setText(newText);
  };
  const handleTitleChange = (newTitle: string) => {
    setTitle(newTitle);
  };
  const handleSubtitleChange = (newSubtitle: string) => {
    setSubtitle(newSubtitle);
  };

  const handlePublish = async () => {
    if (text && title && imageUrl && subtitle) {
      await edit(
        title,
        text,
        imageUrl,
        PostStatus.online,
        subtitle,
        "subimage",
        "fileSize",
        "fileUrl",
        props.post.id
      );
      toast.success("Saved to draft");
      window.location.href = "/dashboard/blog";
    } else if (!title) {
      toast.error("You must provide a title");
    } else if (!subtitle) {
      toast.error("You must provide a subtitle");
    } else if (!text) {
      toast.error("You must provide a text");
    } else if (!imageUrl) {
      toast.error("You must provide an image");
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
        "subimage",
        "fileSize",
        "fileUrl",
        props.post.id
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
      <ImageUpload imageUrl={imageUrl} onImageUpload={handleImageUrlChange} />
      <MDXInput onChange={handleTextChange} value={text} />
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
