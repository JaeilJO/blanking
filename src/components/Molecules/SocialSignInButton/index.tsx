"use client";

import Button from "@/components/Atoms/Button";
import { SocialType } from "@/utils/socials";
import { signIn } from "next-auth/react";

function SocialSignInButton({ socialName, icon, color }: SocialType) {
  const onClick = () => signIn(socialName);
  return (
    <Button.Square size={50} color={color} onClick={onClick}>
      {icon}
    </Button.Square>
  );
}

export default SocialSignInButton;
