import type { ReactNode } from "react";
import { SetupHeader } from "@/components/layout/setup-header";

export default function ProjectSetupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-svh flex-col items-center justify-center">
      <SetupHeader />
      {children}
    </div>
  );
}
