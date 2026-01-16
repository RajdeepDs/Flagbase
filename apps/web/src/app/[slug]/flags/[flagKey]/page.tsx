import type { Route } from "next";
import type { Flag } from "@/components/flags/flags-column";
import { PageHeader } from "@/components/layout/page-header";
import { ScrollableContainer } from "@/components/layout/scrollable-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";

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

export default async function FlagPage({
  params,
}: {
  params: Promise<{ flagKey: string; slug: string }>;
}) {
  const { flagKey, slug } = await params;
  const data = await getData();

  const flag = data.find((f) => f.key === flagKey);

  if (!flag) {
    return <div className="p-4">Flag not found</div>;
  }

  return (
    <div className="flex h-full flex-col">
      <PageHeader
        breadcrumb={[
          {
            label: "Flags",
            href: `/${slug}/flags` as Route,
          },
          {
            label: flag.name,
          },
        ]}
        leftContent={
          <Badge className="flex items-center gap-2 py-3" variant={"outline"}>
            <div className="size-1.5 rounded-full bg-green-600" />
            <span className="text-sm">Production</span>
          </Badge>
        }
      />
      <ScrollableContainer>
        <div className="flex-1 space-y-8 p-4 sm:mx-auto sm:min-w-1/2 sm:border-x">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-muted-foreground text-xs uppercase">
              Status
            </h1>
            <Item variant={"secondary"}>
              <ItemContent className="gap-0">
                <ItemTitle>Disabled in Production</ItemTitle>
                <ItemDescription>
                  Users will not see this feature.
                </ItemDescription>
              </ItemContent>
              <ItemActions className="flex-col items-end">
                <Toggle variant={"outline"}>Enable for Production</Toggle>
              </ItemActions>
              <ItemFooter>
                <ItemDescription>Last changed · 2 hours ago</ItemDescription>
              </ItemFooter>
            </Item>
          </div>
          <Separator />
          <div className="flex flex-col gap-1">
            <h1 className="font-medium text-muted-foreground text-xs uppercase">
              Danger zone
            </h1>
            <p className="text-muted-foreground text-sm">
              Delete this flag permanently. This action cannot be undone.
            </p>
            <Button className={"mt-3 w-fit"} variant={"destructive"}>
              Delete flag
            </Button>
          </div>
        </div>
      </ScrollableContainer>
    </div>
  );
}
