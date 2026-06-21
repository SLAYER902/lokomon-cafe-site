import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/site";
import { media } from "@/data/media";

export function MoodBlock() {
  return (
    <section className="section-shell mural-field bg-cream">
      <div className="content-shell grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[560px]">
          <ParallaxImage
            image={media.interiorWarm}
            className="absolute left-0 top-0 h-[360px] w-[82%] sm:h-[390px]"
            sizes="(max-width: 1024px) 90vw, 42vw"
          />
          <ParallaxImage
            image={media.muralWall}
            className="absolute bottom-0 right-0 h-[280px] w-[68%] border-orange/40 sm:h-[300px]"
            sizes="(max-width: 1024px) 80vw, 34vw"
          />
          <div className="absolute left-6 top-[54%] z-20 -rotate-2 bg-orange px-6 py-5 text-ink shadow-poster">
            <p className="text-xs font-black uppercase">Interior mood</p>
            <p className="display-type text-5xl">Art + bites</p>
          </div>
        </div>

        <Reveal>
          <p className="mb-5 text-sm font-black uppercase text-orange">Brand mood</p>
          <h2 className="display-type text-6xl text-ink sm:text-7xl md:text-8xl">
            Not just a cafe.
            <span className="block text-orange">A whole mood.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-charcoal/75">
            Lokoman's brief calls for a space with mural energy, warm lighting, bold food shots,
            and a social-first visual language. This site treats {business.shortAddress} like a
            living brand scene: fast, graphic, affordable, and made to be remembered.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["Mural energy", "Blue + orange", "Feed-ready food"].map((item) => (
              <div key={item} className="clip-ticket bg-paper px-5 py-4 font-black uppercase text-ink shadow-glow">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
