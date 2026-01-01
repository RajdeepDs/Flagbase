import { createFlagInput, listFlagsInput } from "../schemas/flag.schema";

export const flagRouterContract = {
  create: {
    input: createFlagInput,
  },
  list: {
    input: listFlagsInput,
  },
};
