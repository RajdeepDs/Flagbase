"use client";

import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

interface BreadcrumbProps {
  label: string;
  href?: Route;
  icon?: ReactNode;
}

interface PageHeaderProps {
  readonly leftContent?: ReactNode;
  readonly rightContent?: ReactNode;
  breadcrumb: BreadcrumbProps[];
}

export function PageHeader({
  leftContent,
  rightContent,
  breadcrumb = [],
}: PageHeaderProps) {
  const { isMobile, state } = useSidebar();

  return (
    <header className="flex min-h-12 items-center justify-between border-b px-4">
      <div className="flex h-full min-w-0 flex-1 items-center gap-3">
        {!!isMobile ||
          (state === "collapsed" && (
            <div className="flex shrink-0 items-center gap-1.5">
              <SidebarTrigger />
              <Separator className="min-h-4" orientation="vertical" />
            </div>
          ))}

        {/* Breadcrumbs */}
        <Breadcrumb className="min-w-0 shrink">
          <BreadcrumbList className="sm:gap-1.5">
            {breadcrumb.map((item, index) => (
              <div
                className="flex min-w-0 items-center gap-1.5"
                key={`${item.label}-${index}`}
              >
                <BreadcrumbItem className="min-w-0">
                  {item.href ? (
                    <Link
                      className="flex min-w-0 items-center gap-1.5 text-foreground"
                      href={item.href}
                    >
                      {!!item.icon && <span>{item.icon}</span>}
                      <span className="max-w-[10ch] overflow-hidden truncate text-ellipsis whitespace-nowrap sm:max-w-[32ch]">
                        {item.label}
                      </span>
                    </Link>
                  ) : (
                    <BreadcrumbPage className="flex min-w-0 items-center gap-1.5">
                      {!!item.icon && <span>{item.icon}</span>}
                      <span className="max-w-[10ch] overflow-hidden truncate text-ellipsis whitespace-nowrap sm:max-w-[32ch]">
                        {item.label}
                      </span>
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
                {index < breadcrumb.length - 1 && (
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        {leftContent}
      </div>

      <div className="flex items-center gap-2">{rightContent}</div>
    </header>
  );
}
