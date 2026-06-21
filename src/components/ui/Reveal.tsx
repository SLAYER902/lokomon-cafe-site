"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const reducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      initial={reducedMotion ? false : { opacity: 0, y: 32, clipPath: "inset(14% 0 0 0)" }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
