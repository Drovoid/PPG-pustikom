import { DashboardConfig } from "@/types"

export const dashboardConfig: DashboardConfig = {
  mainNavAdmin: [
    {
      title: "Home",
      href: "/home",
    },
    {
      title: "SK Yudisium",
      href: "/sk-yudisium",
    },
  ],
  mainNavMhs: [
    {
      title: "Pemberkasan",
      href: "/pemberkasan",
    },
  ],
  mainNavBakhum: [
    {
      title: "Transkrip",
      href: "/transkrip",
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
      href: "/pemberkasan",
      icon: "yudisium",
    },
  ],
  sidebarNavBakhum: [
    {
      title: "Transkrip",
      href: "/transkrip",
      icon: "transcript",
    },
  ],
}
