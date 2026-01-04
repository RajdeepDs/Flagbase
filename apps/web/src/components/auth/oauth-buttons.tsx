"use client";

import { Button } from "../ui/button";

export function OAuthButtons({ title }: { title: string }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6">
      <h1 className="font-medium text-xl">{title}</h1>
      <div className="flex w-full flex-col gap-3 *:h-12 *:font-normal *:text-base">
        <Button size={"lg"}>Continue with Google</Button>
        <Button size={"lg"} variant={"outline"}>
          Continue with GitHub
        </Button>
      </div>
    </div>
  );
}
