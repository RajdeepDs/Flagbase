import { env } from "@flagbase/env/web";
import type { ContractsClient } from "@flagbase/orpc";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import { createTanstackQueryUtils } from "@orpc/tanstack-query";

export const link = new RPCLink({
  url: `${env.NEXT_PUBLIC_SERVER_URL}/rpc`,
  fetch(url, options) {
    return fetch(url, {
      ...options,
      credentials: "include",
    });
  },
  headers: async () => {
    if (typeof window !== "undefined") {
      return {};
    }

    const { headers } = await import("next/headers");
    return Object.fromEntries(await headers());
  },
});

export const client: ContractsClient = createORPCClient(link);

export const orpc = createTanstackQueryUtils(client);
