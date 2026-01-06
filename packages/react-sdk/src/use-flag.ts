"use client";

import { useSyncExternalStore } from "react";
import { getFlagValue } from "./store";
import type { Flags } from "./types";

export function useFlag<K extends keyof Flags>(key: K): boolean {
  return useSyncExternalStore(
    () => () => {
      /* no-op unsubscribe */
    },
    () => getFlagValue(key),
    () => false
  );
}
