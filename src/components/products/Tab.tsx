import Link from "next/link";
import { Button } from "../ui/button";

export type TabProps = {
  type: string;
};

export const Tab = (props: TabProps) => {
  return (
    <div className="mt-6 flex gap-4">
      <Link href="/products">
        <Button
          variant="ghost"
          className={`${
            props.type == "templates" ? "bg-muted" : "bg-[rgba(38,38,38,.9)]"
          } `}
        >
          Templates
        </Button>
      </Link>
      <Link href="/products/emoji">
        <Button
          variant="ghost"
          className={`${
            props.type == "emoji" ? "bg-muted" : "bg-[rgba(38,38,38,.9)]"
          } `}
        >
          Emoji
        </Button>
      </Link>
      <Link href="/products/images">
        <Button
          variant="ghost"
          className={`${
            props.type == "images" ? "bg-muted" : "bg-[rgba(38,38,38,.9)]"
          } `}
        >
          Images
        </Button>
      </Link>
      <Link href="/products/videos">
        <Button
          variant="ghost"
          className={`${
            props.type == "videos" ? "bg-muted" : "bg-[rgba(38,38,38,.9)]"
          } `}
        >
          Videos
        </Button>
      </Link>
    </div>
  );
};
