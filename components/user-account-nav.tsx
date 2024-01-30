"use client";

import Link from "next/link";
// import { User } from "next-auth"
// import { signOut } from "next-auth/react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserAvatar } from "@/components/user-avatar";

// interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
//   user: Pick<User, "name" | "image" | "email">
// }

export function UserAccountNav() {
  return (
    <DropdownMenu>
      <div className="flex flex-row gap-4">
        <p className="md:text-base text-xs text-ellipsis overflow-hidden line-clamp-1 my-auto font-semibold sm:max-w-44 max-w-20">
          Hi, Handrian Wibisono
        </p>
        <DropdownMenuTrigger>
          <UserAvatar />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">Handrian Wibi</p>
            <p className="w-[200px] truncate text-sm text-muted-foreground">
              1313621099
            </p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/home">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <Link href="/">
          <DropdownMenuItem className="cursor-pointer">
            Sign Out
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
