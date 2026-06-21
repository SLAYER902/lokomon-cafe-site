"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useMemo, useState } from "react";
import { galleryFilters, galleryItems, type GalleryFilter, type GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

const spans = {
  small: "min-h-[280px]",
  wide: "min-h-[320px] md:col-span-2",
  tall: "min-h-[460px] md:row-span-2",
  poster: "min-h-[340px]"
};

export function GalleryExperience() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [active, setActive] = useState<GalleryItem | null>(null);
  const reducedMotion = useReducedMotion();

  const visible = useMemo(
    () => galleryItems.filter((item) => filter === "All" || item.filter === filter),
    [filter]
  );

  return (
    <section className="section-shell bg-paper">
      <div className="content-shell">
        <div className="no-scrollbar sticky top-[116px] z-30 mb-8 flex gap-2 overflow-x-auto rounded-full border border-ink/10 bg-paper/[0.88] p-2 shadow-glow backdrop-blur-xl">
          {galleryFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-black uppercase transition-colors",
                filter === item ? "bg-ink text-paper" : "bg-white text-ink hover:bg-cream"
              )}
            >
              {item}
            </button>
          ))}
        </div>

        <motion.div layout className="grid auto-rows-[minmax(240px,auto)] gap-5 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((item, index) => (
              <motion.button
                layout
                key={item.id}
                type="button"
                onClick={() => setActive(item)}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, delay: Math.min(index * 0.025, 0.12) }}
                className={cn(
                  "group relative overflow-hidden rounded-[2rem] bg-ink p-0 text-left text-paper shadow-poster",
                  spans[item.span]
                )}
              >
                {item.image ? (
                  <>
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      loading={index < 2 ? "eager" : "lazy"}
                      fetchPriority={index < 2 ? "high" : "auto"}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  </>
                ) : (
                  <div className="mural-field absolute inset-0 bg-orange" />
                )}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="mb-2 inline-flex rounded-full bg-orange px-3 py-1 text-xs font-black uppercase text-ink">
                    {item.filter}
                  </p>
                  <h2 className="display-type text-4xl">{item.copy ?? item.title}</h2>
                  <p className="mt-2 text-xs font-black uppercase text-paper/70">Temporary gallery asset</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-ink/[0.86] p-4 backdrop-blur"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={reducedMotion ? false : { y: 24, scale: 0.96 }}
              animate={{ y: 0, scale: 1 }}
              exit={reducedMotion ? undefined : { y: 24, scale: 0.96 }}
              className="relative h-[min(78vh,720px)] w-[min(92vw,980px)] overflow-hidden rounded-[2rem] bg-paper shadow-poster"
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-orange text-ink"
                aria-label="Close gallery preview"
              >
                <X size={21} aria-hidden="true" />
              </button>
              {active.image ? (
                <Image src={active.image.src} alt={active.image.alt} fill sizes="92vw" className="object-cover" />
              ) : (
                <div className="mural-field grid h-full place-items-center bg-orange p-8 text-center text-ink">
                  <p className="display-type text-7xl">{active.copy}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
