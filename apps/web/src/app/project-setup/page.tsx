"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ProjectSetupForm,
  type ProjectSetupSchema,
  projectSetupSchema,
} from "@/components/setup/project-setup-form";
import { Button } from "@/components/ui/button";

export default function ProjectSetupPage() {
  const form = useForm<ProjectSetupSchema>({
    resolver: zodResolver(projectSetupSchema),
    defaultValues: {
      projectName: "",
      projectURL: "",
    },
  });

  function onSubmit(data: ProjectSetupSchema) {
    console.log("Project Setup Data:", data);

    form.reset();
  }

  return (
    <div className="w-full max-w-sm px-3 text-center sm:max-w-md">
      <div className="space-y-8">
        <div className="mx-auto max-w-sm space-y-4">
          <h1 className="font-medium text-xl">Create your project</h1>
          <p className="text-muted-foreground text-sm">
            Projects are shared environments where you can collaborate with your
            team.
          </p>
        </div>
        <div className="w-full rounded-md bg-background-200 px-5 py-6 shadow-xl ring-1 ring-gray-200">
          <form id="project-setup-form" onSubmit={form.handleSubmit(onSubmit)}>
            <ProjectSetupForm form={form} />
          </form>
        </div>
        <Button
          className="h-11 w-full sm:w-sm"
          form="project-setup-form"
          size={"lg"}
          type="submit"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
