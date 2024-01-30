"use client";

import { Transkrip } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table-header";

export const columns: ColumnDef<Transkrip>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
  },
  {
    accessorKey: "namaMahasiswa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama" />
    ),
  },
  {
    accessorKey: "bidangStudi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bidang Studi" />
    ),
  },
  {
    accessorKey: "periodeKelulusan",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Periode" />
    ),
  },
  {
    accessorKey: "aksi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Aksi" />
    ),
  },
  {
    accessorKey: "dicetak",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dicetak" />
    ),
  },
];
