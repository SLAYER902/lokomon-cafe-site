import { ButtonLink } from "@/components/ui/ButtonLink";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { media } from "@/data/media";

export function InteriorShowcase() {
  return (
    <section className="section-shell bg-espresso text-paper">
      <div className="wide-shell grid items-center gap-8 px-2 lg:grid-cols-[1.15fr_0.85fr]">
        <ParallaxImage
          image={media.interiorCounter}
          className="min-h-[620px] rounded-[2.5rem]"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
        <Reveal className="px-2 lg:px-6">
          <p className="mb-5 text-sm font-black uppercase text-amber">Interior experience</p>
          <h2 className="display-type text-6xl text-paper sm:text-7xl md:text-8xl">
            Designed for chill scenes and food cravings.
          </h2>
          <p className="mt-6 text-lg font-medium leading-8 text-paper/75">
            Warm lighting, expressive mural cues, and a casual hangout feel give Lokoman the kind of
            interior language that belongs on camera and in memory.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Mural wall", "Cozy seating", "Cafe lighting", "Group visits"].map((item) => (
              <span key={item} className="rounded-full border border-paper/20 px-4 py-2 text-sm font-black uppercase">
                {item}
              </span>
            ))}
          </div>
          <ButtonLink href="/gallery" variant="orange" className="mt-9">
            View Gallery
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
