"use client";

// Utils
import classNames from "classnames/bind";

// Style
import style from "./index.module.scss";

// Icons
import { LuFolderPlus } from "react-icons/lu";

const cn = classNames.bind(style);

interface GroupMakerMackingBoxProps {
  onSubmit: any;
  register: any;
}

function GroupMakerMackingBox({
  onSubmit,
  register,
}: GroupMakerMackingBoxProps) {
  return (
    <form className={cn("form")} onSubmit={onSubmit}>
      <label className={cn("label")} htmlFor="group_maker_button">
        <LuFolderPlus />
      </label>

      <input
        {...register("groupname")}
        name="groupname"
        className={cn("input")}
        type="text"
        required
        placeholder="그룹명을 입력해주세요"
      />

      <input
        id="group_maker_button"
        className={cn("submit-button")}
        type="submit"
      />
    </form>
  );
}

export default GroupMakerMackingBox;
