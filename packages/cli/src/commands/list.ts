import type { FlagDefinition } from "@flagbase/core";
import { Command } from "commander";
import { apiCall } from "../api/client";
import { readConfig } from "../config/read";

export const listCommand = new Command("list")
  .description("List flags")
  .action(async () => {
    const { appId } = readConfig();

    const flags: FlagDefinition[] = await apiCall(
      "flag.list",
      { appId },
      "query"
    );

    for (const flag of flags) {
      console.log(`${flag.key.padEnd(20)} value=${flag.value}`);
    }
  });
