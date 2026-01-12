import { protectedProcedure } from "@/procedures";
import { createProject } from "@/services/setup";

export const SetupRouter = {
  projectSetup: protectedProcedure.setup.projectSetup.handler(
    async ({ input, context }) => {
      return await createProject({ input, ctx: context });
    }
  ),
};
