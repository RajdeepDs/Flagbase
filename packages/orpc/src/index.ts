import { oc } from "@orpc/contract";
import { userRouter } from "./routers/user";

export * from "./schemas/user.schema";

export const appRouter = oc.router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
