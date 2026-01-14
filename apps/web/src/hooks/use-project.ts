"use client";

import { useQuery } from "@tanstack/react-query";
import { orpc } from "@/utils/orpc";

export function useGetAllProjectsQuery() {
  return useQuery(orpc.project.getAllProjects.queryOptions());
}
