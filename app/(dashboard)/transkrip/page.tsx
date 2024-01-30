import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { DataTable } from "@/components/data-table";
import getData from "@/data/dataTranskrip";
import { columns } from "./column";
export const metadata = {
  title: "Transkrip",
};

export default async function TranscriptPage() {
  const data = await getData();

  return (
    <div>
      <DashboardShell className="!gap-0">
        <DashboardHeader
          heading="Cetak Transkrip"
          text="Silahkan Cetak Transkrip Pada Tabel Berikut"
        ></DashboardHeader>
        <div className="w-full h-full grid items-center mx-auto font-heading px-2"></div>
      </DashboardShell>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
