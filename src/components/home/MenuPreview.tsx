"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/data/site";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";

export function MenuPreview() {
  const [category, setCategory] = useState<MenuCategory>("Burgers");
  const reducedMotion = useReducedMotion();
  const items = useMemo(() => menuItems.filter((item) => item.category === category), [category]);

  return (
    <section className="section-shell bg-paper">
      <div className="content-shell">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Menu preview"
              title="Scan the craving families."
              copy={`No fake prices here: item cards show only sourced names and the verified cafe range ${business.priceRange}.`}
            />
            <ButtonLink href="/menu" variant="blue" className="mt-8">
              Open Full Menu
            </ButtonLink>
          </div>

          <div className="min-w-0 overflow-hidden rounded-[2rem] bg-ink p-4 text-paper shadow-poster">
            <div className="mb-4 flex items-center gap-3 rounded-full bg-paper/10 px-4 py-3">
              <Search size={18} aria-hidden="true" className="text-orange" />
              <span className="text-sm font-black uppercase text-paper/70">Category switcher</span>
            </div>
            <div className="no-scrollbar mb-5 flex gap-2 overflow-x-auto pb-2">
              {menuCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-sm font-black uppercase transition-colors",
                    category === item
                      ? "border-orange bg-orange text-ink"
                      : "border-paper/15 bg-paper/10 text-paper hover:bg-paper/15"
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <AnimatePresence mode="popLayout">
              <motion.div
                key={category}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
                className="grid gap-3 md:grid-cols-2"
              >
                {items.length ? (
                  items.slice(0, 4).map((item) => (
                    <article key={item.id} className="group overflow-hidden rounded-[1.5rem] bg-paper text-ink">
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(max-width: 768px) 90vw, 28vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-paper backdrop-blur">
                          Temporary image
                        </span>
                      </div>
                      <div className="p-4">
                        <p className="mb-2 text-xs font-black uppercase text-orange">{item.source}</p>
                        <h3 className="display-type text-4xl">{item.name}</h3>
                        <p className="mt-2 text-sm font-bold leading-6 text-charcoal/70">{item.description}</p>
                        <p className="mt-4 rounded-full bg-cream px-3 py-2 text-xs font-black uppercase">
                          Range shown by listing: {business.priceRange}
                        </p>
                      </div>
                    </article>
                  ))
                ) : (
                  <div className="rounded-[1.5rem] bg-paper p-6 text-ink md:col-span-2">
                    <p className="display-type text-4xl">Official item details pending.</p>
                    <p className="mt-3 font-bold text-charcoal/70">
                      This category is part of the brand direction, but no item names or prices have
                      been supplied yet.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
