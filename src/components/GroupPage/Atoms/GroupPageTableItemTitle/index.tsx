import style from "./index.module.scss";

function GroupPageTableItemTitle({ pagename }: { pagename: string }) {
  return <div className={style["title"]}>{pagename}</div>;
}

export default GroupPageTableItemTitle;
