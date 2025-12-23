import { z } from "zod";

/**
 * Public schema for creating a flag.
 * Used by API & CLI.
 */
export const flagDefinitionSchema = z
  .object({
    key: z
      .string()
      .min(1, "Flag key is required")
      .regex(/^[a-z][a-z0-9-]*$/, {
        message: "Flag key must be kebab-case (e.g. new-dashboard)",
      }),
    value: z.boolean(),
  })
  .strict();
