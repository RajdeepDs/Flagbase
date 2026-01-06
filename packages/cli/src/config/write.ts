import fs from "node:fs";

export function writeConfig(appId: string) {
  const config = {
    $schema: "https://unpkg.com/@flagbase/cli@latest/schema.json",
    appId,
  };

  fs.writeFileSync("flagbase.config.json", JSON.stringify(config, null, 2));
}
