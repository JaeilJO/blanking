import useChangePageName from "@/hooks/useChangePageName";
import { useCallback, useEffect, useRef, useState } from "react";

interface useChangeNameEditorParams {
  subkey: string;
  pagename: string;
  groupname: string;
}

export default function useChangeNameEditor({
  subkey,
  pagename,
  groupname,
}: useChangeNameEditorParams) {
  const [changeMode, setChangeMode] = useState(false);
  const pageNameRef = useRef<HTMLDivElement>(null);

  const { mutate } = useChangePageName({
    subkey,
    pagename,
    groupname,
    new_pagename: pageNameRef.current?.textContent as string,
  });

  // 더블 클릭 이벤트 핸들러
  const doubleClickHandler = useCallback(() => {
    setChangeMode(true);
  }, []);

  // 포커스 아웃 이벤트 핸들러
  const focusOutHandler = useCallback(() => {
    if (pagename === pageNameRef.current?.textContent) return;
    mutate();
    setChangeMode(false);
  }, [mutate, pagename]);

  useEffect(() => {
    const pageNameElement = pageNameRef.current;
    if (!pageNameElement) return;

    pageNameElement.addEventListener("dblclick", doubleClickHandler);
    pageNameElement.addEventListener("focusout", focusOutHandler);

    return () => {
      pageNameElement.removeEventListener("dblclick", doubleClickHandler);
      pageNameElement.removeEventListener("focusout", focusOutHandler);
    };
  }, [doubleClickHandler, focusOutHandler]);

  return { pageNameRef, changeMode };
}
