export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};

export type DashboardConfig = {
  mainNavAdmin: MainNavItem[];
  mainNavMhs: MainNavItem[];
  mainNavBakhum: MainNavItem[];
  sidebarNavAdmin: SidebarNavItem[];
  sidebarNavMhs: SidebarNavItem[];
  sidebarNavBakhum: SidebarNavItem[];
};

export type SKYudisium = {
  no: number;
  noSkYudisium: string;
  tanggalSkYudisium: string;
  jabatanPenandatangan: string;
  namaPenandatangan: string;
};

export type Pendataan = {
  no: number;
  nim: string;
  noSkYudisium: string;
  namaMahasiswa: string;
  programStudi: string;
  pendidikanSebelumnya: string;
  jalur: string;
  ipk: number;
  konfirmasi: boolean;
};

export type Transkrip = {
  no: number;
  namaMahasiswa: string;
  bidangStudi: string;
  periodeKelulusan: string;
  dicetak: number;
};

export type BobotNilai = {
  tingkatPenugasan: string;
  nilai: string;
  bobot: number;
};
