"use client";

import { useState } from "react";
import { Icons } from "./icons";
import Link from "next/link";
import { SidebarNavItem } from "@/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DashboardNavProps {
  items: SidebarNavItem[];
}

const Sidebar = ({ items }: DashboardNavProps) => {
  const path = usePathname();
  
  const [open, setOpen] = useState(false);

  if (!items?.length) {
    return null;
  }

  return (
    <div className="flex sticky top-20  ">
      <div
        className={` ${
          open ? "w-52" : "w-20 "
        } bg-dark-purple p-4 pt-4 relative duration-300 rounded-lg backdrop-filter backdrop-blur-lg border-2 border-green-700 h-[600px]`}
      >
        <Icons.chevronLeft
          className={`absolute cursor-pointer -right-4 top-1/2 w-8 h-8 border-dark-purple bg-white
           border-2 border-green-700 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <nav>
          {items.map((item, index) => {
            const Icon =
              Icons[(item.icon as keyof typeof Icons) || "arrowRight"]; // Add an index signature to allow indexing with a string
            return (
              item.href && (
                <Link key={index} href={item.disabled ? "/" : item.href}>
                  <li
                    className={cn(
                      "group flex items-center rounded-md p-2 text-md font-medium hover:bg-green-200 hover:text-accent-foreground space-x-4 my-2",
                      path === item.href ? "bg-green-200" : "transparent",
                      item.disabled && "cursor-not-allowed opacity-80", !open && "justify-center"
                    )}
                  >
                    {!open ? (
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger>
                            <Icon className="mx-auto w-full" />
                          </TooltipTrigger>
                          <TooltipContent side="right">
                            <p>{item.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <>
                        <Icon />
                        <span className={`origin-left duration-1000`}>
                          {item.title}
                        </span>
                      </>
                    )}
                  </li>
                </Link>
              )
            );
          })}
          {/* {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <Icons.chevronsUpDown />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))} */}
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
