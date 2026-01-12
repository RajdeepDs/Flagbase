"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "@sindresorhus/slugify";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ProjectSetupForm,
  type ProjectSetupSchema,
  projectSetupSchema,
} from "@/components/setup/project-setup-form";
import { Button } from "@/components/ui/button";
import { orpc } from "@/utils/orpc";

export function ProjectSetup() {
  const form = useForm<ProjectSetupSchema>({
    resolver: zodResolver(projectSetupSchema),
    defaultValues: {
      projectName: "",
      projectURL: "",
    },
  });

  const projectName = form.watch("projectName");

  useEffect(() => {
    const url = slugify(projectName || "");
    form.setValue("projectURL", url);
  }, [projectName, form]);

  const { mutate: projectSetupMutation, isPending } = useMutation(
    orpc.setup.projectSetup.mutationOptions({
      onSuccess: () => {
        console.log("Project created successfully.");
      },
      onError: (error) => {
        console.error(error);
      },
      onSettled: () => {
        form.reset();
        // TODO: redirect to dashboard
      },
    })
  );

  function onSubmit(values: ProjectSetupSchema) {
    projectSetupMutation({
      projectName: values.projectName,
      projectURL: values.projectURL,
    });
  }
  return (
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
        disabled={isPending}
        form="project-setup-form"
        size={"lg"}
        type="submit"
      >
        Continue
      </Button>
    </div>
  );
}
