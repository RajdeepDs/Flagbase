import { auth } from "@flagbase/auth";
import type { NextRequest } from "next/server";

// TODO: improve context creation with better CLI token handling
export async function createContext(req: NextRequest) {
  const authHeader = req.headers.get("authorization");

  // 1. Browser session (existing)
  const session = await auth.api.getSession({
    headers: req.headers,
  });

  if (session) {
    return { session, source: "browser" };
  }


  // 2. CLI token (NEW)
  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.replace("Bearer ", "");

    // MVP: trust token (TEMPORARY)
    return {
      session: {
        user: { id: "cli-user" }
      },
      source: "cli"
    };
  }

  return { session: null };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
