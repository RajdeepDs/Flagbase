"use client";

import { Settings01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@/components/icons";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { appSidebarItems } from "@/config/app-sidebar";
import { ProjectSwitcher } from "./project-switcher";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {}

export function AppSidebar({ ...props }: AppSidebarProps) {
  const currentPath = usePathname();
  const sidebarItems = appSidebarItems;

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex-row items-center justify-between">
        <ProjectSwitcher />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {sidebarItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  isActive={currentPath.split("/")[2] === item.href}
                  key={item.href}
                  render={
                    <Link
                      className="cursor-default"
                      href={{ pathname: item.href }}
                    >
                      <Icon icon={item.icon} />
                      {item.label}
                    </Link>
                  }
                />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={
                <Link
                  className="cursor-default"
                  href={{ pathname: "settings" }}
                >
                  <Icon icon={Settings01Icon} />
                  Settings
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
