"use client";

import EditorPageTitle from "../../Atoms/EditorPageTitle";

import { useSession } from "next-auth/react";
import useChangeNmaeEditor from "./logic/useChangeNameEditor";

interface EditorPageTitleEditorProps {
  pagename: string;
  groupname: string;
}

function EditorPageTitleEditor({
  pagename,
  groupname,
}: EditorPageTitleEditorProps) {
  const session = useSession();
  const subkey = session?.data?.user.subkey as string;

  const { pageNameRef, changeMode } = useChangeNmaeEditor({
    subkey,
    pagename,
    groupname,
  });

  return (
    <EditorPageTitle ref={pageNameRef} contentEditable={changeMode}>
      {pagename}
    </EditorPageTitle>
  );
}

export default EditorPageTitleEditor;
