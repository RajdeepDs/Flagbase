"use client";

import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";

export function useUserQuery() {
  return useQuery(orpc.user.me.queryOptions());
}
