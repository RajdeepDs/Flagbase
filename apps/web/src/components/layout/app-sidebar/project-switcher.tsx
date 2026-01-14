"use client";

import type { Project } from "@flagbase/orpc";
import { LogoutSquare01Icon } from "@hugeicons/core-free-icons";
import { ChevronDownIcon } from "lucide-react";
import type { Route } from "next";
import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useGetAllProjectsQuery } from "@/hooks/use-project";
import { useUserQuery } from "@/hooks/use-user";
import { authClient } from "@/lib/auth-client";

export function ProjectSwitcher() {
  const { data: projects } = useGetAllProjectsQuery();
  const { data: user } = useUserQuery();
  const { slug } = useParams<{ slug: string }>();

  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    undefined
  );

  useEffect(() => {
    if (projects?.length && !currentProject) {
      setCurrentProject(
        projects.find((project) => project.url === slug) || projects[0]
      );
    }
  }, [projects, currentProject, slug]);

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/login" as Route);
        },
      },
    });
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton className="h-fit w-fit p-1">
                <Avatar size="sm">
                  <AvatarImage
                    className={"rounded-sm"}
                    src={user?.image as string}
                  />
                  <AvatarFallback className={"rounded-sm"}>
                    {user?.name?.substring(0, 1) ?? "U"}
                  </AvatarFallback>
                </Avatar>
                <Label>{currentProject?.name || "Flagbase"}</Label>
                <ChevronDownIcon className="text-muted-foreground" size={16} />
              </SidebarMenuButton>
            }
          />
          <DropdownMenuContent className={"min-w-44"}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Projects</DropdownMenuLabel>
              {projects?.map((project) => (
                <DropdownMenuCheckboxItem
                  checked={project.name === currentProject?.name}
                  key={project.name}
                  onClick={() => setCurrentProject(project)}
                >
                  {project.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout} variant="destructive">
              <Icon icon={LogoutSquare01Icon} />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
