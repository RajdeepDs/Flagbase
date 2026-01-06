"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { ComponentProps } from "react";

interface PreserveCallbackLinkProps extends ComponentProps<typeof Link> {
  href: { pathname: string };
  children: React.ReactNode;
}

/**
 * Link component that preserves callbackUrl when navigating between auth pages
 */
export function PreserveCallbackLink({
  href,
  children,
  ...props
}: PreserveCallbackLinkProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const { pathname: link } = href;

  const finalHref = callbackUrl
    ? `${link}?callbackUrl=${encodeURIComponent(callbackUrl)}`
    : link;

  return (
    <Link href={{ pathname: finalHref }} {...props}>
      {children}
    </Link>
  );
}
