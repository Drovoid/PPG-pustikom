import { redirect } from "next/navigation"

import { DashboardHeader } from "@/components/header"
import { DashboardShell } from "@/components/shell"

export const metadata = {
  title: "Dashboard",
}

export default async function DashboardPage() {

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
      </DashboardHeader>
      <div className="px-2">
        aa
      </div>
    </DashboardShell>
  )
}
