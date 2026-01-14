import { ProjectRouter } from "./project.handler";
import { SetupRouter } from "./setup.handler";
import { userRouter } from "./user.handler";

export const appRouter = {
  user: userRouter,
  setup: SetupRouter,
  project: ProjectRouter,
};
