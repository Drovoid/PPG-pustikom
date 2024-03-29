"use client";

import { SKYudisium } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table-header";
import { EditButtonDialogAction } from "@/components/edit-form-dialog";
import DeleteButtonAction from "@/components/delete-button";

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
    cell: ({ row }) => {
      const no = parseFloat(row.getValue("no"));

      return (
        <div className="flex flex-row gap-3">
          <EditButtonDialogAction />
          <DeleteButtonAction />
        </div>
      );
    },
  },
];
