// Components
import GroupPageTitle from "../../Atoms/GroupPageTitle";
import GroupPageWrapper from "../../Atoms/GroupPageWrapper";
import GroupPageTable from "../../Organisms/GroupPageTable";

interface GroupPageTemplateProps {
  groupname: string;
  username: string;
}

function GroupPageTemplate({ groupname, username }: GroupPageTemplateProps) {
  return (
    <GroupPageWrapper>
      <GroupPageTitle groupname={groupname} />
      <GroupPageTable username={username} currentGroupName={groupname} />
    </GroupPageWrapper>
  );
}

export default GroupPageTemplate;
