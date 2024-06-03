"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";
import { Footer } from "../../../../../components/common/Footer";

export type ContentProps = {
  content: string;
};

export const Content = (props: ContentProps) => {
  const { theme } = useTheme();

  return (
    <>
      <div className="min-h-[calc(100vh-10.56rem)]" data-color-mode="dark">
        <MarkdownPreview source={props.content} style={{ padding: 16 }} />
      </div>
      <Footer />
    </>
  );
};
