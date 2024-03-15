import OutLineLink from "./OutLineLink";
import SidebarLink from "./SidebarLink";
import SquareLink from "./SquareLink";
import FilledLink from "./FilledLink";
import TextLink from "./TextLink";
import CircleLink from "./CircleLink";

const Link = {
  Line: OutLineLink,
  Filled: FilledLink,
  Text: TextLink,
  Square: SquareLink,
  SidebarLink: SidebarLink,
  Circle: CircleLink,
};

export default Link;
