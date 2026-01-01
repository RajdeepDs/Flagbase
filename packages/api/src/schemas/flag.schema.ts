import { flagDefinitionSchema } from "@flagbase/core";
import { z } from "zod/v4";

export const createFlagInput = flagDefinitionSchema.extend({
  appId: z.string(),
});

export const listFlagsInput = z.object({
  appId: z.string(),
});
