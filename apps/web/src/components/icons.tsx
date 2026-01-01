import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type IconProps = ComponentProps<typeof HugeiconsIcon>;

export function Icon({
  size = 16,
  strokeWidth = 1.5,
  className,
  ...rest
}: IconProps) {
  return (
    <HugeiconsIcon
      className={cn("text-muted-foreground", className)}
      size={size}
      strokeWidth={strokeWidth}
      {...rest}
    />
  );
}
