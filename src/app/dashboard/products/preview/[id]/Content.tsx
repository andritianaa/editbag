"use client";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { useTheme } from "next-themes";

export type ContentProps = {
  content: string;
};

export const Content = (props: ContentProps) => {
  const { theme } = useTheme();

  return (
    <div className="" data-color-mode="dark">
      <MarkdownPreview source={props.content} style={{ padding: 16 }} />
    </div>
  );
};
