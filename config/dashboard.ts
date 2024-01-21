import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Support",
      href: "/support",
      disabled: true,
    },
  ],
  sidebarNav: [
    {
      title: "Home",
      href: "/",
      icon: "home",
    },
    {
      title: "SK Yudisium",
      href: "/dashboard/billing",
      icon: "yudisium",
    },
  ],
}
