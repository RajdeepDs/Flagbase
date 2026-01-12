import { ProjectSetup } from "@/components/setup/project-setup";
import { verifySession } from "@/lib/dal";

export default async function ProjectSetupPage() {
  await verifySession();

  return (
    <div className="w-full max-w-sm px-3 text-center sm:max-w-md">
      <ProjectSetup />
    </div>
  );
}
