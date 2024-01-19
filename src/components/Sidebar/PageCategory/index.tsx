"use clinet";

import style from "./index.module.scss";

import { useParams } from "next/navigation";

import PageCategoryItem from "./PageCategoryItem";
import CreatePageButton from "./CreatePageButton";

interface PageCategoryProps {
  username: string;
  groupname: string;
  pages: any[];
  iscurrent_group: boolean;
}

function PageCategory({
  username,
  groupname,
  pages,
  iscurrent_group,
}: PageCategoryProps) {
  const param = useParams();

  const current_page_name = decodeURIComponent(param.page as string);
  const current_group_name = decodeURIComponent(param.group as string);

  const pageLength = pages ? pages.length : 0;

  return (
    <ul
      className={style.page_category_wrapper}
      style={{ height: `${iscurrent_group ? pageLength * 40 + 40 : 0}px` }}
    >
      {pages?.map((page: any) => (
        <PageCategoryItem
          key={page.pagename}
          current_page_name={current_page_name}
          pagename={page.pagename}
          current_group_name={current_group_name}
          groupname={groupname}
          username={username}
        />
      ))}

      <CreatePageButton current_group_name={current_group_name} />
    </ul>
  );
}

export default PageCategory;
