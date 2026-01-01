import Link from "next/link";
import { FlagTable } from "@/components/flags/flag-table";
import { columns, type Flag } from "@/components/flags/flags-columns";
import { PageHeader } from "@/components/layout/page-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Flag[]> {
  return [
    {
      id: "728ed52f",
      name: "New Feature Flag",
      key: "new-feature-flag",
      status: false, // the controlable switch for the flag both values should be same
      default: false, // the current value of flag -- readonly
    },
    {
      id: "cmjinxj5t00056hkmqukxkd8c",
      name: "Dashboard Flag",
      key: "dashboard-flag",
      status: true,
      default: true,
    },
  ];
}

export default async function FlagsPage() {
  const data = await getData();
  return (
    <div className="flex h-full flex-col">
      <PageHeader
        breadcrumb={[
          {
            label: "Flags",
          },
        ]}
        leftContent={
          <Badge className="flex items-center gap-2 py-3" variant={"outline"}>
            <div className="size-1.5 rounded-full bg-green-600" />
            <span className="text-sm">Production</span>
          </Badge>
        }
        rightContent={
          <Link href={{ pathname: "/cli-setup" }} passHref>
            <Button variant={"outline"}>Create flag via CLI</Button>
          </Link>
        }
      />
      <div className="flex-1">
        <FlagTable columns={columns} data={data} />
      </div>
    </div>
  );
}
