import { CodeBlock } from "@/components/code-block";
import { PageHeader } from "@/components/layout/page-header";
import { ScrollableContainer } from "@/components/layout/scrollable-container";
import { cliSetupSteps } from "@/config/cli-setup";

export default function CLISetupPage() {
  return (
    <div className="flex h-full flex-col">
      <PageHeader
        breadcrumb={[
          {
            label: "CLI Setup",
          },
        ]}
      />
      <ScrollableContainer>
        <div className="flex-1 space-y-8 p-4 sm:mx-auto sm:min-w-1/2 sm:border-x">
          <div>
            <h1 className="font-medium text-lg">
              Connect Flagbase to your project using the CLI.
            </h1>
            <p className="text-muted-foreground text-sm">
              Follow these steps once to start using flags in your app.
            </p>
            <p className="text-muted-foreground text-sm">
              You’ll be set up in ~2 minutes.
            </p>
          </div>
          {cliSetupSteps.map((group) => (
            <section className="space-y-4" key={group.groupTitle}>
              <h2 className="font-medium text-muted-foreground text-sm tracking-wider">
                {group.groupTitle}
              </h2>
              <ul className="space-y-8">
                {group.steps.map((step) => (
                  <li className="space-y-3" key={step.id}>
                    <div className="space-y-0.5">
                      <h3 className="font-medium">
                        {step.step}. {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </div>
                    {!!step.codeBlock && <CodeBlock code={step.codeBlock} />}
                    {!!step.hint && (
                      <p className="border-neutral-300 border-l-4 pl-2 text-foreground text-sm italic">
                        {step.hint}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </ScrollableContainer>
    </div>
  );
}
