"use client";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { SimpleInput } from "../ui/SimpleInput";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
export type SearchInputProps = {};

export const SearchInput = (props: SearchInputProps) => {
  console.log(props);

  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search");
  const [text, setText] = useState<string>(currentSearch || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 1) {
      toast.error("Search query too short");
    } else {
      window.location.href = `/products/all?search=${text}`;
    }
  };
  return (
    <form className="w-full max-w-2xl max-md:hidden" onSubmit={handleSubmit}>
      <div className="flex w-full max-w-md items-center rounded-md bg-transparent shadow-sm">
        <div className="flex-shrink-0 p-2 text-muted-foreground">
          <SearchIcon className="h-5 w-5" color="#bfa8fb" />
        </div>
        <SimpleInput
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search for files or product..."
          className="flex-1 border-0 bg-transparent px-4 py-2 text-sm focus:ring-0"
        />
      </div>
    </form>
  );
};
