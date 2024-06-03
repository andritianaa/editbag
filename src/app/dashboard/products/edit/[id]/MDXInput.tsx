"use client";
import { useState, Dispatch, SetStateAction } from "react";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useTheme } from "next-themes";

export type MDXProps = {
  onChange: (text: string) => void;
  value: string;
};

export const MDXInput = (props: MDXProps) => {
  const { theme } = useTheme();
  const [text, setText] = useState<string | undefined>(props.value);
  const handleChange: Dispatch<SetStateAction<string | undefined>> = (
    newText
  ) => {
    if (typeof newText === "string") {
      setText(newText);
      props.onChange(newText);
    }
  };

  return (
    <div className="h-[70vh]" data-color-mode="dark">
      <MDEditor
        height="100%"
        value={text}
        onChange={handleChange}
        previewOptions={{
          rehypePlugins: [[rehypeSanitize]],
        }}
      />
    </div>
  );
};
