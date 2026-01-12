import type { ReactNode } from "react";
import { SetupHeader } from "@/components/layout/setup-header";
import { HydrateClient, prefetch } from "@/orpc";
import { orpc } from "@/utils/orpc";

export default async function ProjectSetupLayout({
  children,
}: {
  children: ReactNode;
}) {
  await prefetch(orpc.user.me.queryOptions());
  return (
    <HydrateClient>
      <div className="flex h-svh flex-col items-center justify-center">
        <SetupHeader />
        {children}
      </div>
    </HydrateClient>
  );
}
