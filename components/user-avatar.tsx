// import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

// interface UserAvatarProps extends AvatarProps {
//   user: Pick<User, "image" | "name">
// }

export function UserAvatar() {
  return (
    <div className="flex flex-row hover:bg-gray-100 rounded-md justify-center gap-5 px-4">
      <p className="md:text-lg text-xs text-ellipsis overflow-hidden line-clamp-1 my-auto font-semibold max-w-56">Hi, Test Username</p>
      <Avatar>
        <AvatarImage alt="Picture" src="/images/avatar.avif" />
      </Avatar>
    </div>
  );
}
