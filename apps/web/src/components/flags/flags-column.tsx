"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export interface Flag {
  id: string;
  name: string;
  key: string;
  status: Boolean;
}

export const columns: ColumnDef<Flag>[] = [
  {
    accessorKey: "name",
    header: () => <div className="pl-2">Name</div>,
    cell: ({ row }) => (
      <Link className="pl-2" href={{ pathname: `flags/${row.original.key}` }}>
        {row.getValue("name") as string}
      </Link>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const isDefault = row.getValue("status") as boolean;
      return <span>{isDefault ? "Enabled" : "Disabled"}</span>;
    },
  },
];
