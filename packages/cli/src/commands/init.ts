import { Command } from "commander";
import { readToken } from "../auth/token-store";
import { writeConfig } from "../config/write";

export const initCommand = new Command("init")
  .description("Initialize Flagbase in this repo")
  .action(() => {
    const token = readToken();

    if (!token) {
      console.error("Please run `flagbase login` first");
      process.exit(1);
    }

    // MVP: local-only app id
    const appId = "local-app";

    writeConfig(appId);

    console.log("Flagbase initialized");
  });
