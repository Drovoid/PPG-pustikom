import { redirect } from "next/navigation";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";

export const metadata = {
  title: "SK Yudisium",
};

export default async function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Tambah SK"
        text="Masukkan SK Yudisium Sesuai Periode saat ini."
      ></DashboardHeader>
      <div className="w-full h-full grid items-center mx-auto font-heading">

      </div>
    </DashboardShell>
  );
}
