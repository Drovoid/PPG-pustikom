"use client";

import { Pendataan } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table-header";
import { Switch } from "@/components/ui/switch";
import DeleteButtonAction from "@/components/delete-button";
import { SelectButtonAction } from "@/components/select-action";

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
    cell: ({ row }) => {
      const value: string = row.getValue("noSkYudisium");
      return (
        <div className="flex flex-col">
          <SelectButtonAction noSkYudisium={value} />
        </div>
      );
    },
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
    cell: ({ row }) => {
      const no = parseFloat(row.getValue("no"));

      return <Switch className="ms-3" />;
    },
  },
  {
    accessorKey: "aksi",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Aksi" />
    ),
    cell: ({ row }) => {
      const no = parseFloat(row.getValue("no"));

      return (
        <div>
          <DeleteButtonAction />
        </div>
      );
    },
  },
];
