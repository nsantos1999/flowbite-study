"use client";

import { sidebarItems } from "@/configs/sidebar.config";
import {
  NavbarBrand,
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { AdminSidebarItem } from "./AdminSidebarItem";
import Link from "next/link";

export function AdminSidebar() {
  return (
    <Sidebar aria-label="Default sidebar example" className="h-screen">
      <a className="flex py-4">
        <img
          src="/favicon.ico"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Company Logo
        </span>
      </a>
      <SidebarItems className="">
        <SidebarItemGroup>
          {sidebarItems.map((sidebarItem, index) => (
            <AdminSidebarItem key={index} item={sidebarItem} />
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
