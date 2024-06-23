"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { SimpleInput } from "../ui/SimpleInput";
export type SearchInputProps = {};

export const SearchInput = (props: SearchInputProps) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/products?search=${text}`;
  };
  return (
    <form className="w-full max-w-2xl max-md:hidden" onSubmit={handleSubmit}>
      <div className="flex w-full max-w-md items-center rounded-md bg-background shadow-sm">
        <div className="flex-shrink-0 p-2 text-muted-foreground">
          <SearchIcon className="h-5 w-5" color="#bfa8fb" />
        </div>
        <SimpleInput
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for files or product..."
          className="flex-1 border-0 px-4 py-2 text-sm focus:ring-0"
        />
      </div>
    </form>
  );
};
