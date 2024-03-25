"use client";

import { sidebarItems } from "@/configs/sidebar.config";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { AdminSidebarItem } from "./AdminSidebarItem";

export function AdminSidebar() {
  return (
    <Sidebar
      aria-label="Default sidebar example"
      className="h-screen rounded-none"
    >
      <SidebarItems className="rounded-none">
        <SidebarItemGroup>
          {sidebarItems.map((sidebarItem, index) => (
            <AdminSidebarItem key={index} item={sidebarItem} />
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
