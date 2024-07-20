"use client";
import { LayoutContent } from "@/components/layout/Layout";
import { Product } from "@/components/products/Product";
import { Label } from "@/components/ui/label";
import { Filter, ListFilter, SearchIcon } from "lucide-react";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Categories, Post, SubCategories } from "@prisma/client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Tab } from "@/components/products/Tab";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { SimpleInput } from "@/components/ui/SimpleInput";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { InputGlowing } from "@/components/ui/InputGlowing";

type PostWithStats = Omit<Post, "id"> & {
  id: string;
  isFavorite: boolean;
  favoriteCount: number;
  downloadedCount: number;
};

export type contentProps = {
  products: PostWithStats[];
  mostDownloaded: (Omit<Post, "id"> & {
    id: string;
    isFavorite: boolean;
  })[];
  mostPopular: (Omit<Post, "id"> & {
    id: string;
    isFavorite: boolean;
  })[];
  categories: Categories[];
  subCategories: SubCategories[];
  currentCategories: string[];
  currentSubCategories: string[];
  currentSearch: string;
};

const sort = [
  {
    name: "Newest",
    field: "createdAt",
    order: "asc",
  },
  {
    name: "Oldest",
    field: "createdAt",
    order: "desc",
  },
  {
    name: "Most downloaded",
    field: "downloadedCount",
    order: "desc",
  },
  {
    name: "Most saved",
    field: "favoriteCount",
    order: "desc",
  },
];

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

  const [posts, setPosts] = useState<PostWithStats[]>(props.products);
  const [currentSort, setCurrentSort] = useState<string>("");

  const sortPosts = (field: string, order: string, name: string) => {
    setCurrentSort(name);
    console.log(posts);

    setPosts(
      posts.sort((a, b) => {
        const fieldA = a[field as keyof PostWithStats];
        const fieldB = b[field as keyof PostWithStats];

        if (fieldA == null && fieldB == null) {
          return 0;
        } else if (fieldA == null) {
          return order === "asc" ? 1 : -1;
        } else if (fieldB == null) {
          return order === "asc" ? -1 : 1;
        } else if (fieldA < fieldB) {
          return order === "asc" ? -1 : 1;
        } else if (fieldA > fieldB) {
          return order === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      })
    );
  };

  useEffect(() => {
    setIsSearching(
      textSearch.length > 0 ||
        currentSort.length > 0 ||
        selectedCategories.length > 0 ||
        selectedSubCategories.length > 0
    );
  }, [textSearch, selectedCategories, selectedSubCategories, currentSort]);

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
      <div className="mx-auto flex w-full max-w-[1500px] gap-4 px-4 pr-0 md:justify-center">
        <LayoutContent className="flex min-h-[calc(100vh-10.56rem)] gap-2 md:justify-center">
          <Card className="sticky top-[5.5rem] mt-2 flex h-fit max-h-[calc(100vh-6rem)] flex-col justify-start gap-4 overflow-y-auto bg-transparent p-4 pl-0 max-lg:hidden">
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

            <Accordion
              type="multiple"
              className=""
              defaultValue={["item-1", "item-2", "item-3"]}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="w-[200px]">
                  Sort by
                </AccordionTrigger>
                <AccordionContent>
                  <div className="">
                    {sort.map((s) => (
                      <label
                        key={s.field}
                        onClick={() => sortPosts(s.field, s.order, s.name)}
                        htmlFor={`orientation-`}
                        className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                          s.name == currentSort ? "bg-[rgba(38,38,38,.9)]" : ""
                        }`}
                      >
                        {s.name}
                      </label>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="w-[200px]">
                  Find by software
                </AccordionTrigger>
                <AccordionContent>
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
                            <Checkbox
                              checked={selectedCategories.includes(c.name)}
                            />
                            {c.name}
                          </label>
                        </div>
                      )
                  )}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="w-[200px]">
                  Categories
                </AccordionTrigger>
                <AccordionContent>
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
                                <Checkbox
                                  checked={selectedSubCategories.includes(
                                    c.name
                                  )}
                                />
                                {c.name}
                              </label>
                            </div>
                          )
                        : null
                    );
                  })()}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <div className="flex w-full flex-col items-center">
            <div className="mt-4 flex w-full max-w-[41rem] items-center end gap-2 lg:hidden">
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

                    <Accordion
                      type="multiple"
                      className=""
                      defaultValue={["item-1", "item-2", "item-3"]}
                    >
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="w-[200px]">
                          Sort by
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="">
                            {sort.map((s) => (
                              <label
                                key={s.field}
                                onClick={() =>
                                  sortPosts(s.field, s.order, s.name)
                                }
                                htmlFor={`orientation-`}
                                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                                  s.name == currentSort
                                    ? "bg-[rgba(38,38,38,.9)]"
                                    : ""
                                }`}
                              >
                                {s.name}
                              </label>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="w-[200px]">
                          Find by software
                        </AccordionTrigger>
                        <AccordionContent>
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
                                    <Checkbox
                                      checked={selectedCategories.includes(
                                        c.name
                                      )}
                                    />
                                    {c.name}
                                  </label>
                                </div>
                              )
                          )}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger className="w-[200px]">
                          Categories
                        </AccordionTrigger>
                        <AccordionContent>
                          {(() => {
                            const displayedNames = new Set();
                            return props.subCategories.map((c) =>
                              c.type === "templates" &&
                              !displayedNames.has(c.name)
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
                                        <Checkbox
                                          checked={selectedSubCategories.includes(
                                            c.name
                                          )}
                                        />
                                        {c.name}
                                      </label>
                                    </div>
                                  )
                                : null
                            );
                          })()}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="w-full">
              <Tab type="templates"/>
              <div className={"mt-10"}>
                <InputGlowing className=" w-full max-w-[86rem]">
                  <div className={"flex w-full items-center space-x-2 bg-background rounded-sm overflow-hidden"}>
                    <div className="flex-shrink-0 p-2 text-muted-foreground bg-background">
                      <SearchIcon className="h-5 w-5" color="#ffffff"/>
                    </div>
                    <SimpleInput
                        value={textSearch}
                        onChange={(e) => handleTextChange(e.target.value)}
                        placeholder="Search for templates..."
                        className="flex-1 border-0 px-4 py-4 text-sm focus:ring-0 h-full"
                    /></div>

                </InputGlowing>
              </div>
              {isSearching == false && (
                  <>
                    <h1 className="mt-20 text-2xl font-semibold">
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
                    <h1 className="mt-20 text-2xl font-semibold">Most popular</h1>
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
                    <h1 className="mt-20 text-2xl font-semibold">All products</h1>
                  </>
              )}
              <div className="mt-2 flex flex-wrap justify-start">
                {posts
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

                {posts.filter(
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
    </>
  );
};
