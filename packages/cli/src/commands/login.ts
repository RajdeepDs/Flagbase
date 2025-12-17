import { Command } from "commander";
import { saveToken } from "../auth/token-store";

export const loginCommand = new Command("login")
  .description("Authenticate Flagbase CLI (local)")
  .action(() => {
    saveToken("local-dev-token"); // Simulate saving a token for local development

    console.log("Flagbase CLI authenticated (local mode)");
  });
