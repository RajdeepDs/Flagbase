import { Command } from "commander";
import { apiCall } from "../api/client";
import { readConfig } from "../config/read";

export const flagCreateCommand = new Command("create")
  .argument("<key>")
  .requiredOption("--type <type>")
  .requiredOption("--default <value>")
  .option("--values <values>")
  .option("--description <description>")
  .action(async (key, options) => {
    const { appId } = readConfig();

    const input: any = {
      appId,
      key,
      type: options.type,
      defaultValue: (() => {
        if (options.type === "boolean") {
          return options.default === "true";
        }
        if (options.type === "number") {
          return Number(options.default);
        }
        return options.default;
      })(),
      description: options.description,
    };

    if (options.type === "enum") {
      input.enumValues = options.values?.split(",");
    }

    await apiCall("flag.create", input, "mutation");

    console.log(`Flag "${key}" created`);
  });
