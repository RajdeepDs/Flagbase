import { protectedProcedure } from "@/procedures";
import { getAllProjectsQuery } from "@/services/project.service";

export const ProjectRouter = {
  getAllProjects: protectedProcedure.project.getAllProjects.handler(
    async ({ context }) => {
      const projects = await getAllProjectsQuery({ ctx: context });
      return projects;
    }
  ),
};
