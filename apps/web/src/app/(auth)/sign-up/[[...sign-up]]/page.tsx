import type { Metadata } from "next";
import { Suspense } from "react";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { PreserveCallbackLink } from "@/components/auth/preserve-callback-link";
import { FlagbaseIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Welcome to Flagbase",
};

export default function SignUpPage() {
  return (
    <div className="mx-auto flex h-full w-xs flex-col items-center justify-center gap-9">
      <div className="flex w-full flex-col items-center space-y-8">
        <FlagbaseIcon />
        <OAuthButtons title="Welcome to Flagbase" />
      </div>
      <p className="font-medium text-muted-foreground text-sm">
        Already have an account?{" "}
        <Button
          className="px-0"
          render={
            <Suspense fallback={<span>Log in</span>}>
              <PreserveCallbackLink
                className="text-foreground underline-offset-1 hover:underline"
                href={{ pathname: "/login" }}
              >
                Log in
              </PreserveCallbackLink>
            </Suspense>
          }
          variant={"link"}
        />
      </p>
    </div>
  );
}
