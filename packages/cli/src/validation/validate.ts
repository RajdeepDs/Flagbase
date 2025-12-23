import type { ZodType } from "zod/v4";

/**
 * Validates input against a Zod schema and throws
 * a clean, human-readable CLI error on failure.
 */
export function validateWithSchema<T>(schema: ZodType<T>, input: unknown): T {
  const result = schema.safeParse(input);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => {
        const path = issue.path.length ? issue.path.join(".") : "input";
        return `${path}: ${issue.message}`;
      })
      .join("\n");

    throw new Error(message);
  }

  return result.data;
}
