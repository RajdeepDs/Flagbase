"use client";

import { Alert02Icon, CancelCircleIcon, CheckmarkCircle02Icon, InformationCircleIcon, Loading02Icon } from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import { Icon } from "../icons";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <Icon icon={CheckmarkCircle02Icon} className="size-4" />,
        info: <Icon icon={InformationCircleIcon} className="size-4" />,
        warning: <Icon icon={Alert02Icon} className="size-4" />,
        error: <Icon icon={CancelCircleIcon} className="size-4" />,
        loading: <Icon icon={Loading02Icon} className="size-4 animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
