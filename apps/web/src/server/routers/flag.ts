import { flagRouterContract } from "@flagbase/api";
import { validateFlagDefinition } from "@flagbase/core";
import db, { Prisma } from "@flagbase/db";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const flagRouter = createTRPCRouter({
  create: protectedProcedure
    .input(flagRouterContract.create.input)
    .mutation(async ({ input }) => {
      validateFlagDefinition(input);

      try {
        return await db.flag.create({
          data: {
            appId: input.appId,
            key: input.key,
            value: input.value,
          },
        });
      } catch (error) {
        if (
          error instanceof Prisma.PrismaClientKnownRequestError &&
          error.code === "P2002"
        ) {
          throw new TRPCError({
            code: "CONFLICT",
            message: `Flag "${input.key}" already exists in this app`,
          });
        }
        throw error;
      }
    }),

  list: protectedProcedure
    .input(flagRouterContract.list.input)
    .query(async ({ input }) =>
      db.flag.findMany({
        where: { appId: input.appId },
        select: {
          key: true,
          value: true,
        },
        orderBy: { createdAt: "asc" },
      })
    ),
});
