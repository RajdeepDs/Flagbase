"use client";

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

const teams = [
  {
    name: "Acme Inc.",
  },
  {
    name: "Monsters Inc.",
  },
  {
    name: "Stark Industries",
  },
];

export function OrganizationSwitcher() {
  const [currentTeam, setCurrentTeam] = useState(teams[0]);
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
                <Label>{currentTeam.name}</Label>
                <ChevronDownIcon className="text-muted-foreground" size={16} />
              </SidebarMenuButton>
            }
          />
          <DropdownMenuContent className={"w-fit"}>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Organizations</DropdownMenuLabel>
              {teams.map((team) => (
                <DropdownMenuCheckboxItem
                  checked={team.name === currentTeam.name}
                  key={team.name}
                  onClick={() => setCurrentTeam(team)}
                >
                  {team.name}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
