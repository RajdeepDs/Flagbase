import { z } from "zod";

export const flagTypeSchema = z.enum(["boolean", "string", "number", "enum"]);

export const flagDefinitionSchema = z
  .object({
    key: z
      .string()
      .min(1)
      .regex(/^[a-z][a-z0-9-]*$/, {
        message: "Flag key must be kebab-case",
      }),

    type: flagTypeSchema,

    defaultValue: z.union([z.boolean(), z.string(), z.number()]),

    enumValues: z.array(z.string()).optional(),

    description: z.string().optional(),
  })
  .strict();
