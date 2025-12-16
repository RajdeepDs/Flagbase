import { createTRPCRouter } from "../trpc";
import { flagRouter } from "./flag";

export const appRouter = createTRPCRouter({
  flag: flagRouter,
});

export type AppRouter = typeof appRouter;
