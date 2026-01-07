"use client";

import type { Route } from "next";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

export function SetupHeader() {
  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/login" as Route);
        },
      },
    });
  }
  return (
    <header className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
      <div className="flex select-none flex-col text-sm">
        <Label className="font-normal text-ui-gray-900">Logged in as:</Label>
        {/* TODO: fetch the user data and render user email */}
        <span className="text-foreground">rajdeepds626@gmail.com</span>
      </div>
      <Button
        className="text-foreground"
        onClick={handleLogout}
        size={"sm"}
        variant={"ghost"}
      >
        Log out
      </Button>
    </header>
  );
}
