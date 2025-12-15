import type { FlagDefinition } from "./types";

export function validateFlagDefinition(flag: FlagDefinition): void {
  switch (flag.type) {
    case "boolean": {
      if (typeof flag.defaultValue !== "boolean") {
        throw new Error(`Default value for flag "${flag.key}" must be boolean`);
      }
      break;
    }

    case "string": {
      if (typeof flag.defaultValue !== "string") {
        throw new Error(`Default value for flag "${flag.key}" must be string`);
      }
      break;
    }

    case "number": {
      if (typeof flag.defaultValue !== "number") {
        throw new Error(`Default value for flag "${flag.key}" must be number`);
      }
      break;
    }

    case "enum": {
      if (!flag.enumValues || flag.enumValues.length === 0) {
        throw new Error(`Enum flag "${flag.key}" must define enumValues`);
      }

      if (typeof flag.defaultValue !== "string") {
        throw new Error(
          `Default value for enum flag "${flag.key}" must be a string`
        );
      }

      if (!flag.enumValues.includes(flag.defaultValue)) {
        throw new Error(
          `Default value "${flag.defaultValue}" is not in enumValues for flag "${flag.key}"`
        );
      }

      break;
    }

    default:
      throw new Error("Unknown flag type");
  }
}
