// import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

// interface UserAvatarProps extends AvatarProps {
//   user: Pick<User, "image" | "name">
// }

export function UserAvatar() {
  return (
    <div className="flex flex-row sm:gap-0 gap-2">
      <p className="md:text-lg text-xs text-ellipsis overflow-hidden sm:w-60 w-28 line-clamp-1 my-auto font-semibold">Hi, Test Username</p>
      <Avatar>
        <AvatarImage alt="Picture" src="/images/avatar.avif" />
      </Avatar>
    </div>
  );
}
