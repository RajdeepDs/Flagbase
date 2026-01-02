export interface CLISetupStep {
  id: string;
  step: number;
  title: string;
  description: string;
  codeBlock: string;
  hint?: string;
}

interface CLISetupSteps {
  groupTitle: string;
  steps: CLISetupStep[];
}

export const cliSetupSteps: CLISetupSteps[] = [
  {
    groupTitle: "SETUP",
    steps: [
      {
        id: "install",
        step: 1,
        title: "Install the CLI",
        description: "Install the Flagbase CLI in your project.",
        codeBlock: `# npm
npm install --save-dev @flagbase/cli

# pnpm
pnpm add -D @flagbase/cli`,
      },
      {
        id: "login",
        step: 2,
        title: "Authenticate",
        description: "Authenticate the CLI with your Flagbase account.",
        codeBlock: "flagbase login",
      },
      {
        id: "init",
        step: 3,
        title: "Initialize your project",
        description:
          "Link this project to your Flagbase app and generate configuration.",
        codeBlock: "flagbase init",
      },
    ],
  },
  {
    groupTitle: "USAGE",
    steps: [
      {
        id: "create-flag",
        step: 4,
        title: "Create your first flag",
        description:
          "Flags are created using the CLI to ensure type safety and version control.",
        codeBlock: "flagbase flag create new-dashboard",
        hint: "The flag will appear instantly in the dashboard after creation.",
      },
      {
        id: "use-flag",
        step: 5,
        title: "You’re all set.",
        description: "Flags are fully typed and available in your application.",
        codeBlock: `import { getFlag } from "@flagbase/react-sdk";

if (getFlag("new-dashboard")) {
  // Enable new dashboard
}`,
      },
    ],
  },
];
