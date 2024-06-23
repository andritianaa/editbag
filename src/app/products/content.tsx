"use client";
import { LayoutContent } from "@/components/layout/Layout";
import { Product } from "@/components/products/Product";
import { Label } from "@/components/ui/label";
import { Filter, ListFilter, SearchIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Categories, Post, SubCategories } from "@prisma/client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Footer } from "@/components/common/Footer";
import { Tab } from "@/components/products/Tab";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { SimpleInput } from "@/components/ui/SimpleInput";

export type contentProps = {
  products: (Omit<Post, "id"> & { id: string; isFavorite: boolean })[];
  mostDownloaded: (Omit<Post, "id"> & { id: string; isFavorite: boolean })[];
  mostPopular: (Omit<Post, "id"> & { id: string; isFavorite: boolean })[];
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

  const [isSearching, setIsSearching] = useState<boolean>(
    textSearch
      ? true
      : selectedCategories.length
      ? true
      : selectedSubCategories
      ? true
      : false
  );

  useEffect(() => {
    setIsSearching(
      textSearch.length > 0 ||
        selectedCategories.length > 0 ||
        selectedSubCategories.length > 0
    );
  }, [textSearch, selectedCategories, selectedSubCategories]);

  const handleCategoryChange = (categoryName: string) => {
    let updatedCategories: string[] = [];

    if (selectedCategories.includes(categoryName)) {
      updatedCategories = selectedCategories.filter(
        (name) => name !== categoryName
      );
    } else {
      updatedCategories = [...selectedCategories, categoryName];
    }
    setSelectedCategories(updatedCategories);
    updateUrlParams("categories", updatedCategories);
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
    updateUrlParams("subCategories", updatedSubCategories);
  };

  const updateUrlParams = (key: string, values: string[]) => {
    const url = new URL(window.location.href);
    if (values.length > 0) {
      url.searchParams.set(key, values.join(","));
    } else {
      url.searchParams.delete(key);
    }
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
    url.searchParams.delete("search");
    url.searchParams.delete("categories");
    url.searchParams.delete("subCategories");
    window.history.pushState({}, "", url);
  };
  return (
    <>
      <div className="mx-auto flex w-full max-w-[1337px] gap-4 px-4 pr-0 md:justify-center">
        <LayoutContent className="flex min-h-[calc(100vh-10.56rem)] gap-2 md:justify-center">
          <Card className="mt-2 flex h-fit flex-col justify-start gap-4 bg-transparent p-4 max-lg:hidden">
            <div className="flex justify-between">
              <Label className="flex w-[180px] items-center">
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

            <div className="flex w-full max-w-md items-center rounded-md bg-background shadow-sm">
              <div className="flex-shrink-0 p-2 text-muted-foreground">
                <SearchIcon className="h-5 w-5" color="#bfa8fb" />
              </div>
              <SimpleInput
                value={textSearch}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Search for files or product..."
                className="flex-1 border-0 px-4 py-2 text-sm focus:ring-0"
              />
            </div>
            <Separator />
            <Label className="flex w-[200px] items-center">
              Find by software
            </Label>
            <div className="">
              {props.categories.map(
                (c) =>
                  c.type == "templates" && (
                    <div
                      className="flex w-full items-center space-x-2"
                      key={c.id}
                    >
                      <label
                        onClick={() => handleCategoryChange(c.name)}
                        htmlFor={`category-${c.id}`}
                        className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                          selectedCategories.includes(c.name)
                            ? "bg-[rgba(38,38,38,.9)]"
                            : ""
                        }`}
                      >
                        {/* <Checkbox
                          id={`category-${c.id}`}
                          checked={selectedCategories.includes(c.name)}
                        /> */}
                        {c.name}
                      </label>
                    </div>
                  )
              )}
            </div>

            <Separator />
            <Label className="flex w-[200px] items-center">
              Find by templates type
            </Label>
            <div className="">
              {(() => {
                const displayedNames = new Set();
                return props.subCategories.map((c) =>
                  c.type === "templates" && !displayedNames.has(c.name)
                    ? displayedNames.add(c.name) && (
                        <div
                          className="flex w-full items-center space-x-2"
                          key={c.id}
                        >
                          <label
                            onClick={() => handleSubCategoryChange(c.name)}
                            htmlFor={`subcategory-${c.id}`}
                            className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                              selectedSubCategories.includes(c.name)
                                ? "bg-[rgba(38,38,38,.9)]"
                                : ""
                            }`}
                          >
                            {c.name}
                          </label>
                        </div>
                      )
                    : null
                );
              })()}
            </div>
          </Card>
          <div className="flex w-full flex-col items-center">
            <div className="mt-4 flex w-full max-w-[41rem] items-center justify-center gap-2 lg:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded border bg-[#191919] px-3 py-2 transition-colors focus:border-blue-900 focus:outline-0"
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
                    <SimpleInput
                      value={textSearch}
                      onChange={(e) => handleTextChange(e.target.value)}
                      placeholder="Search for files or product..."
                      className="flex-1 border-0 px-4 py-2 text-sm focus:ring-0"
                    />
                    <Separator />
                    <Label className="flex items-center">
                      Find by software
                    </Label>
                    <div className="">
                      {props.categories.map(
                        (c) =>
                          c.type == "templates" && (
                            <div
                              className="flex w-full items-center space-x-2"
                              key={c.id}
                            >
                              <label
                                onClick={() => handleCategoryChange(c.name)}
                                htmlFor={`category-${c.id}`}
                                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                                  selectedCategories.includes(c.name)
                                    ? "bg-[rgba(38,38,38,.9)]"
                                    : ""
                                }`}
                              >
                                {/* <Checkbox
                          id={`category-${c.id}`}
                          checked={selectedCategories.includes(c.name)}
                        /> */}
                                {c.name}
                              </label>
                            </div>
                          )
                      )}
                    </div>

                    <Separator />
                    <Label className="flex items-center">
                      Find by templates type
                    </Label>
                    <div className="">
                      {(() => {
                        const displayedNames = new Set();
                        return props.subCategories.map((c) =>
                          c.type === "templates" && !displayedNames.has(c.name)
                            ? displayedNames.add(c.name) && (
                                <div
                                  className="flex w-full items-center space-x-2"
                                  key={c.id}
                                >
                                  <label
                                    onClick={() =>
                                      handleSubCategoryChange(c.name)
                                    }
                                    htmlFor={`subcategory-${c.id}`}
                                    className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                                      selectedSubCategories.includes(c.name)
                                        ? "bg-[rgba(38,38,38,.9)]"
                                        : ""
                                    }`}
                                  >
                                    {c.name}
                                  </label>
                                </div>
                              )
                            : null
                        );
                      })()}
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="w-full">
              <Tab type="templates" />
              {isSearching == false && (
                <>
                  <div className="mt-8 max-h-[50vh] w-full max-w-[60rem] overflow-hidden rounded-lg">
                    <LiteYouTubeEmbed
                      id="8JMbMjJozc0"
                      title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                    />
                  </div>
                  <h1 className="mt-6 text-2xl font-semibold">
                    Most downloaded
                  </h1>
                  <div className="mt-2 flex flex-wrap justify-start">
                    {props.mostDownloaded
                      .filter(
                        (product) =>
                          product.status === "online" &&
                          product.type === "templates"
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
                  </div>
                  <h1 className="mt-6 text-2xl font-semibold">Most popular</h1>
                  <div className="mt-2 flex flex-wrap justify-start">
                    {props.mostPopular
                      .filter(
                        (product) =>
                          product.status === "online" &&
                          product.type === "templates"
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
                  </div>
                  <h1 className="mt-6 text-2xl font-semibold">All products</h1>
                </>
              )}
              <div className="mt-2 flex flex-wrap justify-start">
                {props.products
                  .filter(
                    (product) =>
                      product.status === "online" &&
                      product.type === "templates" &&
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
                    product.type === "templates" &&
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
                      No products found. Please try again with different
                      filters.
                    </CardDescription>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </LayoutContent>
      </div>
      <Footer />
    </>
  );
};
