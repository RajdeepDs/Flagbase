export type FlagType = "boolean" | "number" | "string" | "enum";

export type FlagDefinition = {
  key: string;
  type: FlagType;
  defaultValue: boolean | string | number;
  enumValues?: readonly string[];
  description?: string;
};
