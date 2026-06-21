import { Camera as InstagramIcon } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { campaignTiles } from "@/data/campaigns";
import { links } from "@/data/site";
import { cn } from "@/lib/utils";

const tileStyles = {
  blue: "bg-midnight text-paper",
  orange: "bg-orange text-ink",
  cream: "bg-cream text-ink",
  ink: "bg-ink text-paper"
};

export function InstaCampaignSection() {
  return (
    <section className="section-shell overflow-hidden bg-midnight text-paper">
      <div className="content-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            inverse
            eyebrow="Instagram-inspired"
            title="Campaign tiles that move like a feed."
            copy="Poster blocks are placeholder creative systems, not live offers. Replace them with official Lokoman posts when supplied."
          />
          <ButtonLink href={links.instagram} variant="orange" icon={<InstagramIcon size={18} aria-hidden="true" />}>
            Follow Instagram
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {campaignTiles.map((tile, index) => (
            <Reveal key={tile.id} delay={index * 0.06}>
              <article
                className={cn(
                  "group relative min-h-[360px] overflow-hidden rounded-[2rem] p-6 shadow-poster transition-transform duration-300 hover:-translate-y-2",
                  tileStyles[tile.tone]
                )}
              >
                <div className="halftone absolute inset-0 opacity-30" />
                <div className="relative z-10 flex h-full flex-col">
                  <p className="mb-8 rounded-full border border-current/20 px-4 py-2 text-xs font-black uppercase">
                    {tile.kicker}
                  </p>
                  <h3 className="display-type text-6xl">{tile.title}</h3>
                  <p className="mt-auto text-sm font-bold leading-6 opacity-75">{tile.body}</p>
                  <p className="mt-5 text-xs font-black uppercase opacity-60">Placeholder campaign tile</p>
                </div>
                <div className="absolute -bottom-10 -right-8 display-type text-[9rem] opacity-10 transition-transform group-hover:rotate-6">
                  LK
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
