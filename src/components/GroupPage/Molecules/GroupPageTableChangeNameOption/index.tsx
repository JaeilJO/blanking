// Components
import GroupPageTableItemOptionLink from "../../Atoms/GroupPageTableItemOptionLink";

// Icons
import { BsPencilSquare } from "react-icons/bs";

interface GroupPageTableChangeNameOptionProps {
  pagename: string;
  groupname: string;
}

function GroupPageTableChangeNameOption({
  pagename,
  groupname,
}: GroupPageTableChangeNameOptionProps) {
  return (
    <GroupPageTableItemOptionLink
      href={{
        pathname: `/user/changegroupname`,
        query: { pagename: `${pagename}`, groupname: `${groupname}` },
      }}
    >
      <BsPencilSquare />
    </GroupPageTableItemOptionLink>
  );
}

export default GroupPageTableChangeNameOption;
