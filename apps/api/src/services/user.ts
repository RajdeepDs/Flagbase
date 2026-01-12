import prisma from "@flagbase/db";
import { ORPCError } from "@orpc/server";
import type { AuthenticatedContext } from "@/context";

export async function getCurrentUser(ctx: AuthenticatedContext) {
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
