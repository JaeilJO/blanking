// Components
import GroupPageTableItemWrapper from "../../Atoms/GroupPageTableItemWrapper";
import GroupPageTableItemTitle from "../../Atoms/GroupPageTableItemTitle";
import GroupPageTableItemOptions from "../GroupPageTableItemOptions";

interface GroupPageTableItemProps {
  pagename: string;
  groupname: string;
}

function GroupPageTableItem({ pagename, groupname }: GroupPageTableItemProps) {
  return (
    <GroupPageTableItemWrapper pagename={pagename} groupname={groupname}>
      <GroupPageTableItemTitle pagename={pagename} />
      <GroupPageTableItemOptions pagename={pagename} groupname={groupname} />
    </GroupPageTableItemWrapper>
  );
}

export default GroupPageTableItem;
