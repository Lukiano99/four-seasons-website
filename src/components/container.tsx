"use client";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1280px] px-4 md:min-w-[1280px] md:px-0",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
