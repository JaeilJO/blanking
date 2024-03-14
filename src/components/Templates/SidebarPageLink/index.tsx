import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";
import SidebarLinkWrapper from "@/components/Atoms/Wrappers/SidebarLinkWrapper";
import SidebarLinkOption from "@/components/Molecules/SidebarLinkOption";
import Link from "next/link";
import { LuFile, LuFileCheck2, LuTrash } from "react-icons/lu";

interface SidebarPageLinkProps {
  groupname: string;
  username: string;
  pagename: string;
  isOpen: boolean;
}

function SidebarPageLink({
  groupname,
  pagename,
  username,
  isOpen,
}: SidebarPageLinkProps) {
  const pageLinkHref = () => {
    if (isOpen) {
      return `/user/${username}/${groupname}`;
    }
    return `/user/${username}/${groupname}/${pagename}`;
  };
  return (
    <SidebarLinkWrapper level={2}>
      <Link href={pageLinkHref()}>
        <FlexBox.Row display="inline" alignItems="center" gap="gap-2">
          <Text.Subtitle fontSize="sub-02" color={isOpen ? "primary" : "black"}>
            {isOpen ? <LuFileCheck2 /> : <LuFile />}
          </Text.Subtitle>
          <Text.Body
            style={{
              maxWidth: "150px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            color={isOpen ? "primary" : "black"}
          >
            {pagename}
          </Text.Body>
        </FlexBox.Row>
      </Link>

      {/* Options */}
      <FlexBox.Row display="inline">
        <SidebarLinkOption
          href={{
            pathname: `/user/deletepage`,
            query: { groupname, pagename },
          }}
          icon={<LuTrash />}
        />
      </FlexBox.Row>
    </SidebarLinkWrapper>
  );
}

export default SidebarPageLink;
