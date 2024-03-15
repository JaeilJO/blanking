import OutLineLink from "./OutLineLink";
import SidebarLink from "./SidebarLink";
import SquareLink from "./SquareLink";
import SolidLink from "./SolidLink";
import TextLink from "./TextLink";
import CircleLink from "./CircleLink";

const Link = {
  Line: OutLineLink,
  Solid: SolidLink,
  Text: TextLink,
  Square: SquareLink,
  SidebarLink: SidebarLink,
  Circle: CircleLink,
};

export default Link;
