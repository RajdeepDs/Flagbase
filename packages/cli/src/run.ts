import { Command } from "commander";
import { flagCreateCommand } from "./commands/flag-create";
import { initCommand } from "./commands/init";
import { listCommand } from "./commands/list";
import { loginCommand } from "./commands/login";
import { pullCommand } from "./commands/pull";

export function run() {
  const program = new Command();

  program.name("flagbase").description("Flagbase CLI").version("0.0.0");

  program.addCommand(loginCommand);
  program.addCommand(initCommand);
  program
    .command("flag")
    .description("Manage flags")
    .addCommand(flagCreateCommand);
  program.addCommand(listCommand);
  program.addCommand(pullCommand);

  program.parse();
}
