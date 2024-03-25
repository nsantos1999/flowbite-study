import { SidebarItem } from "@/@types/configs.types";
import { SidebarCollapse, SidebarItem as SidebarItemFB } from "flowbite-react";

export interface AdminSidebarItemProps {
  item: SidebarItem;
}

export function AdminSidebarItem({ item }: AdminSidebarItemProps) {
  if (item.children) {
    return (
      <SidebarCollapse icon={item.icon} label={item.title}>
        {item.children.map((childrenItem, index) => (
          <AdminSidebarItem key={index} item={childrenItem} />
        ))}
      </SidebarCollapse>
    );
  }
  return (
    <SidebarItemFB href="#" icon={item.icon}>
      {item.title}
    </SidebarItemFB>
  );
}
