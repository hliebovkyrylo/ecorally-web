import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-accent placeholder:text-muted-foreground border-secondary-foreground border hover:bg-secondary-foreground transition-colors outline-0 px-4 h-12 rounded-xl bg-secondary text-accent dark:bg-input/30 flex w-full min-w-0 text-base shadow-xs file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...props}
    />
  );
}

export { Input };
