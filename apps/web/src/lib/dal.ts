import "server-only";

import { auth } from "@flagbase/auth";
import type { Route } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export async function verifySession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login" as Route);
  }

  return session;
}
