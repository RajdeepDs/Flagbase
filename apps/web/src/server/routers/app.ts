import { createAppInput } from "@flagbase/api";
import db from "@flagbase/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const appRouter = createTRPCRouter({
  create: protectedProcedure
    .input(createAppInput)
    .mutation(async ({ input }) => {
      // MVP: single org assumption
      let org = await db.organization.findFirst();

      if (!org) {
        org = await db.organization.create({
          data: {
            name: "Personal Workspace",
          },
        });
      }

      return db.app.create({
        data: {
          name: input.name,
          orgId: org.id,
        },
      });
    }),
});
