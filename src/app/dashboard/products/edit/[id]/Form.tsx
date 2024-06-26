"use client";
import { edit } from "@/actions/blog.actions";
import { Categories, Post } from "@prisma/client";

import { MDXInput } from "./MDXInput";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCheck, BookDashed } from "lucide-react";
import { ImageUpload } from "@/features/upload/Images";
import { useCallback, useState } from "react";
import { toast } from "sonner";
import { PostStatus } from "@prisma/client";
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
import {
  Category,
  CategoryWithSubcategoriesByType,
  SubCategory,
} from "@/types/next";
import {
  createCategory,
  createSubCategory,
  getCategoriesWithSubcategories,
} from "@/actions/categories.actions";

export type formProps = {
  categories: CategoryWithSubcategoriesByType;
  post: Post;
};

export const Form = (props: formProps) => {
  const [imageUrl, setImageUrl] = useState<string>(props.post.image);
  const [text, setText] = useState<string | null>(props.post.content);
  const [title, setTitle] = useState<string>(props.post.title);
  const [subtitle, setSubtitle] = useState<string>(props.post.subtitle);
  const [subImage, setSubImage] = useState<string>(props.post.subImage);
  const [fileSize, setFileSize] = useState<string>(props.post.fileSize);
  const [illustrationSize] = useState<string>("");
  const [fileURL, setFileURL] = useState<string>(props.post.fileUrl);
  const [category, setCategory] = useState<string>(props.post.category);
  const [productType, setProductType] = useState<string>(props.post.type);
  const [subCategory, setSubCategory] = useState<string>(
    props.post.subCategory
  );

  const [categories, setCategories] = useState<Category[]>(
    props.categories[productType].categories
  );
  const [subCategories, setSubCategories] = useState<SubCategory[]>(
    props.categories.templates.categories[0]
      ? props.categories.templates.categories[0].SubCategories
      : []
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
      await edit(
        productType,
        title,
        text,
        imageUrl,
        PostStatus.online,
        subtitle,
        subImage,
        fileSize,
        fileURL,
        category,
        subCategory,
        props.post.id
      );
      toast.success("Product edited!");
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
      await edit(
        productType,
        title,
        text ?? "",
        imageUrl ?? "",
        PostStatus.draft,
        subtitle ?? "",
        subImage ?? "",
        fileSize ?? "",
        fileURL ?? "",
        category ?? "",
        subCategory ?? "",
        props.post.id
      );
      toast.success("Saved to draft");
    } else {
      toast.error("You must provide a title");
    }
  };

  const handleNewCategory = async (name: string) => {
    await createCategory(name, productType);
    await refetchCategories();
    setCategory(name);
    toast.message("New category added");
  };

  const handleNewSubCategory = useCallback(
    async (name: string) => {
      console.log("handleNewSubCategory called");

      if (category) {
        await createSubCategory(name, productType, category);
        await refetchCategories();
        setSubCategory(name);
        toast.message("New subcategory added");
      } else {
        toast.error("Please select a category first");
      }
    },
    [productType, category]
  );

  const refetchCategories = async () => {
    const data = await getCategoriesWithSubcategories();
    setCategories(data[productType].categories);
    const selectedCategory = data[productType].categories.find(
      (c: Category) => c.name === category
    );
    if (selectedCategory) {
      setSubCategories(selectedCategory.SubCategories);
    } else {
      setSubCategories([]);
    }
  };

  const handleChangeProductType = (newProductType: string) => {
    setProductType(newProductType);
    setSubCategories(
      props.categories[newProductType].categories[0] == undefined
        ? []
        : props.categories[newProductType].categories[0].SubCategories
    );

    setCategories(props.categories[newProductType].categories);
    setCategory("");
    setSubCategory("");
  };

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);

    const selectedCategory = categories.find((c) => c.name === newCategory);
    if (selectedCategory) {
      setSubCategories(selectedCategory.SubCategories);
    } else {
      setSubCategories([]);
    }
    setSubCategory("");
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

      <div className="flex gap-2">
        <Select value={productType} onValueChange={handleChangeProductType}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an asset category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select product type...</SelectLabel>
              <SelectItem value="templates"> Templates</SelectItem>
              <SelectItem value="emoji"> Emoji</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-2">
        <Select value={category} onValueChange={handleChangeCategory}>
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
        <Select
          value={subCategory}
          onValueChange={setSubCategory}
          disabled={category != "" ? false : true}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select an asset sub category..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select an asset sub category...</SelectLabel>
              <SelectItem value=" ">Aucun</SelectItem>
              {subCategories
                .filter(
                  (subCategory, index, self) =>
                    index === self.findIndex((s) => s.name === subCategory.name)
                )
                .map((c) => (
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

        <FileUpload
          onFileUpload={handleSubImageUrlChange}
          file={imageUrl}
          title="Illustration"
          subTitle="The image or video that will be displayed on product hover"
          fileSize={illustrationSize}
        />
        <FileUpload
          onFileUpload={handleFileUrlChange}
          file={fileURL}
          title="Product"
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
