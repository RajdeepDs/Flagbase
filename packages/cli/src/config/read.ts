import fs from "node:fs";

export function readConfig(): { appId: string } {
  if (!fs.existsSync("flagbase.config.json")) {
    throw new Error("flagbase.config.json not found. Run `flagbase init`.");
  }

  const json = JSON.parse(fs.readFileSync("flagbase.config.json", "utf8"));
  if (!json.appId) {
    throw new Error("Invalid flagbase.config.json");
  }

  return { appId: json.appId };
}
