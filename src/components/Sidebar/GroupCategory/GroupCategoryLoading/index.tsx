import style from "./index.module.scss";

function GroupCategoryLoading() {
  return (
    <div className={style.loading_wrapper}>
      <div className={style.bar} />

      <div className={style.short_bar_70} />
      <div className={style.short_bar_30} />
      <div className={style.short_bar_50} />
    </div>
  );
}

export default GroupCategoryLoading;
