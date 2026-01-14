import prisma from "@flagbase/db";
import { protectedProcedure } from "@/procedures";
import { createProject } from "@/services/project.service";

export const SetupRouter = {
  projectSetup: protectedProcedure.setup.projectSetup.handler(
    async ({ input, context }) => {
      return await prisma.$transaction(async (tx) => {
        const project = await createProject({ input, ctx: context });
        await tx.user.update({
          where: {
            id: context.session.user.id,
          },
          data: {
            defaultProject: project.url,
          },
        });
        return project;
      });
    }
  ),
};
