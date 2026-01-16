import Link from "next/link";
import { columns, type Flag } from "@/components/flags/flags-column";
import { ListTable } from "@/components/layout/list-table";
import { PageHeader } from "@/components/layout/page-header";
import { ScrollableContainer } from "@/components/layout/scrollable-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

async function getData(): Promise<Flag[]> {
  return [
    {
      id: "728ed52f",
      name: "New Feature Flag",
      key: "new-feature-flag",
      status: false,
    },
    {
      id: "cmjinxj5t00056hkmqukxkd8c",
      name: "Dashboard Flag",
      key: "dashboard-flag",
      status: true,
    },
  ];
}

export default async function FlagsPage() {
  const data = await getData();
  return (
    <div>
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
          <Link href={{ pathname: "cli-setup" }} passHref>
            <Button variant={"outline"}>Create flag via CLI</Button>
          </Link>
        }
      />
      <ScrollableContainer>
        <ListTable columns={columns} data={data} />
      </ScrollableContainer>
    </div>
  );
}
