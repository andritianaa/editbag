/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../ui/button";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export type TabProps = {
  type: string;
};

export const Tab = (props: TabProps) => {
  const links = [
    {
      href: "/products/all",
      type: "home",
      imgSrc: "/illustration/home.png",
      alt: "home",
      text: "Home",
    },
    {
      href: "/products",
      type: "templates",
      imgSrc: "/illustration/template.png",
      alt: "template",
      text: "Templates",
    },
    {
      href: "/products/emoji",
      type: "emoji",
      imgSrc: "/illustration/emoji.png",
      alt: "emoji",
      text: "Emoji",
    },
    {
      href: "/products/images",
      type: "images",
      imgSrc: "/illustration/images.png",
      alt: "images",
      text: "Images",
    },
    {
      href: "/products/videos",
      type: "videos",
      imgSrc: "/illustration/video.png",
      alt: "video",
      text: "Videos",
    },
  ];
  return (
    <div className="mt-6 flex justify-center gap-4">
      {links.map((link) => {
        const content = (
          <Link key={link.type} className="flex" href={link.href}>
            <Button
              variant="ghost"
              className={`w-36 h-32 p-4 flex-col justify-between hover:bg-[rgba(38,38,38,.9)] ${
                props.type === link.type ? "bg-[rgba(38,38,38,.9)]" : ""
              }`}
            >
              <img
                className="size-[3.75rem]"
                src={link.imgSrc}
                alt={link.alt}
              />
              <p className="text-lg">{link.text}</p>
            </Button>
          </Link>
        );

        return props.type === link.type ? (
          <BackgroundGradient key={link.type} className="rounded-xl">
            {content}
          </BackgroundGradient>
        ) : (
          content
        );
      })}
    </div>
  );
};
