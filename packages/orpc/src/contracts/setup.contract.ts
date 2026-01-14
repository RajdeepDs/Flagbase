import { oc } from "@orpc/contract";
import {
  ProjectSetupInputSchema,
  ProjectSetupSchema,
} from "../schemas/setup.schema";

export const SetupRouter = oc.router({
  projectSetup: oc.input(ProjectSetupInputSchema).output(ProjectSetupSchema),
});
