"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className }: MarqueeProps) {
  const reducedMotion = useReducedMotion();
  const content = [...items, ...items, ...items];

  return (
    <div className={cn("no-scrollbar relative h-9 max-w-full overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        className="absolute left-0 top-1/2 inline-flex min-w-max -translate-y-1/2 items-center"
        animate={reducedMotion ? undefined : { x: ["0%", "-33.333%"] }}
        transition={reducedMotion ? undefined : { repeat: Infinity, duration: 24, ease: "linear" }}
      >
        {content.map((item, index) => (
          <span key={`${item}-${index}`} className="mx-4 inline-flex items-center gap-3 text-sm font-black uppercase">
            <span className="h-2 w-2 rounded-full bg-orange" aria-hidden="true" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
