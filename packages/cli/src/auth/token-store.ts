import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const DIR = path.join(os.homedir(), ".flagbase");
const FILE = path.join(DIR, "auth.json");

export function saveToken(token: string) {
  fs.mkdirSync(DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify({ token }, null, 2));
}

export function readToken(): string | null {
  if (!fs.existsSync(FILE)) {
    return null;
  }
  const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
  return data.token ?? null;
}
