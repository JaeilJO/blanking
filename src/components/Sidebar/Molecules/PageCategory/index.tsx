"use client";

// Utils
import { useParams } from "next/navigation";

// Components
import PageTitleButton from "../PageTitleButton";
import PageCategoryWrapper from "../../Atoms/PageCategoryWrapper";
import PageAddButton from "../PageAddButton";

// Types
import { Page } from "@/utils/modelTypes";

interface PageCategoryProps {
  pages: Page[];
  currentGroupName: string;
  groupname: string;
  username: string;
}

function PageCategory({
  pages,
  currentGroupName,
  username,
  groupname,
}: PageCategoryProps) {
  const params = useParams();

  const currentPageName = decodeURIComponent(params.page as string);

  return (
    <PageCategoryWrapper>
      {pages?.map((page: Page) => (
        <PageTitleButton
          key={page.id}
          currentPageName={currentPageName}
          pagename={page.pagename}
          currentGroupName={currentGroupName}
          groupname={groupname}
          username={username}
        />
      ))}
      <PageAddButton currentGroupName={currentGroupName} />
    </PageCategoryWrapper>
  );
}

export default PageCategory;
