"use client";

import type { Project } from "@flagbase/orpc";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useGetAllProjectsQuery } from "@/hooks/use-project";

export function ProjectSwitcher() {
  const { data: projects } = useGetAllProjectsQuery();

  const [currentProject, setCurrentProject] = useState<Project | undefined>(
    projects?.at(0)
  );

  if (!projects || projects.length === 0) {
    return null;
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
                    src={"https://github.com/RajdeepDs.png"}
                  />
                  <AvatarFallback>RD</AvatarFallback>
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
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
