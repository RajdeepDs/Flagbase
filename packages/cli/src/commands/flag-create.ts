import { flagDefinitionSchema } from "@flagbase/core";
import { Command } from "commander";
import { apiCall } from "../api/client";
import { readConfig } from "../config/read";
import { validateWithSchema } from "../validation/validate";

export const flagCreateCommand = new Command("create")
  .argument("<key>")
  .argument("<value>")
  .action(async (key, value) => {
    const { appId } = readConfig();
    let defaultValue: boolean;

    if (value === "true") {
      defaultValue = true;
    } else if (value === "false") {
      defaultValue = false;
    } else {
      throw new Error("Value must be either true or false");
    }

    const input = {
      key,
      value: defaultValue,
    };

    validateWithSchema(flagDefinitionSchema, input);

    await apiCall("flag.create", { appId, ...input }, "mutation");

    console.log(`Flag "${key}" created`);
  });
