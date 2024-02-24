"use client";

//Utils
import { useEffect, useRef } from "react";
import { EDITOR_JS_TOOLS } from "@/lib/editorJs/editorJsTools";
import exampleData from "./example_data";
import EditorJS from "@editorjs/editorjs";

// Style
import style from "./index.module.scss";

// Components
import AuthSlideItemWrapper from "../../Atoms/AuthSlideItemWrapper";

function ExampleSlideItem() {
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
    <AuthSlideItemWrapper>
      <div className={style["editor-wrapper"]}>
        <div tabIndex={-1} id="example_editor" className={style.editor} />
      </div>
    </AuthSlideItemWrapper>
  );
}

export default ExampleSlideItem;
