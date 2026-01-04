import Link from "next/link";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { FlagbaseIcon } from "@/components/icons";

export default function SignUpPage() {
  return (
    <div className="mx-auto flex h-full w-xs flex-col items-center justify-center gap-9">
      <div className="flex w-full flex-col items-center space-y-8">
        <FlagbaseIcon />
        <OAuthButtons title="Welcome to Flagbase" />
      </div>
      <p className="font-medium text-muted-foreground text-sm">
        Already have an account?{" "}
        <Link
          className="text-foreground hover:underline"
          href={{ pathname: "/login" }}
        >
          Log in
        </Link>
      </p>
    </div>
  );
}
