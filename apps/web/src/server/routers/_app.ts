import { createTRPCRouter } from "../trpc";
import { appRouter as appFlagRouter } from "./app";
import { flagRouter } from "./flag";

export const appRouter = createTRPCRouter({
  flag: flagRouter,
  app: appFlagRouter,
});

export type AppRouter = typeof appRouter;
