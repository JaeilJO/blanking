"use client";

// Style
import { forwardRef } from "react";
import style from "./index.module.scss";

interface EditorPageTitleProps {
  children: React.ReactNode;
  contentEditable: boolean;
}
const EditorPageTitle = forwardRef<HTMLDivElement, EditorPageTitleProps>(
  function EditorPageTitle({ children, contentEditable }, ref) {
    return (
      <div
        ref={ref}
        contentEditable={contentEditable}
        suppressContentEditableWarning={true}
        className={style["title"]}
      >
        {children}
      </div>
    );
  }
);

export default EditorPageTitle;
