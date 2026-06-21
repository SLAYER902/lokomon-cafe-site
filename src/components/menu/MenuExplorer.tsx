"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { business, links } from "@/data/site";
import { menuCategories, menuItems, type MenuCategory } from "@/data/menu";
import { cn } from "@/lib/utils";

type ActiveCategory = "All" | MenuCategory;

export function MenuExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ActiveCategory>("All");
  const reducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch =
        !search ||
        [item.name, item.category, item.description, item.source, ...item.tags]
          .join(" ")
          .toLowerCase()
          .includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  return (
    <section className="section-shell bg-paper">
      <div className="content-shell">
        <div className="sticky top-[116px] z-30 mb-8 rounded-[2rem] border border-ink/10 bg-paper/[0.88] p-3 shadow-glow backdrop-blur-xl">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
            <label className="flex min-h-14 items-center gap-3 rounded-full bg-cream px-5 text-ink">
              <Search size={20} aria-hidden="true" className="text-orange" />
              <span className="sr-only">Search menu</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sourced items, categories, tags"
                className="min-w-0 flex-1 bg-transparent font-bold outline-none placeholder:text-ink/40"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                  className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper"
                >
                  <X size={17} aria-hidden="true" />
                </button>
              ) : null}
            </label>
            <div className="flex items-center gap-2 rounded-full bg-ink px-4 py-3 text-paper">
              <SlidersHorizontal size={18} aria-hidden="true" className="text-orange" />
              <span className="text-xs font-black uppercase">{filtered.length} visible</span>
            </div>
          </div>

          <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
            {(["All", ...menuCategories] as ActiveCategory[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-black uppercase transition-all",
                  category === item
                    ? "border-orange bg-orange text-ink shadow-glow"
                    : "border-ink/10 bg-white text-ink hover:border-orange/60"
                )}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_0.46fr]">
          <div className="rounded-[2rem] bg-ink p-6 text-paper shadow-poster">
            <p className="text-sm font-black uppercase text-amber">Menu truth rule</p>
            <p className="mt-3 max-w-3xl text-lg font-bold leading-8 text-paper/75">
              This catalogue keeps sourced item/category names visible, but does not invent
              item-level prices. The verified public range is {business.priceRange}.
            </p>
          </div>
          <div className="rounded-[2rem] bg-orange p-6 text-ink shadow-glow">
            <p className="display-type text-5xl">Order direct</p>
            <p className="mt-2 font-bold">Use the verified phone number for current menu details.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <ButtonLink href={links.call} variant="ink">
                Call
              </ButtonLink>
              <ButtonLink href={links.order} variant="cream">
                Order
              </ButtonLink>
            </div>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item, index) => (
              <motion.article
                layout
                key={item.id}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.24, delay: Math.min(index * 0.02, 0.12) }}
                className="group overflow-hidden rounded-[2rem] bg-cream shadow-glow"
              >
                <div className="relative h-60 overflow-hidden bg-ink">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-paper backdrop-blur">
                    Temporary image
                  </span>
                  <span className="absolute bottom-4 left-4 rounded-full bg-orange px-3 py-1 text-xs font-black uppercase text-ink">
                    {item.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase text-orange">{item.source}</p>
                  <h2 className="display-type mt-2 text-5xl text-ink">{item.name}</h2>
                  <p className="mt-3 min-h-20 text-sm font-bold leading-6 text-charcoal/70">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-paper px-3 py-1 text-xs font-black uppercase text-ink">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 rounded-2xl bg-paper p-4">
                    <p className="text-xs font-black uppercase text-orange">Price status</p>
                    <p className="font-black text-ink">No item price supplied · Listing range {business.priceRange}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {!filtered.length ? (
          <div className="mt-8 rounded-[2rem] bg-ink p-8 text-paper">
            <p className="display-type text-5xl text-orange">No sourced match.</p>
            <p className="mt-3 font-bold text-paper/70">
              Try another category or call Lokoman for the current official menu.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
