// Components
import SidebarAddButton from "../../Atoms/SidebarAddButton";

// Icons
import { LuFilePlus2 } from "react-icons/lu";

function PageAddButton({ currentGroupName }: { currentGroupName: string }) {
  return (
    <SidebarAddButton
      href={{
        pathname: "/user/createpage",
        query: { groupname: currentGroupName },
      }}
      title="Page 추가..."
      icon={<LuFilePlus2 />}
      fontSize="body-02"
    />
  );
}

export default PageAddButton;
