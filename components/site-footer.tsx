import * as React from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import Image from "next/image";
// import { ModeToggle } from "@/components/mode-toggle"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-2 md:h-14 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 mx-auto">
          <p className="text-center text-md leading-loose md:text-left text-green-700 font-bold flex flex-row">
            Pustikom UNJ © 2024
          </p>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </footer>
  );
}
