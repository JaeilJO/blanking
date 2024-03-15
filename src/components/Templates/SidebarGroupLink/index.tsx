import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import SidebarLinkWrapper from "@/components/Atoms/Wrappers/SidebarLinkWrapper";
import SidebarLinkOption from "@/components/Molecules/SidebarLinkOption";
import Link from "next/link";
import { LuFolder, LuFolderOpen, LuTrash, LuPencilLine } from "react-icons/lu";

interface SidebarGroupLinkProps {
  groupname: string;
  username: string;
  isOpen: boolean;
}

function SidebarGroupLink({
  groupname,
  username,
  isOpen,
}: SidebarGroupLinkProps) {
  const groupLinkHref = () => {
    if (isOpen) {
      return `/user/${username}/`;
    }
    return `/user/${username}/${groupname}`;
  };
  return (
    <SidebarLinkWrapper level={1}>
      <Link href={groupLinkHref()} style={{ width: "100%" }}>
        <FlexBox.Row
          alignItems="align-items-center"
          justifyContent="justify-flex-start"
          gap="gap-2"
        >
          <Text.Subtitle
            display="block"
            fontSize="sub-02"
            color={isOpen ? "primary" : "black"}
          >
            {isOpen ? <LuFolderOpen /> : <LuFolder />}
          </Text.Subtitle>
          <Text.Body
            display="block"
            style={{
              maxWidth: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            color={isOpen ? "primary" : "black"}
          >
            {groupname}
          </Text.Body>
        </FlexBox.Row>
      </Link>

      {/* Options */}
      <FlexBox.Row gap="gap-1">
        <SidebarLinkOption
          href={{
            pathname: `/user/deletegroup`,
            query: { groupname },
          }}
          icon={<LuTrash />}
        />
        <SidebarLinkOption
          href={{
            pathname: `/user/changegroupname`,
            query: { groupname },
          }}
          icon={<LuPencilLine />}
        />
      </FlexBox.Row>
    </SidebarLinkWrapper>
  );
}

export default SidebarGroupLink;
