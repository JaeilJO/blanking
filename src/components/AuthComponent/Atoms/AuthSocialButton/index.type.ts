import { ReactNode } from "react";

export type AuthSocial = {
  icon: ReactNode;
  color: string;
  socialName: string;
  onClick: () => void;
};
