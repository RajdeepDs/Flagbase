import { flagRouterContract } from "@flagbase/api";
import { validateFlagDefinition } from "@flagbase/core";
import db from "@flagbase/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const flagRouter = createTRPCRouter({
  create: protectedProcedure
    .input(flagRouterContract.create.input)
    .mutation(({ input }) => {
      validateFlagDefinition(input);

      return db.flag.create({
        data: {
          appId: input.appId,
          key: input.key,
          type: input.type,
          defaultValue: input.defaultValue,
          enumValues: input.enumValues,
          description: input.description,
        },
      });
    }),

  list: protectedProcedure
    .input(flagRouterContract.list.input)
    .query(async ({ input }) =>
      db.flag.findMany({
        where: { appId: input.appId },
        orderBy: { createdAt: "asc" },
      })
    ),
});
