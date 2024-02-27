// Components
import GroupPageTableItemOptionsWrapper from "../../Atoms/GroupPageTableItemOptionsWrapper";
import GroupPageTableDeleteOption from "../GroupPageTableDeleteOption";
import GroupPageTableChangeNameOption from "../GroupPageTableChangeNameOption";

interface GroupPageTableItemOptionsProps {
  pagename: string;
  groupname: string;
}

function GroupPageTableItemOptions({
  pagename,
  groupname,
}: GroupPageTableItemOptionsProps) {
  return (
    <GroupPageTableItemOptionsWrapper>
      <GroupPageTableChangeNameOption
        pagename={pagename}
        groupname={groupname}
      />
      <GroupPageTableDeleteOption pagename={pagename} groupname={groupname} />
    </GroupPageTableItemOptionsWrapper>
  );
}

export default GroupPageTableItemOptions;
