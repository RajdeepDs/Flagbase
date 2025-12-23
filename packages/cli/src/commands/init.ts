import { Command } from "commander";
import { apiCall } from "../api/client";
import { writeConfig } from "../config/write";

export const initCommand = new Command("init")
  .description("Initialize Flagbase in this repo")
  .action(async () => {
    const app = await apiCall<{ id: string }>(
      "app.create",
      {
        name: "my-app",
      },
      "mutation"
    );

    writeConfig(app.id);

    console.log("Flagbase initialized with app:", app.id);
  });
