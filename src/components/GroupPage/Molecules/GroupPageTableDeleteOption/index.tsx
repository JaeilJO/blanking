// Components
import GroupPageTableItemOptionLink from "../../Atoms/GroupPageTableItemOptionLink";

// Icons
import { BsTrash3 } from "react-icons/bs";

interface GroupPageTableDeleteOptionProps {
  pagename: string;
  groupname: string;
}

function GroupPageTableDeleteOption({
  pagename,
  groupname,
}: GroupPageTableDeleteOptionProps) {
  return (
    <GroupPageTableItemOptionLink
      href={{
        pathname: `/user/deletepage`,
        query: { pagename: `${pagename}`, groupname: `${groupname}` },
      }}
    >
      <BsTrash3 />
    </GroupPageTableItemOptionLink>
  );
}

export default GroupPageTableDeleteOption;
