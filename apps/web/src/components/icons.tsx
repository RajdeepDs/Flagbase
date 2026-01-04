import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps, SVGProps } from "react";
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

export function FlagbaseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("text-foreground", className)}
      fill="none"
      height="48"
      viewBox="0 0 256 256"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Flagbase Icon</title>
      <path
        d="M256 256H128L0 128H128L256 256ZM256 128H128L0 0H128L256 128Z"
        fill="currentcolor"
        style={{ fill: "currentColor", fillOpacity: 1 }}
      />
    </svg>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="16"
      role="img"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.9933 8.27504C14.9933 7.68802 14.9456 7.25966 14.8426 6.81543H8.1394V9.46493H12.074C11.9947 10.1234 11.5663 11.115 10.6144 11.7813L10.6011 11.87L12.7205 13.5119L12.8673 13.5265C14.2158 12.2811 14.9933 10.4486 14.9933 8.27504Z"
        fill="currentColor"
      />
      <path
        d="M8.1394 15.2557C10.067 15.2557 11.6853 14.6211 12.8673 13.5264L10.6144 11.7812C10.0115 12.2016 9.20237 12.4951 8.1394 12.4951C6.25143 12.4951 4.64903 11.2497 4.07782 9.52832L3.99409 9.53543L1.79029 11.241L1.76147 11.3211C2.93551 13.6533 5.34706 15.2557 8.1394 15.2557Z"
        fill="currentColor"
      />
      <path
        d="M4.07787 9.52856C3.92715 9.08434 3.83992 8.60834 3.83992 8.11653C3.83992 7.62467 3.92715 7.14873 4.06994 6.7045L4.06595 6.60989L1.83453 4.87695L1.76152 4.91168C1.27765 5.87948 1 6.96629 1 8.11653C1 9.26677 1.27765 10.3535 1.76152 11.3213L4.07787 9.52856Z"
        fill="currentColor"
      />
      <path
        d="M8.1394 3.73713C9.48001 3.73713 10.3843 4.31622 10.9 4.80015L12.9149 2.83282C11.6774 1.68258 10.067 0.976562 8.1394 0.976562C5.34706 0.976562 2.93551 2.57896 1.76147 4.91116L4.06989 6.70398C4.64903 4.98259 6.25143 3.73713 8.1394 3.73713Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}
