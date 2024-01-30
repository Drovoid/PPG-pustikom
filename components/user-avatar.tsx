// import { User } from "@prisma/client"
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "@/components/icons";

// interface UserAvatarProps extends AvatarProps {
//   user: Pick<User, "image" | "name">
// }

export function UserAvatar() {
  return (
    <div className="flex flex-row">
      <Avatar>
        <AvatarImage alt="Picture" src="/images/avatar.avif"/>
        <AvatarFallback>FIA</AvatarFallback>
      </Avatar>
    </div>
  );
}
