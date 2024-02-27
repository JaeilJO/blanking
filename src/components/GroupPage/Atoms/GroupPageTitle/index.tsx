import style from "./index.module.scss";

function GroupPageTitle({ groupname }: { groupname: string }) {
  return <h1 className={style["title"]}>{groupname}</h1>;
}

export default GroupPageTitle;
