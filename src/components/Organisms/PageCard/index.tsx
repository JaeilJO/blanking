"use client";

import Text from "@/components/Atoms/Text";
import style from "./index.module.scss";
import FlexBox from "@/components/Atoms/FlexBox";
import PageCardOptionLink from "@/components/Molecules/PageCardOptionLink";
import { LuFileEdit } from "react-icons/lu";
import { useRouter } from "next/navigation";
import Button from "@/components/Atoms/Button";

interface PageCardProps {
  pagename: string;
  groupname: string;
}

function PageCard({ pagename, groupname }: PageCardProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`${groupname}/${pagename}`);
  };
  return (
    <div className={style["div"]}>
      <Text.Title
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        fontSize="tit-01"
      >
        <LuFileEdit />
      </Text.Title>
      <FlexBox.Column
        style={{ height: "100%" }}
        justifyContent="justify-space-between"
        alignItems="align-items-end"
      >
        {/* Delete Button */}
        <PageCardOptionLink
          href={{
            pathname: `/user/deletepage`,
            query: { pagename: `${pagename}`, groupname: `${groupname}` },
          }}
          theme="red"
        />
        <Button.Text
          onClick={onClick}
          fontSize="sub-02"
          theme="gray"
          fontWeight="font-bold"
        >
          {pagename}
        </Button.Text>
      </FlexBox.Column>
    </div>
  );
}

export default PageCard;
