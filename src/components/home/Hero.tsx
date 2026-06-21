"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, Camera as InstagramIcon, MapPin, ShoppingBag, Star } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { StatChip } from "@/components/ui/StatChip";
import { business, links } from "@/data/site";
import { media } from "@/data/media";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[calc(100vh-116px)] overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 opacity-35">
        <div className="mural-field h-full w-full" />
      </div>
      <div className="wide-shell relative grid min-h-[calc(100vh-116px)] items-center gap-8 px-2 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="relative z-10">
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex rounded-full border border-paper/20 bg-paper/10 px-4 py-2 text-sm font-black uppercase text-amber backdrop-blur"
          >
            Nagpada's aesthetic fast food spot
          </motion.p>
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="display-type max-w-4xl text-[4.2rem] text-orange sm:text-[6rem] md:text-[8rem] lg:text-[9rem]"
          >
            Good Food.
            <span className="block text-paper">Good Vibe.</span>
            <span className="block text-amber">Lokoman.</span>
          </motion.h1>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-lg font-medium leading-8 text-paper/75"
          >
            A stylish, youthful cafe in Nagpada for affordable fast food, dine-in scenes,
            drive-through convenience, no-contact delivery, and a feed-ready atmosphere.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <ButtonLink href="/menu" variant="orange" icon={<ShoppingBag size={18} aria-hidden="true" />}>
              Explore Menu
            </ButtonLink>
            <ButtonLink href={links.directions} variant="ghost" icon={<MapPin size={18} aria-hidden="true" />}>
              Visit Us
            </ButtonLink>
            <ButtonLink href={links.order} variant="cream" icon={<ShoppingBag size={18} aria-hidden="true" />}>
              Order
            </ButtonLink>
            <ButtonLink href={links.instagram} variant="ghost" icon={<InstagramIcon size={18} aria-hidden="true" />}>
              Instagram
            </ButtonLink>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <StatChip inverse label="Rating" value={`${business.rating} / ${business.reviewCount} reviews`} icon={<Star size={17} fill="currentColor" aria-hidden="true" />} />
            <StatChip inverse label="Range" value={business.priceRange} />
            <StatChip inverse label="Service" value="Dine-in / Drive-through" />
            <StatChip inverse label="Timing" value={`Till ${business.closesAt}`} />
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.95, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          transition={{ duration: 0.8, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto min-h-[520px] w-full max-w-[620px] lg:min-h-[660px]"
        >
          <div className="absolute left-2 top-10 z-20 rounded-full bg-orange px-5 py-3 text-sm font-black uppercase text-ink shadow-glow">
            {business.priceRange}
          </div>
          <div className="absolute bottom-16 right-0 z-30 clip-ticket bg-cream px-6 py-4 text-ink shadow-poster">
            <p className="text-xs font-black uppercase text-orange">Pull up</p>
            <p className="display-type text-4xl">Nagpada</p>
          </div>
          <div className="absolute right-10 top-0 z-10 h-48 w-48 rounded-full border-[18px] border-orange/80" />
          <div className="absolute bottom-4 left-0 z-10 h-56 w-56 border-[18px] border-amber/75" />
          <div className="clip-poster absolute inset-x-6 top-16 z-20 h-[70%] overflow-hidden bg-orange shadow-poster">
            <Image
              src={media.heroBurger.src}
              alt={media.heroBurger.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-bold text-paper backdrop-blur">
              Temporary image
            </span>
          </div>
          <div className="absolute left-8 top-[58%] z-30 -rotate-3 bg-paper px-5 py-4 text-ink shadow-poster">
            <p className="display-type text-5xl text-midnight">4.6</p>
            <p className="text-sm font-black uppercase text-orange">45 reviews</p>
          </div>
          <div className="absolute right-3 top-[50%] z-30 rotate-3 rounded-[2rem] bg-midnight p-5 text-paper shadow-poster">
            <CalendarCheck size={24} aria-hidden="true" className="mb-3 text-amber" />
            <p className="max-w-32 text-sm font-black uppercase">Reserve by call</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
