import { Clock, IndianRupee, MapPinned, MessageCircle, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/data/site";

const reasons = [
  { title: "Chill vibe", copy: "Interior-led cafe mood with mural-inspired identity.", icon: Sparkles },
  { title: "Fast service", copy: "Built around quick bites and easy visits.", icon: Clock },
  { title: "Budget-friendly", copy: `Verified listing range: ${business.priceRange}.`, icon: IndianRupee },
  { title: "Group-friendly", copy: "A casual spot for hangouts and shared food moments.", icon: Users },
  { title: "Drive-through", copy: "Service option listed in the verified business details.", icon: MapPinned },
  { title: "No-contact delivery", copy: "Delivery access without claiming a specific partner.", icon: MessageCircle }
];

export function WhyLokoman() {
  return (
    <section className="section-shell bg-cream">
      <div className="content-shell">
        <SectionHeading
          eyebrow="Why people pull up"
          title="Fast food, real mood, easy scenes."
          copy="The site keeps the promise simple: affordable cravings, expressive atmosphere, and practical ways to visit or order."
          align="center"
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.04}>
                <article className="group min-h-[220px] rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-glow transition-transform duration-300 hover:-translate-y-1">
                  <span className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-orange text-ink">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="display-type text-4xl text-ink">{reason.title}</h3>
                  <p className="mt-3 font-medium leading-7 text-charcoal/70">{reason.copy}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
