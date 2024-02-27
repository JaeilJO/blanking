"use client";

import useGetpage from "@/hooks/useGetPage";

import { redirect } from "next/navigation";
import EditorPageTitleEditor from "../EditroPageTitleEditor";
import EditorJs from "@/components/EditorJs";
import DeletePageButton from "@/components/EditorPage/Atoms/DeletePageButton";

interface GetPageDataWrapperProps {
  subkey: string;
  pagename: string;
  groupname: string;
}

function GetPageDataWrapper({
  subkey,
  pagename,
  groupname,
}: GetPageDataWrapperProps) {
  const { data, isLoading } = useGetpage({ subkey, pagename, groupname });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!data) {
    redirect("/not-found");
  }

  if (data?.length === 0) {
    redirect("/not-found");
  }

  return (
    <>
      <EditorPageTitleEditor pagename={pagename} groupname={groupname} />

      <DeletePageButton pagename={pagename} groupname={groupname} />

      <EditorJs
        subkey={subkey}
        data={data[0]?.content}
        pagename={pagename}
        groupname={groupname}
      />
    </>
  );
}

export default GetPageDataWrapper;
