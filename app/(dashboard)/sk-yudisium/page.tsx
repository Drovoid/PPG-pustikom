import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { SKYudisium } from "@/types";
import { columns } from "./column";
import { DataTable } from "./data-table";
import SkYudisiumForm from "@/components/sk-form";

export const metadata = {
  title: "SK Yudisium",
};

async function getData(): Promise<SKYudisium[]> {
  // Fetch data from your API here.
  return [
    {
      noSkYudisium: "490/UN39.5.FBS/PK.04/2024",
      tanggalSkYudisium: "2024-01-29",
      jabatanPenandatangan: "DEKAN FAKULTAS BAHASA DAN SENI",
      namaPenandatangan: "Dr. Liliarsa Muliastuti, M.Pd.",
    },
  ];
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <DashboardShell>
      <DashboardHeader heading="Tambah SK Yudisium" text=""></DashboardHeader>
      <div className="w-full h-full grid items-center mx-auto font-heading px-2">
        <div className="flex flex-col gap-12">
          <SkYudisiumForm />
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </DashboardShell>
  );
}
