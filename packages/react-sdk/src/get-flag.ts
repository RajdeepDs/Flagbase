import { getFlagValue } from "./store";
import type { Flags } from "./types";

export function getFlag<K extends keyof Flags>(key: K): boolean {
  return getFlagValue(key);
}
