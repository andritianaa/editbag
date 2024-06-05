"use client";
import { Layout, LayoutContent } from "@/components/layout/Layout";
import { Product } from "@/components/products/Product";
import { Label } from "@/components/ui/label";
import { Filter, ListFilter } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Categories, Post, SubCategories } from "@prisma/client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "../../components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Footer } from "../../components/common/Footer";

export type contentProps = {
  products: (Omit<Post, "id"> & { id: string; isFavorite: boolean })[];
  categories: Categories[];
  subCategories: SubCategories[];
  currentCategories: string[];
  currentSubCategories: string[];
  currentSearch: string;
};

export const Content = (props: contentProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    props.currentCategories
  );
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    props.currentSubCategories
  );
  const [textSearch, setTextSearch] = useState<string>(props.currentSearch);

  const handleCategoryChange = (categoryName: string) => {
    let updatedCategories: string[] = [];

    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(
        selectedCategories.filter((name) => name !== categoryName)
      );
    } else {
      updatedCategories = [...selectedSubCategories, categoryName];
    }
    setSelectedCategories(updatedCategories);
    const url = new URL(window.location.href);
    url.searchParams.set("categories", updatedCategories.join(","));
    window.history.pushState({}, "", url);
  };

  const handleSubCategoryChange = (categoryName: string) => {
    let updatedSubCategories: string[] = [];
    if (selectedSubCategories.includes(categoryName)) {
      updatedSubCategories = selectedSubCategories.filter(
        (name) => name !== categoryName
      );
    } else {
      updatedSubCategories = [...selectedSubCategories, categoryName];
    }
    setSelectedSubCategories(updatedSubCategories);
    const url = new URL(window.location.href);
    url.searchParams.set("subCategories", updatedSubCategories.join(","));
    window.history.pushState({}, "", url);
  };

  const handleTextChange = (text: string) => {
    setTextSearch(text);
    const url = new URL(window.location.href);
    url.searchParams.set("search", text);
    window.history.pushState({}, "", url);
  };

  const handleResetFilter = () => {
    setSelectedCategories([]);
    setSelectedSubCategories([]);
    setTextSearch("");
    const url = new URL(window.location.href);
    url.searchParams.set("search", "");
    url.searchParams.set("categories", "");
    url.searchParams.set("subCategories", "");
    window.history.pushState({}, "", url);
  };
  return (
    <>
      <Layout className="flex pr-0 md:justify-center">
        <LayoutContent className="flex min-h-[calc(100vh-10.56rem)] gap-2 md:justify-center">
          <Card className="mt-2 flex h-fit flex-col justify-start gap-4 p-4 max-lg:hidden">
            <div className="flex justify-between">
              <Label className="flex w-[200px] items-center">
                <Filter /> Filters
              </Label>
              <Button
                variant="ghost"
                className="cursor-pointer"
                onClick={handleResetFilter}
              >
                Reset
              </Button>
            </div>
            <Input
              placeholder="Search..."
              label="Search..."
              value={textSearch}
              onChange={(e) => handleTextChange(e.target.value)}
            />
            <Separator />
            <Label className="flex w-[200px] items-center">Categories</Label>
            <div className="">
              {props.categories.map((c) => (
                <div className="flex w-full items-center space-x-2" key={c.id}>
                  <label
                    htmlFor={`category-${c.id}`}
                    className="flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-muted"
                    onClick={() => handleCategoryChange(c.name)}
                  >
                    <Checkbox
                      id={`category-${c.id}`}
                      checked={selectedCategories.includes(c.name)}
                    />
                    {c.name}
                  </label>
                </div>
              ))}
            </div>

            <Separator />
            <Label className="flex w-[200px] items-center">Subcategories</Label>
            <div className="">
              {props.subCategories.map((c) => (
                <div className="flex w-full items-center space-x-2" key={c.id}>
                  <label
                    htmlFor={`subcategory-${c.id}`}
                    className="flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-muted"
                    onClick={() => handleSubCategoryChange(c.name)}
                  >
                    <Checkbox
                      id={`subcategory-${c.id}`}
                      checked={selectedSubCategories.includes(c.name)}
                    />
                    {c.name}
                  </label>
                </div>
              ))}
            </div>
          </Card>
          <div className="flex w-full flex-col items-center">
            <div className="mt-4 flex w-full max-w-[41rem] items-center justify-center gap-2 lg:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded border bg-[#020817] px-3 py-2 transition-colors focus:border-blue-900 focus:outline-0"
                value={textSearch}
                onChange={(e) => handleTextChange(e.target.value)}
              />

              <Drawer>
                <DrawerTrigger asChild>
                  <Button>
                    <ListFilter />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex h-fit flex-col justify-start gap-4 p-4">
                    <div className="flex justify-between">
                      <Label className="flex items-center">
                        <Filter /> Filters
                      </Label>
                      <Button
                        variant="ghost"
                        className="cursor-pointer"
                        onClick={handleResetFilter}
                      >
                        Reset
                      </Button>
                    </div>
                    <Input
                      placeholder="Search..."
                      label="Search..."
                      value={textSearch}
                      onChange={(e) => handleTextChange(e.target.value)}
                    />
                    <Separator />
                    <Label className="flex items-center">Categories</Label>
                    <div className="">
                      {props.categories.map((c) => (
                        <div
                          className="flex w-full items-center space-x-2"
                          key={c.id}
                        >
                          <label
                            htmlFor={`category-${c.id}`}
                            className="flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-muted"
                            onClick={() => handleCategoryChange(c.name)}
                          >
                            <Checkbox
                              id={`category-${c.id}`}
                              checked={selectedCategories.includes(c.name)}
                            />
                            {c.name}
                          </label>
                        </div>
                      ))}
                    </div>

                    <Separator />
                    <Label className="flex items-center">Subcategories</Label>
                    <div className="">
                      {props.subCategories.map((c) => (
                        <div
                          className="flex w-full items-center space-x-2"
                          key={c.id}
                        >
                          <label
                            htmlFor={`subcategory-${c.id}`}
                            className="flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-muted"
                            onClick={() => handleSubCategoryChange(c.name)}
                          >
                            <Checkbox
                              id={`subcategory-${c.id}`}
                              checked={selectedSubCategories.includes(c.name)}
                            />
                            {c.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {props.products
                .filter(
                  (product) =>
                    product.status === "online" &&
                    (selectedCategories.length === 0 ||
                      selectedCategories.includes(product.category)) &&
                    (selectedSubCategories.length === 0 ||
                      selectedSubCategories.includes(product.subCategory)) &&
                    (textSearch.trim() === "" ||
                      product.title
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subtitle
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.category
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subCategory
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()))
                )
                .map((product) => (
                  <Product
                    key={product.id}
                    subImage={product.subImage ?? null}
                    id={parseInt(product.id)}
                    imageUrl={product.image}
                    title={product.title}
                    category={product.category}
                    subTitle={product.subtitle}
                    isFavorite={product.isFavorite}
                  />
                ))}
              {props.products
                .filter(
                  (product) =>
                    product.status === "online" &&
                    (selectedCategories.length === 0 ||
                      selectedCategories.includes(product.category)) &&
                    (selectedSubCategories.length === 0 ||
                      selectedSubCategories.includes(product.subCategory)) &&
                    (textSearch.trim() === "" ||
                      product.title
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subtitle
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.category
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subCategory
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()))
                )
                .map((product) => (
                  <Product
                    key={product.id}
                    subImage={product.subImage ?? null}
                    id={parseInt(product.id)}
                    imageUrl={product.image}
                    title={product.title}
                    category={product.category}
                    subTitle={product.subtitle}
                    isFavorite={product.isFavorite}
                  />
                ))}
              {props.products
                .filter(
                  (product) =>
                    product.status === "online" &&
                    (selectedCategories.length === 0 ||
                      selectedCategories.includes(product.category)) &&
                    (selectedSubCategories.length === 0 ||
                      selectedSubCategories.includes(product.subCategory)) &&
                    (textSearch.trim() === "" ||
                      product.title
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subtitle
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.category
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subCategory
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()))
                )
                .map((product) => (
                  <Product
                    key={product.id}
                    subImage={product.subImage ?? null}
                    id={parseInt(product.id)}
                    imageUrl={product.image}
                    title={product.title}
                    category={product.category}
                    subTitle={product.subtitle}
                    isFavorite={product.isFavorite}
                  />
                ))}
              {props.products
                .filter(
                  (product) =>
                    product.status === "online" &&
                    (selectedCategories.length === 0 ||
                      selectedCategories.includes(product.category)) &&
                    (selectedSubCategories.length === 0 ||
                      selectedSubCategories.includes(product.subCategory)) &&
                    (textSearch.trim() === "" ||
                      product.title
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subtitle
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.category
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()) ||
                      product.subCategory
                        .toLowerCase()
                        .includes(textSearch.toLowerCase()))
                )
                .map((product) => (
                  <Product
                    key={product.id}
                    subImage={product.subImage ?? null}
                    id={parseInt(product.id)}
                    imageUrl={product.image}
                    title={product.title}
                    category={product.category}
                    subTitle={product.subtitle}
                    isFavorite={product.isFavorite}
                  />
                ))}
              {props.products.filter(
                (product) =>
                  product.status === "online" &&
                  (selectedCategories.length === 0 ||
                    selectedCategories.includes(product.category)) &&
                  (selectedSubCategories.length === 0 ||
                    selectedSubCategories.includes(product.subCategory)) &&
                  (textSearch.trim() === "" ||
                    product.title
                      .toLowerCase()
                      .includes(textSearch.toLowerCase()) ||
                    product.subtitle
                      .toLowerCase()
                      .includes(textSearch.toLowerCase()) ||
                    product.category
                      .toLowerCase()
                      .includes(textSearch.toLowerCase()) ||
                    product.subCategory
                      .toLowerCase()
                      .includes(textSearch.toLowerCase()))
              ).length == 0 && (
                <Card className="mt-2 flex flex-col items-center justify-center gap-4 p-6">
                  <CardTitle>Oups! There is no product</CardTitle>
                  <CardDescription>
                    No products found. Please try again with different filters.
                  </CardDescription>
                </Card>
              )}
            </div>
          </div>
        </LayoutContent>
      </Layout>
      <Footer />
    </>
  );
};
