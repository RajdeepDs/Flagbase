import { protectedProcedure } from "@/procedures";
import { getCurrentUser } from "@/services/user.service";

export const userRouter = {
  me: protectedProcedure.user.me.handler(({ context }) =>
    getCurrentUser(context)
  ),
};
