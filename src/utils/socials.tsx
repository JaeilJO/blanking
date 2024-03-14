import { BsGoogle } from "react-icons/bs";

/**
 * Social Type
 * socialName : 소문자로만 띄어쓰기 없이 작성해주세요.
 * socilaName은 중복되면 안됩니다
 * icon : React Icon으로 작성해주세요.
 * color : string으로 작성해주세요. (ex. #E55C28)
 */
export type SocialType = {
  socialName: string;
  icon: React.ReactNode;
  color: string;
};

const socials: SocialType[] = [
  {
    socialName: "google",
    icon: <BsGoogle />,
    color: "#E55C28",
  },
];

export default socials;
