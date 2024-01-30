"use client";

import { SKYudisium } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<SKYudisium>[] = [
  {
    accessorKey: "noSkYudisium",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost" className="ps-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          No SK
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "tanggalSkYudisium",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost" className=""
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tanggal SK
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
  },
  {
    accessorKey: "jabatanPenandatangan",
    header: "Jabatan TTD",
  },
  {
    accessorKey: "namaPenandatangan",
    header: "Nama TTD",
  },
];
