/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Button } from "../ui/button";

export type TabProps = {
  type: string;
};

export const Tab = (props: TabProps) => {
  return (
    <div className="mt-6 flex gap-4">
      <Link className="flex" href="/products">
        <Button
          variant="ghost"
          className={`w-36 h-32 p-4 flex-col justify-between hover:bg-[rgba(38,38,38,.9)] ${
            props.type == "templates" ? "bg-[rgba(38,38,38,.9)]" : ""
          } `}
        >
          <img
            className="size-[3.75rem]"
            src="/illustration/template.png"
            alt="template"
          />
          <p className="text-lg">Templates</p>
        </Button>
      </Link>
      <Link className="flex" href="/products/emoji">
        <Button
          variant="ghost"
          className={`w-36 h-32 p-4 flex-col justify-between hover:bg-[rgba(38,38,38,.9)] ${
            props.type == "emoji" ? "bg-[rgba(38,38,38,.9)]" : ""
          } `}
        >
          <img
            className="size-[3.75rem]"
            src="/illustration/emoji.png"
            alt="emoji"
          />
          <p className="text-lg">Emoji</p>
        </Button>
      </Link>
      <Link className="flex" href="/products/images">
        <Button
          variant="ghost"
          className={`w-36 h-32 p-4 flex-col justify-between hover:bg-[rgba(38,38,38,.9)] ${
            props.type == "images" ? "bg-[rgba(38,38,38,.9)]" : ""
          } `}
        >
          <img
            className="size-[3.75rem]"
            src="/illustration/images.png"
            alt="images"
          />
          <p className="text-lg">Images</p>
        </Button>
      </Link>
      <Link className="flex" href="/products/videos">
        <Button
          variant="ghost"
          className={`w-36 h-32 p-4 flex-col justify-between hover:bg-[rgba(38,38,38,.9)] ${
            props.type == "videos" ? "bg-[rgba(38,38,38,.9)]" : ""
          } `}
        >
          <img
            className="size-[3.75rem]"
            src="/illustration/video.png"
            alt="video"
          />
          <p className="text-lg">Videos</p>
        </Button>
      </Link>
    </div>
  );
};
