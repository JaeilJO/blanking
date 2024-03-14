"use client";

import { EDITOR_JS_TOOLS } from "@/lib/editorJs/editorJsTools";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef } from "react";
import exampleData from "./example_data";
import style from "./index.module.scss";

function ExperienceSection() {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "example_editor",
        data: exampleData,
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

  return (
    <div className={style["editor-wrapper"]}>
      <div tabIndex={-1} id="example_editor" className={style["editor"]} />
    </div>
  );
}

export default ExperienceSection;
