"use client";

import { env } from "@flagbase/env/web";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { Button } from "../ui/button";

export function OAuthButtons({ title }: { title: string }) {
  const [loading, setLoading] = useState(false);

  async function handleoauth(provider: string) {
    await signIn.social(
      {
        provider,
        callbackURL: env.NEXT_PUBLIC_APP_URL,
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onResponse: () => {
          setLoading(false);
        },
      }
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <h1 className="font-medium text-xl">{title}</h1>
      <div className="flex w-full flex-col gap-3 *:h-11">
        <Button
          disabled={loading}
          onClick={() => handleoauth("google")}
          size={"lg"}
        >
          Continue with Google
        </Button>
        <Button
          disabled={loading}
          onClick={() => handleoauth("github")}
          size={"lg"}
          variant={"outline"}
        >
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
}
