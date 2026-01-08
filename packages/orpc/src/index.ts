import { type ContractRouterClient, oc } from "@orpc/contract";
import { userRouter } from "./routers/user";

export * from "./schemas/user.schema";

export const contracts = oc.router({
  user: userRouter,
});

export type Contracts = typeof contracts;
export type ContractsClient = ContractRouterClient<typeof contracts>;
