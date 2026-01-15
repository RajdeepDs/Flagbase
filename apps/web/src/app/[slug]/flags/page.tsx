import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { ScrollableContainer } from "@/components/layout/scrollable-container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FlagsPage() {
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
          <Link href={{ pathname: "/cli-setup" }} passHref>
            <Button variant={"outline"}>Create flag via CLI</Button>
          </Link>
        }
      />
      <ScrollableContainer>hello</ScrollableContainer>
    </div>
  );
}
