"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Camera as InstagramIcon, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { business, links, navItems } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/[0.86] backdrop-blur-xl">
      <AnnouncementBar />
      <nav className="content-shell flex h-20 items-center justify-between gap-4" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Lokoman Cafe home">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-xl font-black text-orange shadow-glow transition-transform group-hover:-rotate-6">
            LK
          </span>
          <span className="leading-none">
            <span className="display-type block text-2xl text-ink">Lokoman</span>
            <span className="devanagari block text-xs font-bold text-orange">{business.devanagariName}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-black uppercase transition-colors hover:bg-cream",
                pathname === item.href ? "bg-ink text-paper" : "text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ButtonLink href={links.order} variant="orange" icon={<ShoppingBag size={18} aria-hidden="true" />}>
            Order
          </ButtonLink>
          <ButtonLink href={links.reserve} variant="cream" icon={<CalendarCheck size={18} aria-hidden="true" />}>
            Reserve
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-12 w-12 place-items-center rounded-full bg-ink text-paper lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] bg-ink/70 backdrop-blur-sm lg:hidden"
            initial={reducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ml-auto flex h-full w-[min(88vw,420px)] flex-col bg-cream p-5 text-ink shadow-poster"
              initial={reducedMotion ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="display-type text-4xl">Lokoman</p>
                  <p className="text-sm font-bold text-orange">{business.shortAddress}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 place-items-center rounded-full bg-ink text-paper"
                  aria-label="Close menu"
                >
                  <X size={22} aria-hidden="true" />
                </button>
              </div>

              <div className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "clip-ticket flex items-center justify-between bg-paper px-5 py-4 text-xl font-black uppercase",
                      pathname === item.href && "bg-orange text-ink"
                    )}
                  >
                    {item.label}
                    <span aria-hidden="true">/</span>
                  </Link>
                ))}
              </div>

              <div className="mt-auto grid gap-3">
                <ButtonLink href={links.call} variant="ink" icon={<Phone size={18} aria-hidden="true" />}>
                  Call
                </ButtonLink>
                <ButtonLink href={links.instagram} variant="blue" icon={<InstagramIcon size={18} aria-hidden="true" />}>
                  Instagram
                </ButtonLink>
                <ButtonLink href={links.order} variant="orange" icon={<ShoppingBag size={18} aria-hidden="true" />}>
                  Order
                </ButtonLink>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
