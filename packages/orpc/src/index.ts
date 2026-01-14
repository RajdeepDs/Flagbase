import { type ContractRouterClient, oc } from "@orpc/contract";
import { ProjectRouter } from "./contracts/project.contract";
import { SetupRouter } from "./contracts/setup.contract";
import { userRouter } from "./contracts/user.contract";

export * from "./schemas/project.schema";
export * from "./schemas/setup.schema";
export * from "./schemas/user.schema";

export const contracts = oc.router({
  user: userRouter,
  setup: SetupRouter,
  project: ProjectRouter,
});

export type Contracts = typeof contracts;
export type ContractsClient = ContractRouterClient<typeof contracts>;
