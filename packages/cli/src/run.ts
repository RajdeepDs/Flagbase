import { Command } from "commander";
import { initCommand } from "./commands/init";
import { loginCommand } from "./commands/login";

export function run() {
  const program = new Command();

  program.name("flagbase").description("Flagbase CLI").version("0.0.0");

  program.addCommand(loginCommand);
  program.addCommand(initCommand);

  program.parse();
}
