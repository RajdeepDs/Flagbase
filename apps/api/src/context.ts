import { auth } from "@flagbase/auth";
import type { Context as HonoContext } from "hono";

export interface CreateContextOptions {
  context: HonoContext;
}

export async function createContext({ context }: CreateContextOptions) {
  const session = await auth.api.getSession({
    headers: context.req.raw.headers,
  });
  return {
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;

/**
 * Authenticated context type with guaranteed session
 * Use this type after requireAuth middleware runs
 */
export type AuthenticatedContext = Context & {
  session: NonNullable<Context["session"]>;
};
