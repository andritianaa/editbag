"use client";
import { LayoutContent } from "@/components/layout/Layout";
import { Filter, ListFilter, SearchIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Tab } from "@/components/products/Tab";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { SimpleInput } from "@/components/ui/SimpleInput";
import { fetchPhotoNextPage, fetchPhotos } from "@/lib/pexels";
import { Photo } from "@/types/pexels";
import { toast } from "sonner";
import { PhotoContainer } from "./PhotoContainer";

export type contentProps = {};

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "violet",
  "pink",
  "brown",
  "black",
  "white",
];

function reorganizePhotos(photos: Photo[]) {
  const columns = 3;
  const rows = Math.ceil(photos.length / columns);

  const photoGrid: any = Array.from({ length: rows }, () => []);

  photos.forEach((photo, index) => {
    const rowIndex = index % rows;
    photoGrid[rowIndex].push(photo);
  });

  return photoGrid.flat();
}

export const Content = (props: contentProps) => {
  console.log(props);

  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search");
  const [textSearch, setTextSearch] = useState<string>(currentSearch || "");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [orientation, setOrientation] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [nextPage, setNextPage] = useState<string | undefined | null>("");
  const handleTextChange = (text: string) => {
    setTextSearch(text);
    const url = new URL(window.location.href);
    url.searchParams.set("search", text);
    window.history.pushState({}, "", url);
  };

  const handleResetFilter = () => {
    setTextSearch("");
    setColor("");
    setSize("");
    setOrientation("");
    const url = new URL(window.location.href);
    url.searchParams.delete("search");
    window.history.pushState({}, "", url);
  };

  const fetchData = async () => {
    try {
      const p = await fetchPhotos({
        query: textSearch.length ? textSearch : "",
        orientation: orientation,
        size: size,
        color: color,
        page: 1,
      });
      setPhotos(p.photos);
      setNextPage(p.next_page);
      console.log(p);
    } catch (e) {
      toast.error("There is an error");
      console.log(e);
    }
  };

  const fetchNextPage = async () => {
    try {
      const p = await fetchPhotoNextPage(nextPage!);
      setPhotos((prevPhotos) => prevPhotos.concat(p.photos));
      setNextPage(p.next_page);
    } catch (e) {
      toast.error("There is an error");
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [orientation, size, color]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
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

            <div className="flex w-full max-w-md items-center rounded-md bg-background shadow-sm">
              <div className="flex-shrink-0 p-2 text-muted-foreground">
                <SearchIcon className="h-5 w-5" color="#bfa8fb" />
              </div>
              <form onSubmit={handleSearch}>
                <SimpleInput
                  value={textSearch}
                  onChange={(e) => handleTextChange(e.target.value)}
                  placeholder="Search for images..."
                  className="flex-1 border-0 px-4 py-2 text-sm focus:ring-0"
                />
              </form>
            </div>
            <Separator />
            <Label className="flex w-[200px] items-center">Orientation</Label>
            <div className="flex w-full flex-col items-center gap-2 space-x-2">
              <label
                onClick={() => setOrientation("")}
                htmlFor={`orientation-`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  orientation == "" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                All
              </label>
              <label
                onClick={() => setOrientation("landscape")}
                htmlFor={`orientation-landscape`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  orientation == "landscape" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                Landscape
              </label>
              <label
                onClick={() => setOrientation("portrait")}
                htmlFor={`orientation-portrait`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  orientation == "portrait" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                Portrait
              </label>
              <label
                onClick={() => setOrientation("square")}
                htmlFor={`orientation-square`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  orientation == "square" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                Square
              </label>
            </div>

            <Separator />
            <Label className="flex w-[200px] items-center">Size</Label>
            <div className="flex w-full flex-col items-center gap-2 space-x-2">
              <label
                onClick={() => setSize("")}
                htmlFor={`size-`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  size == "" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                All
              </label>
              <label
                onClick={() => setSize("large")}
                htmlFor={`size-large`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  size == "large" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                Large
              </label>
              <label
                onClick={() => setSize("medium")}
                htmlFor={`size-medium`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  size == "medium" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                Medium
              </label>
              <label
                onClick={() => setSize("small")}
                htmlFor={`size-small`}
                className={`flex w-full cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  size == "small" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                Small
              </label>
            </div>

            <Label className="flex w-[200px] items-center">Color</Label>
            <div className="grid w-full grid-cols-4 gap-2">
              <Button
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  setColor("");
                }}
                className={`flex w-fit cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                  color == "" ? "bg-[rgba(38,38,38,.9)]" : ""
                }`}
              >
                <span className="w-8">All</span>
              </Button>
              {colors.map((c) => (
                <Button
                  key={c}
                  variant="outline"
                  onClick={(e) => {
                    e.preventDefault();
                    setColor(c);
                  }}
                  className={`flex w-fit cursor-pointer items-center gap-2 rounded p-2 text-gray-50 hover:bg-[rgba(38,38,38,.9)] ${
                    color == c ? "bg-[rgba(38,38,38,.9)]" : ""
                  }`}
                >
                  <span
                    className={`size-8 rounded-full`}
                    style={{ backgroundColor: c }}
                  ></span>
                </Button>
              ))}
            </div>
            <div className="">
              <div className="flex w-full items-center space-x-2"></div>
            </div>
          </Card>
          <div className="flex w-full flex-col items-center">
            <div className="mt-4 flex w-full max-w-[41rem] items-center justify-center gap-2 lg:hidden">
              <input
                type="text"
                placeholder="Search..."
                className="min-h-[100vh] w-full rounded border bg-[#191919] px-3 py-2 transition-colors focus:border-blue-900 focus:outline-0"
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
                      placeholder="Search for emoji..."
                      className="flex-1 border-0 px-4 py-2 text-sm focus:ring-0"
                    />
                    <Separator />
                    <Label className="flex items-center">Find by style</Label>
                    <div className=""></div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
            <div className="w-full">
              <Tab type="images" />

              <div className="my-4 columns-3 gap-2 space-y-2">
                {photos.map((p, i) => (
                  <PhotoContainer key={i} {...p} />
                ))}
              </div>
              {nextPage && (
                <Button
                  variant="outline"
                  className="mb-12 w-full"
                  onClick={(e) => {
                    e.preventDefault();
                    fetchNextPage();
                  }}
                >
                  See more
                </Button>
              )}
            </div>
          </div>
        </LayoutContent>
      </div>
    </>
  );
};
