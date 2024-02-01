"use client";

import { Transkrip } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/table-header";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

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
    cell: ({ row }) => {
      const no = parseFloat(row.getValue("no"));

      return (
        <div className="flex flex-row gap-3">
          <Button className="bg-gray-200">
            <Icons.printer className="text-black" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "dicetak",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Dicetak" />
    ),
    cell: ({ row }) => {
      const value: number = row.getValue("dicetak");

      return <div className="ms-7">{value}</div>;
    },
  },
];
