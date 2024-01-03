"use client"

import { Button } from "@nextui-org/react"
import { Course } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Chip } from "@nextui-org/react"

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem
} from "@nextui-org/dropdown";
import toast from "react-hot-toast"


export const columns: ColumnDef<Course>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="shadow" color="primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },

  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="shadow" color="primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const createdAt = row.getValue("createdAt") || new Date();
      const formattedCreatedAt = new Date(String(createdAt)).toLocaleString();

      return (
        <span>{formattedCreatedAt}</span>
      )
    },

  },
  {
    accessorKey: "isPublished",
    header: ({ column }) => {
      return (
        <Button
          variant="shadow" color="primary"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Published
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const isPublished = row.getValue("isPublished") || false;

      return (
        <Chip color={isPublished ? "success" : "default"}>{isPublished ? "Published" : "Draft"}</Chip>

      )
    },
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;
      const router = useRouter();

      return (
        <Dropdown>
          <DropdownTrigger>
            <MoreHorizontal className="h-4 w-4"></MoreHorizontal>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem 
              onClick={() => { 
                toast.success("Loading to course edition page...")
                router.push(`/instructor/courses/${id}`) }}
              startContent={<Pencil className="h-4 w-4"></Pencil>}
              >
              Edit Course
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    }
  }
]
