"use client";

import type { ColumnDef } from "@tanstack/react-table";

export interface Environment {
  id: string;
  name: "Production" | "Staging";
  key: "production" | "staging";
  description: string;
  status: "active" | "coming soon";
}

export const columns: ColumnDef<Environment>[] = [
  {
    accessorKey: "name",
    header: () => <div className="pl-2">Name</div>,
    cell: ({ row }) => <p className="pl-2">{row.getValue("name") as string}</p>,
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <span
          className={`rounded-full px-2 py-1 font-medium text-sm ${
            status === "active"
              ? "bg-green-100 text-green-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {status === "active" ? "Active" : "Coming Soon"}
        </span>
      );
    },
  },
];
