import PageCard from "@/components/Organisms/PageCard";
import { Page } from "@/utils/modelTypes";

import FlexBox from "@/components/Atoms/FlexBox";

function PageTable({ pages, groupname }: { pages: Page[]; groupname: string }) {
  return (
    <FlexBox.Row gap="gap-4" flexWrap="wrap">
      {pages?.map((page) => (
        <PageCard
          key={page.id}
          pagename={page.pagename}
          groupname={groupname}
        />
      ))}
    </FlexBox.Row>
  );
}

export default PageTable;
