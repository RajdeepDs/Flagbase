import type { FlagDefinition } from "./types";

/**
 * Semantic validation for a flag definition.
 * Throws human-readable errors.
 */
export function validateFlagDefinition(flag: FlagDefinition): void {
  if (flag.key.length < 3) {
    throw new Error(`Flag key "${flag.key}" is too short (min 3 characters)`);
  }

  // Future semantic rules can go here
}
