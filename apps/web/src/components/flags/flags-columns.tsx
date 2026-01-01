"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { useState } from "react";
import { Switch } from "../ui/switch";

export interface Flag {
  id: string;
  name: string;
  key: string;
  status: Boolean;
  default: Boolean;
}

export const columns: ColumnDef<Flag>[] = [
  {
    accessorKey: "name",
    header: () => <div className="pl-2">Name</div>,
    cell: ({ row }) => (
      <Link className="pl-2" href={{ pathname: `/flags/${row.original.key}` }}>
        {row.getValue("name") as string}
      </Link>
    ),
  },
  {
    accessorKey: "default",
    header: "Default",
    cell: ({ row }) => {
      const isDefault = row.getValue("default") as boolean;
      return <span>{isDefault ? "True" : "False"}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const [currentStatus, setCurrentStatus] = useState(
        row.getValue("status") as boolean
      );
      return (
        <Switch
          checked={currentStatus}
          onCheckedChange={(value) => {
            setCurrentStatus(value);
            console.log(`Flag ID: ${row.original.id}, New Status: ${value}`);
          }}
        />
      );
    },
  },
];
