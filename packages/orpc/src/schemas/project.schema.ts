import z from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string(),
  url: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  authorId: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;
