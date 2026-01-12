import "server-only";
import type { Route } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { authClient } from "./auth-client";

export async function verifySession() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
      throw: true,
    },
  });

  if (!session?.session.userId) {
    redirect("/login" as Route);
  }

  return { isAuth: true, userId: session.session.userId };
}
