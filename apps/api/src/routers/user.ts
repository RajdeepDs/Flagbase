import { protectedProcedure } from "@/procedures";
import { getCurrentUser } from "@/services/user";

export const userRouter = {
  me: protectedProcedure.user.me.handler(({ context }) =>
    getCurrentUser(context)
  ),
};
