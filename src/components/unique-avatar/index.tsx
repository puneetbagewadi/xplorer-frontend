import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface UniqueAvatarType {
  text: string;
  className?: string;
  size?: number;
}

const UniqueAvatar = ({ text, className, size = 40 }: UniqueAvatarType) => {
  return (
    <Image
      src={`https://api.multiavatar.com/${text}.svg`}
      alt={`${text}.svg`}
      width={size}
      height={size}
      className={cn("rounded-full", className)}
    />
  );
};

export default UniqueAvatar;
