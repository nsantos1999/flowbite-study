import { IconType } from "react-icons";

export interface SidebarItem {
  title: string;
  icon: IconType;
  children?: SidebarItem[];
}
