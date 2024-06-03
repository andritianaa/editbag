"use client";
import { MDXInput } from "./MDXInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCheck, BookDashed } from "lucide-react";
import { ImageUpload } from "@/features/upload/Images";
import { useState } from "react";
import { publish } from "@/actions/blog.actions";
import { toast } from "sonner";
import { Categories, PostStatus, SubCategories } from "@prisma/client";
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
import { NewCategory } from "@/components/dashboard/NewCategory";
import { NewSubCategory } from "@/components/dashboard/NewSubCategory";

export type formProps = {
  categories: Categories[];
  subCategories: SubCategories[];
};

export const Form = (props: formProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [text, setText] = useState<string | null>("");
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [subImage, setSubImage] = useState<string>("");
  const [fileSize, setFileSize] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [subCategory, setSubCategory] = useState<string>("");
  const [categories, setCategories] = useState<Categories[]>(props.categories);
  const [subCategories, setSubCategories] = useState<SubCategories[]>(
    props.subCategories
  );

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
    if (text && title && imageUrl && subtitle && fileURL && category) {
      await publish(
        title,
        text,
        imageUrl,
        PostStatus.online,
        subtitle,
        subImage,
        fileSize,
        fileURL,
        category,
        subCategory
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
    } else if (!category) {
      toast.error("You must provide a type");
    }
  };

  const handleDraft = async () => {
    if (title) {
      await publish(
        title,
        text ?? "",
        imageUrl ?? "",
        PostStatus.draft,
        subtitle ?? "",
        subImage ?? "",
        fileSize ?? "",
        fileURL ?? "",
        category ?? "",
        subCategory ?? ""
      );
      toast.success("Saved to draft");
    } else {
      toast.error("You must provide a title");
    }
  };

  const handleNewCategory = (name: string) => {
    toast.message("New category added");
    setCategory(name);
    setCategories([...categories, { name, id: categories.length }]);
  };
  const handleNewSubCategory = (name: string) => {
    toast.message("New subcategory added");
    setSubCategory(name);
    setSubCategories([...subCategories, { name, id: subCategories.length }]);
  };

  return (
    <div className="container my-4 space-y-4">
      <Input
        type="text"
        placeholder="My new post"
        label="Title"
        onChange={(e) => handleTitleChange(e.target.value)}
      />
      <Input
        type="text"
        placeholder="My new post"
        label="Subtitle"
        onChange={(e) => handleSubtitleChange(e.target.value)}
      />
      <div className="flex gap-2">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an asset category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select an asset category...</SelectLabel>
              {categories.map((c) => (
                <SelectItem key={c.id} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <NewCategory onAdd={handleNewCategory} />
      </div>
      <div className="flex gap-2">
        <Select value={subCategory} onValueChange={setSubCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an asset sub category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select an asset sub category...</SelectLabel>
              <SelectItem value=" ">Aucun</SelectItem>
              {subCategories.map((c) => (
                <SelectItem key={c.id} value={c.name}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <NewSubCategory onAdd={handleNewSubCategory} />
      </div>

      <div className="flex flex-wrap gap-2">
        <ImageUpload
          image={imageUrl}
          onImageUpload={handleImageUrlChange}
          title="Product image"
          subTitle="The image that will be displayed first"
        />
        <ImageUpload
          image={imageUrl}
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

      <MDXInput onChange={handleTextChange} />

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
