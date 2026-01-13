import type { Route } from "next";
import { redirect } from "next/navigation";
import { ProjectSetup } from "@/components/setup/project-setup";
import { verifySession } from "@/lib/dal";
import { getQueryClient } from "@/orpc";
import { orpc } from "@/utils/orpc";

export default async function ProjectSetupPage() {
  await verifySession();
  const queryClient = getQueryClient();

  const { defaultProject } = await queryClient.ensureQueryData(
    orpc.user.me.queryOptions()
  );

  if (defaultProject) {
    redirect(`/${defaultProject}` as Route);
  }
  return (
    <div className="w-full max-w-sm px-3 text-center sm:max-w-md">
      <ProjectSetup />
    </div>
  );
}
