import {
  Flag01Icon,
  type HugeiconsIcon,
  PhysicsIcon,
  SoftwareLicenseIcon,
} from "@hugeicons/core-free-icons";

interface SidebarItem {
  icon: typeof HugeiconsIcon;
  label: string;
  href: string;
}

export const sidebarItems: SidebarItem[] = [
  {
    icon: Flag01Icon,
    label: "Flags",
    href: "/flags",
  },
  {
    icon: PhysicsIcon,
    label: "Environments",
    href: "/environments",
  },
  {
    icon: SoftwareLicenseIcon,
    label: "CLI Setup",
    href: "/cli-setup",
  },
] as const;
