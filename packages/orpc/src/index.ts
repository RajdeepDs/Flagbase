import { type ContractRouterClient, oc } from "@orpc/contract";
import { SetupRouter } from "./routers/setup";
import { userRouter } from "./routers/user";

export * from "./schemas/setup.schema";
export * from "./schemas/user.schema";

export const contracts = oc.router({
  user: userRouter,
  setup: SetupRouter,
});

export type Contracts = typeof contracts;
export type ContractsClient = ContractRouterClient<typeof contracts>;
