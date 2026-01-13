import z from "zod";

export const ProjectSetupInputSchema = z.object({
  projectName: z.string(),
  projectURL: z.string(),
});

export type ProjectSetupInput = z.infer<typeof ProjectSetupInputSchema>;

export const ProjectSetupSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  authorId: z.string(),
});
