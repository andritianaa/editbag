"use client";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { formatDateTime } from "@/lib/utils";
import Link from "next/link";
import { remove } from "@/actions/blog.actions";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Post } from "@prisma/client";

export type TableProps = {
  posts: Post[];
};

export const TablePost = (props: TableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="hidden md:table-cell">Created at</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.posts.map((post) => {
          return (
            <TableRow key={post.id}>
              <TableCell className="hidden sm:table-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Avatar className="aspect-square size-12 rounded-md object-cover">
                  <AvatarImage
                    className="object-cover"
                    src={
                      post.image
                        ? post.image
                        : `https://api.dicebear.com/8.x/shapes/svg?seed=${post.id}`
                    }
                    alt={`${post.title}`}
                  />
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{post.title}</TableCell>

              <TableCell>
                <Badge variant="outline">{post.status}</Badge>
              </TableCell>

              <TableCell className="hidden md:table-cell">
                {formatDateTime(post.createdAt)}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <Link href={`/dashboard/products/preview/${post.id}`}>
                      <DropdownMenuItem>View</DropdownMenuItem>
                    </Link>
                    <Link href={`/dashboard/products/edit/${post.id}`}>
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={() => remove(post.id)}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
