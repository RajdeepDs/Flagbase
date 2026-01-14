import { oc } from "@orpc/contract";
import { ProjectSchema } from "../schemas/project.schema";

export const ProjectRouter = oc.router({
  getAllProjects: oc.output(ProjectSchema.array()),
});
