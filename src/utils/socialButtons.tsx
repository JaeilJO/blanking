import { AuthSocial } from "@/components/AuthComponent/Atoms/AuthSocialButton/index.type";
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";

const socialButtons: AuthSocial[] = [
  {
    icon: <BsGoogle />,
    color: "#D85143",
    socialName: "google",
    onClick: () => signIn("google"),
  },
];

export default socialButtons;
