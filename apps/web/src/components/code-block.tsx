"use client";

import { Copy01Icon, Tick02Icon } from "@hugeicons/core-free-icons";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { Button } from "./ui/button";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const isSingleLine = !code.includes("\n");

  const [, copyToClipboard] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    copyToClipboard(code);
    setCopied(true);
  }

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const statusIcon = copied ? Tick02Icon : Copy01Icon;

  return (
    <pre className="group relative rounded-md border bg-accent">
      <code className="block whitespace-pre-wrap p-4 pr-12 font-mono text-neutral-700 text-sm">
        {code}
      </code>

      <Button
        aria-label={copied ? "Copied" : "Copy code"}
        className={[
          "absolute right-3 scale-95 opacity-0 transition-all duration-150",
          "group-hover:scale-100 group-hover:opacity-100",
          isSingleLine ? "-translate-y-1/2 top-1/2" : "top-3",
        ].join(" ")}
        onClick={handleCopy}
        size="icon-sm"
        variant="secondary"
      >
        <Icon icon={statusIcon} />
      </Button>
    </pre>
  );
}
