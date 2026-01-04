import Link from "next/link";
import { OAuthButtons } from "@/components/auth/oauth-buttons";
import { FlagbaseIcon } from "@/components/icons";

export default function LoginPage() {
  return (
    <div className="mx-auto flex h-full w-xs flex-col items-center justify-center gap-9">
      <div className="flex w-full flex-col items-center space-y-8">
        <FlagbaseIcon />
        <OAuthButtons title="Log in to Flagbase" />
      </div>
      <p className="text-muted-foreground text-sm">
        Don't have an account?{" "}
        <Link className="text-foreground" href={{ pathname: "/sign-up" }}>
          Sign up
        </Link>
      </p>
    </div>
  );
}
