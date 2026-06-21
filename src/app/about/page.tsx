import type { Metadata } from "next";
import { MapPin, Sparkles, Utensils, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageIntro } from "@/components/shared/PageIntro";
import { business, links } from "@/data/site";
import { media } from "@/data/media";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Lokoman Cafe in Nagpada: affordable fast food, youthful ambience, dine-in, drive-through, and no-contact delivery."
};

const pillars = [
  {
    title: "Aesthetic fast food",
    copy: "The brand direction is bold, social-first, and built around food that photographs well.",
    icon: Utensils
  },
  {
    title: "Nagpada energy",
    copy: "The location anchors the design language in a youthful Mumbai cafe setting.",
    icon: MapPin
  },
  {
    title: "Mural mood",
    copy: "Graphic lines, warm interiors, and layered sections echo the brief's art-wall cues.",
    icon: Sparkles
  },
  {
    title: "Quick access",
    copy: "Dine-in, drive-through, and no-contact delivery are all verified service options.",
    icon: Zap
  }
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="Built for hangouts, quick bites, and good photos."
        copy="This page keeps the story editorial without inventing founding history, owners, awards, or unsupported claims."
        cta={{ href: links.directions, label: "Get Directions" }}
      />

      <section className="section-shell bg-paper">
        <div className="content-shell grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="mb-4 text-sm font-black uppercase text-orange">The vibe</p>
            <h2 className="display-type text-6xl text-ink sm:text-8xl">Affordable, expressive, very Mumbai.</h2>
            <p className="mt-6 text-lg font-medium leading-8 text-charcoal/75">
              Lokoman Cafe is presented as a fast-food restaurant in {business.shortAddress} with a
              {` ${business.rating}`} rating, {business.reviewCount} reviews, and a verified{" "}
              {business.priceRange} range. The visual system leans into what the master prompt makes
              clear: blue-and-orange type, mural personality, warm interiors, and Instagram-first
              food culture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {business.serviceOptions.map((option) => (
                <span key={option} className="rounded-full bg-cream px-4 py-2 text-sm font-black uppercase text-ink">
                  {option}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <ParallaxImage image={media.muralWall} className="min-h-[460px]" />
            <ParallaxImage image={media.interiorWarm} className="min-h-[460px] sm:mt-16" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-cream">
        <div className="content-shell">
          <SectionHeading
            eyebrow="Design pillars"
            title="A cafe world, not a plain template."
            copy="The brand direction becomes a system: oversized type, poster crops, tactile texture, and action-first navigation."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Reveal key={pillar.title} delay={index * 0.05}>
                  <article className="min-h-[260px] rounded-[2rem] bg-paper p-6 shadow-glow">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-orange text-ink">
                      <Icon size={24} aria-hidden="true" />
                    </span>
                    <h3 className="display-type mt-8 text-4xl text-ink">{pillar.title}</h3>
                    <p className="mt-3 font-bold leading-7 text-charcoal/70">{pillar.copy}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mural-field bg-midnight px-4 py-20 text-paper">
        <div className="content-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase text-amber">Location truth</p>
            <h2 className="display-type text-6xl text-orange sm:text-8xl">Haaji Kasam Building, Nagpada.</h2>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-paper/75">{business.address}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={links.call} variant="cream">
              Call
            </ButtonLink>
            <ButtonLink href={links.order} variant="orange">
              Order
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
