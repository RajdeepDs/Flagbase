import { SetupRouter } from "./setup";
import { userRouter } from "./user";

export const appRouter = {
  user: userRouter,
  setup: SetupRouter,
};
