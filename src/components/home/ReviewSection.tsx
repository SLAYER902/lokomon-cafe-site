import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviewCards, reviewSummary } from "@/data/reviews";

export function ReviewSection() {
  return (
    <section className="section-shell bg-cream">
      <div className="content-shell">
        <SectionHeading
          eyebrow="Trust signal"
          title="4.6 stars. 45 reviews."
          copy="Only verified aggregate review data is shown. Individual review quotes are not fabricated."
          align="center"
        />
        <div className="mx-auto mt-10 flex max-w-3xl items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-paper">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={24} fill="currentColor" aria-hidden="true" className={index < 4 ? "text-orange" : "text-amber/70"} />
          ))}
          <span className="ml-2 font-black">
            {reviewSummary.rating} rating · {reviewSummary.count} reviews · {reviewSummary.priceRange}
          </span>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviewCards.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.05}>
              <article className="min-h-[210px] rounded-[2rem] bg-paper p-6 shadow-glow">
                <p className="mb-5 inline-flex rounded-full bg-orange px-3 py-1 text-xs font-black uppercase text-ink">
                  {card.placeholder ? "Placeholder" : "Verified"}
                </p>
                <h3 className="display-type text-4xl text-ink">{card.label}</h3>
                <p className="mt-4 font-bold leading-7 text-charcoal/70">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
