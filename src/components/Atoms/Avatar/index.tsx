import classNames from "classnames/bind";
import style from "./index.module.scss";

interface AvatarProps {
  name: string;
  fontSize:
    | "title-01"
    | "title-02"
    | "title-03"
    | "subTitle-01"
    | "subTitle-02"
    | "body-01"
    | "body-02";
}

const cn = classNames.bind(style);

function Avatar({ name, fontSize = "subTitle-01" }: AvatarProps) {
  const avatarClass = cn("avatar", fontSize);
  return <div className={avatarClass}>{name[0]}</div>;
}

export default Avatar;
