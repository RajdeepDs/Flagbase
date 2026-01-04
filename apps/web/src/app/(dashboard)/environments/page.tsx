import {
  columns,
  type Environment,
} from "@/components/environments/environments-columns";
import { ListTable } from "@/components/layout/list-table";
import { PageHeader } from "@/components/layout/page-header";
import { ScrollableContainer } from "@/components/layout/scrollable-container";

async function getData(): Promise<Environment[]> {
  return [
    {
      id: "728ed52f",
      name: "Production",
      key: "production",
      description:
        "Production is the default environment used by your application.",
      status: "active",
    },
    {
      id: "cmjinxj5t00056hkmqukxkd8c",
      name: "Staging",
      key: "staging",
      description:
        "Staging lets you test flags before releasing them to production.",
      status: "coming soon",
    },
  ];
}

export default async function EnvironmentsPage() {
  const data = await getData();

  return (
    <div className="flex h-full flex-col">
      <PageHeader
        breadcrumb={[
          {
            label: "Environments",
          },
        ]}
      />
      <ScrollableContainer>
        <ListTable columns={columns} data={data} />
      </ScrollableContainer>
    </div>
  );
}
