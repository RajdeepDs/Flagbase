import prisma from "@flagbase/db";
import type { Context } from "@/context";

export async function getCurrentUser(ctx: Context) {
  if (!ctx.session?.user) {
    throw new Error("User not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { id: ctx.session.user.id },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
