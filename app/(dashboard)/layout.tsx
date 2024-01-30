import { notFound } from "next/navigation";

import { dashboardConfig } from "@/config/dashboard";
// import { getCurrentUser } from "@/lib/session"
import { MainNav } from "@/components/main-nav";
import { DashboardNav } from "@/components/nav";
import { UserAccountNav } from "@/components/user-account-nav";
import { SiteFooter } from "@/components/site-footer";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  // const user = await getCurrentUser()

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-green-700">
        <div className="container flex h-16 items-center justify-between py-4 text-white">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] relative">
        <aside className="sticky top-20 hidden w-[200px] flex-col h-[600px] md:flex rounded-lg backdrop-filter backdrop-blur-lg border-2 border-green-700">
          <DashboardNav items={dashboardConfig.sidebarNavAdmin} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
