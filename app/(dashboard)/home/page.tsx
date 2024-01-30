import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { SKYudisium } from "@/types";
import SkYudisiumForm from "@/components/sk-form";
import { PendataanForm } from "@/components/pendataan-form";
import { DataTable } from "@/components/data-table";
import getData from "@/data/dataLulus";
import { columns } from "./column";

export const metadata = {
  title: "Pendataan",
};

export default async function DashboardPage() {
  const data = await getData();
  return (
    <div>
      <DashboardShell>
        <DashboardHeader heading="Tambah Pemberkasan Mahasiswa" text=""></DashboardHeader>
        <div className="w-full h-full grid items-center mx-auto font-heading px-2">
          <PendataanForm />
        </div>
      </DashboardShell>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
