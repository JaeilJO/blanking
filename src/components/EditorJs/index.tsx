"use client";

import EditorJS from "@editorjs/editorjs";

import { useEffect, useRef } from "react";

import style from "./index.module.scss";
import { EDITOR_JS_TOOLS } from "@/utils/editorjstools";

function EditorJs({ data }: { data?: any }) {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        data,
        tools: EDITOR_JS_TOOLS,
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);

  return <div id="editor" className={style.editor} />;
}

export default EditorJs;
