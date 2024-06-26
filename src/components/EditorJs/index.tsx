"use client";

// Utils
import EditorJS from "@editorjs/editorjs";
import axios from "axios";
import { EDITOR_JS_TOOLS } from "@/lib/editorJs/editorJsTools";
import { useEffect, useRef } from "react";

// Style
import style from "./index.module.scss";

function EditorJs({
  subkey,
  data,
  pagename,
  groupname,
}: {
  subkey?: string;
  data: any;
  pagename?: string;
  groupname?: string;
}) {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        data: data[0],
        tools: EDITOR_JS_TOOLS,
        autofocus: true,

        onChange: async () => {
          const outputData = await ref.current.save();
          await axios.patch(
            `/api/userpage/${subkey}/${groupname}/${pagename}/content`,
            {
              data: {
                new_content: outputData,
              },
            }
          );
        },
      });

      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [data, pagename, groupname, subkey]);

  return <div id="editor" className={style.editor} />;
}

export default EditorJs;
