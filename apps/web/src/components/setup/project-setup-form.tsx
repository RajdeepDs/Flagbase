"use client";

import { Controller, type UseFormReturn } from "react-hook-form";
import z from "zod/v4";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";

export const projectSetupSchema = z.object({
  projectName: z.string(),
  projectURL: z.string(),
});

export type ProjectSetupSchema = z.infer<typeof projectSetupSchema>;

interface ProjectSetupFormProps {
  form: UseFormReturn<ProjectSetupSchema>;
}

export function ProjectSetupForm({ form }: ProjectSetupFormProps) {
  return (
    <FieldGroup>
      <Controller
        control={form.control}
        name="projectName"
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="project-name">Project Name</FieldLabel>
              <Input
                {...field}
                id="project-name"
                placeholder="Enter your project name"
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
      <Controller
        control={form.control}
        name="projectURL"
        render={({ field, fieldState }) => {
          return (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>Project URL</FieldLabel>
              <Input
                {...field}
                aria-invalid={fieldState.invalid}
                id={field.name}
                placeholder="Enter your project URL"
                required
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          );
        }}
      />
    </FieldGroup>
  );
}
