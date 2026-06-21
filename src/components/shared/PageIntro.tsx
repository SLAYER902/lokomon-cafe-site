import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { business } from "@/data/site";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  cta?: {
    href: string;
    label: string;
  };
};

export function PageIntro({ eyebrow, title, copy, cta }: PageIntroProps) {
  return (
    <section className="mural-field bg-ink px-4 py-16 text-paper sm:py-20">
      <div className="content-shell grid gap-8 lg:grid-cols-[1fr_0.42fr] lg:items-end">
        <Reveal>
          <p className="mb-5 text-sm font-black uppercase text-amber">{eyebrow}</p>
          <h1 className="display-type max-w-5xl text-6xl text-orange sm:text-8xl md:text-9xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-paper/75">{copy}</p>
          {cta ? (
            <ButtonLink href={cta.href} variant="orange" className="mt-8">
              {cta.label}
            </ButtonLink>
          ) : null}
        </Reveal>
        <Reveal delay={0.08} className="clip-ticket bg-paper p-6 text-ink shadow-glow">
          <p className="display-type text-5xl">{business.rating}</p>
          <p className="font-black uppercase text-orange">{business.reviewCount} reviews</p>
          <p className="mt-4 text-sm font-bold leading-6 text-charcoal/70">
            {business.priceRange} · {business.type} · Open till {business.closesAt}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
