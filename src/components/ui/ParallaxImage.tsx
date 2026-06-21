"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { MediaAsset } from "@/data/media";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  image: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function ParallaxImage({
  image,
  className,
  imageClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw"
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reducedMotion ? [0, 0] : [-22, 22]);

  return (
    <div ref={ref} className={cn("image-mask relative", className)}>
      <motion.div style={{ y }} className="absolute inset-[-8%]">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </motion.div>
      <span className="absolute bottom-3 left-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-paper backdrop-blur">
        Temporary image
      </span>
    </div>
  );
}
