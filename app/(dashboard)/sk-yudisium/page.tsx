import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { columns } from "./column";
import { DataTable } from "@/components/data-table";
import SkYudisiumForm from "@/components/sk-form";
import getData from "@/data/dataSK";
export const metadata = {
  title: "SK Yudisium",
};

export default async function SKYudisiumPage() {
  const data = await getData();

  return (
    <div>
      <DashboardShell>
        <DashboardHeader heading="Tambah SK Yudisium" text=""></DashboardHeader>
        <div className="w-full h-full grid items-center mx-auto font-heading px-2">
          <div className="space-y-12">
            <SkYudisiumForm />
          </div>
        </div>
      </DashboardShell>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
