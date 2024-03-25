import { SidebarItem } from "@/@types/configs.types";
import { HiChartPie, HiUserAdd } from "react-icons/hi";

export const sidebarItems: SidebarItem[] = [
  {
    title: "Teste1",
    icon: HiChartPie,
  },
  {
    title: "Teste2",
    icon: HiUserAdd,
    children: [
      {
        title: "Teste1",
        icon: HiChartPie,
      },
    ],
  },
];
