import type { ReactNode } from "react";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { batchPrefetch } from "@/orpc";
import { orpc } from "@/utils/orpc";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  await batchPrefetch([orpc.project.getAllProjects.queryOptions()]);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-screen w-full">{children}</main>
    </SidebarProvider>
  );
}
