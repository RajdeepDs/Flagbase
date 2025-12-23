import type { FlagDefinition } from "@flagbase/core";
import { Command } from "commander";
import { apiCall } from "../api/client";
import { readConfig } from "../config/read";
import { generateFlagsDts } from "../generate/flags-dts";

export const pullCommand = new Command("pull")
  .description("Sync flags and generate types")
  .action(async () => {
    const { appId } = readConfig();

    const flags: FlagDefinition[] = await apiCall(
      "flag.list",
      { appId },
      "query"
    );

    generateFlagsDts(flags);

    console.log("Flags synced. Types generated in gen/flags.d.ts");
  });
