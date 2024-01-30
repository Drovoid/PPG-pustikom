"use client";

import { Pendataan } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table-header";

export const columns: ColumnDef<Pendataan>[] = [
  {
    accessorKey: "no",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No" />
    ),
  },
  {
    accessorKey: "nim",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="NIM" />
    ),
  },
  {
    accessorKey: "noSkYudisium",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="No SK Yudisium" />
    ),
  },
  {
    accessorKey: "namaMahasiswa",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nama Mahasiswa" />
    ),
  },
  {
    accessorKey: "programStudi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Program Studi" />
    ),
  },
  {
    accessorKey: "pendidikanSebelumnya",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pendidikan Sebelumnya" />
    ),
  },
  {
    accessorKey: "jalur",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Jalur" />
    ),
  },
  {
    accessorKey: "ipk",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="IPK" />
    ),
  },
  {
    accessorKey: "konfirmasi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Konfirmasi" />
    ),
  },
  {
    accessorKey: "aksi",
    header: "Aksi"
  },
];
