"use client";

import { SKYudisium } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table-header";

export const columns: ColumnDef<SKYudisium>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
  },
  {
    accessorKey: "noSkYudisium",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No SK" />
    ),
  },
  {
    accessorKey: "tanggalSkYudisium",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tanggal SK" />
    ),
  },
  {
    accessorKey: "jabatanPenandatangan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jabatan TTD" />
    ),
  },
  {
    accessorKey: "namaPenandatangan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama TTD" />
    ),
  },
  {
    accessorKey: "aksi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Aksi" />
    ),
  }
];
