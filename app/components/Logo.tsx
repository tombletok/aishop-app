"use client";

import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ className, size = "md", showText = true }: LogoProps) {
  const sizes = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-3xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <Bot className={cn(
          sizes[size],
          "text-primary relative z-10"
        )} />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 blur-sm opacity-50 rounded-full" />
      </div>
      {showText && (
        <span className={cn(
          textSizes[size],
          "font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
        )}>
          TomBot<span className="text-primary">AI</span>
        </span>
      )}
    </div>
  );
}