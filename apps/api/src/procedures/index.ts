import { contracts } from "@flagbase/orpc";
import { implement, ORPCError } from "@orpc/server";
import type { Context } from "@/context";

/**
 * Base implementer with context type
 * This creates procedure builders that match the contract structure
 */
const implementer = implement(contracts).$context<Context>();

/**
 * Public procedure - accessible without authentication
 * Use this for public endpoints
 */
export const publicProcedure = implementer;

/**
 * Auth middleware - ensures user is authenticated
 * Throws UNAUTHORIZED error if no session exists
 */
const requireAuth = implementer.middleware(({ context, next }) => {
  if (!context.session?.user) {
    throw new ORPCError("UNAUTHORIZED");
  }
  return next({
    context: {
      session: context.session,
    },
  });
});

/**
 * Protected procedure - requires authentication
 * Use this for authenticated endpoints
 */
export const protectedProcedure = publicProcedure.use(requireAuth);
