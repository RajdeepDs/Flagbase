/**
 * A Flag is a boolean feature toggle.
 * This is the MVP contract.
 */
export type FlagDefinition = {
  key: string;
  defaultValue: boolean;
  description?: string;
};
