import Avatar from "@/components/Atoms/Avatar";

import FlexBox from "@/components/Atoms/FlexBox";
import Text from "@/components/Atoms/Text";

function SidebarUserInfo({ name, email }: { name: string; email: string }) {
  return (
    <FlexBox.Row
      alignItems="align-items-center"
      justifyContent="justify-space-between"
    >
      <Avatar name={name} size={"medium"} />
      <FlexBox.Column alignItems="align-items-end">
        <Text.Subtitle color="black" fontWeight="font-regular" display="inline">
          {name}
        </Text.Subtitle>
        <Text.Body
          color="gray"
          fontWeight="font-light"
          fontSize="body-02"
          display="inline"
        >
          {email}
        </Text.Body>
      </FlexBox.Column>
    </FlexBox.Row>
  );
}

export default SidebarUserInfo;
