import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "SK Yudisium",
      href: "/sk-yudisium",
    },
  ],
  sidebarNavAdmin: [
    {
      title: "Home",
      href: "/home",
      icon: "home",
    },
    {
      title: "SK Yudisium",
      href: "/sk-yudisium",
      icon: "yudisium",
    },
  ],
  sidebarNavMhs: [
    {
      title: "Pemberkasan",
      href: "/home",
      icon: "home",
    },
  ],
}
