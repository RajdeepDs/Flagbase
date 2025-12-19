import { Command } from "commander";
import { apiCall } from "../api/client";
import { readConfig } from "../config/read";

export const listCommand = new Command("list")
  .description("List flags")
  .action(async () => {
    const { appId } = readConfig();

    const flags = await apiCall<any[]>("flag.list", { appId }, "query");

    for (const flag of flags) {
      console.log(
        `${flag.key.padEnd(20)} ${flag.type.padEnd(8)} default=${flag.defaultValue}`
      );
    }
  });
