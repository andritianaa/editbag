"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { createSubCategory } from "../../actions/categories.actions";
import { toast } from "sonner";

export type NewSubCategoryProps = {
  onAdd: (name: string) => void;
};

export const NewSubCategory = (props: NewSubCategoryProps) => {
  const [name, setName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCreateSubCategory = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (name) {
      props.onAdd(name);
      await createSubCategory(name);
      setIsOpen(false);
      setName("");
    } else {
      toast.error("Please provide a subcatogory name");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>New subcategory</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new sub category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreateSubCategory}>
          <div className="gap-4 py-4">
            <Input
              id="name"
              placeholder="Subategory name"
              label="Subategory name"
              value={name}
              className="w-full"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add new</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
