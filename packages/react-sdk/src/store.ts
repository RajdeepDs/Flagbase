import type { Flags } from "./types";

let flags: Partial<Flags> | null = null;

export function setFlags(next: Flags) {
  flags = next;
}

export function getFlagValue<K extends keyof Flags>(key: K): boolean {
  if (!flags) {
    throw new Error(
      "Flagbase SDK not initialized. Run `flagbase pull` and call setFlags()."
    );
  }

  return Boolean(flags[key]);
}
