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
import { useState } from "react";
import { toast } from "sonner";

export type NewCategoryProps = {
  onAdd: (name: string) => void;
};

export const NewCategory = (props: NewCategoryProps) => {
  const [name, setName] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleCreateCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      props.onAdd(name);
      setIsOpen(false);
      setName("");
    } else {
      toast.error("Please provide a catogory name");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setIsOpen(true)}>New category</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleCreateCategory}>
          <div className="gap-4 py-4">
            <Input
              id="name"
              placeholder="Category name"
              label="Category name"
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
