import { oc } from "@orpc/contract";
import { UserSchema } from "../schemas/user.schema";

export const userRouter = oc.router({
  me: oc.output(UserSchema),
});
