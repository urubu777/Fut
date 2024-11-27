import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("max-w-[90%] lg:max-w-6xl mx-auto", className)}>
      {children}
    </div>
  );
};
