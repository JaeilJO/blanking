"use client";

import useGetpage from "@/hooks/useGetPage";

import { redirect } from "next/navigation";

import EditorJs from "@/components/EditorJs";

import style from "./index.module.scss";

import AuthorizedPageWrapper from "@/components/Atoms/Wrappers/AuthorizedPageWrapper";
import Text from "@/components/Atoms/Text";
import { FaSpinner } from "react-icons/fa6";

interface UserEditorPageProps {
  subkey: string;
  pagename: string;
  groupname: string;
}

function UserEditorPage({ subkey, pagename, groupname }: UserEditorPageProps) {
  const { data, isLoading } = useGetpage({ subkey, pagename, groupname });

  if (isLoading) {
    return (
      <AuthorizedPageWrapper>
        <div className={style["spiner"]}>
          <FaSpinner />
        </div>
      </AuthorizedPageWrapper>
    );
  }

  if (!data) {
    redirect("/not-found");
  }

  if (data?.length === 0) {
    redirect("/not-found");
  }

  return (
    <AuthorizedPageWrapper>
      <Text.Title fontSize="tit-03">{pagename}</Text.Title>
      <EditorJs
        subkey={subkey}
        data={data[0]?.content}
        pagename={pagename}
        groupname={groupname}
      />
    </AuthorizedPageWrapper>
  );
}

export default UserEditorPage;
