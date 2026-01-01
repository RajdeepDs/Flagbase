import { z } from "zod";

export const createAppInput = z.object({
  name: z.string().min(1),
});
