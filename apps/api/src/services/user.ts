import prisma from "@flagbase/db";
import { ORPCError } from "@orpc/server";
import type { Context } from "@/context";

export async function getCurrentUser(ctx: Context) {
  if (!ctx.session?.user) {
    throw new ORPCError("UNAUTHORIZED", {
      message: "User is not authenticated.",
    });
  }

  const user = await prisma.user.findUnique({
    where: { id: ctx.session.user.id },
  });

  if (!user) {
    throw new ORPCError("NOT_FOUND", {
      message: "User not found.",
    });
  }

  return user;
}
