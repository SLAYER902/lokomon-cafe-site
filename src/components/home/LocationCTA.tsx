import { CalendarCheck, MapPin, Phone, ShoppingBag } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { business, links } from "@/data/site";

export function LocationCTA() {
  return (
    <section className="section-shell bg-paper">
      <div className="content-shell overflow-hidden rounded-[2.5rem] bg-ink text-paper shadow-poster">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="p-6 sm:p-9 lg:p-12">
            <p className="mb-5 text-sm font-black uppercase text-amber">Location</p>
            <h2 className="display-type text-6xl text-orange sm:text-7xl">Pull up in Nagpada.</h2>
            <p className="mt-5 text-lg font-medium leading-8 text-paper/75">{business.address}</p>
            <div className="mt-7 grid gap-3 text-sm font-black uppercase sm:grid-cols-2">
              <div className="rounded-3xl bg-paper/10 p-4">{business.hoursSummary}</div>
              <div className="rounded-3xl bg-paper/10 p-4">{business.phone}</div>
              {business.serviceOptions.map((option) => (
                <div key={option} className="rounded-3xl bg-paper/10 p-4">
                  {option}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={links.directions} variant="orange" icon={<MapPin size={18} aria-hidden="true" />}>
                Directions
              </ButtonLink>
              <ButtonLink href={links.call} variant="ghost" icon={<Phone size={18} aria-hidden="true" />}>
                Call
              </ButtonLink>
              <ButtonLink href={links.reserve} variant="cream" icon={<CalendarCheck size={18} aria-hidden="true" />}>
                Reserve
              </ButtonLink>
              <ButtonLink href={links.order} variant="ghost" icon={<ShoppingBag size={18} aria-hidden="true" />}>
                Order
              </ButtonLink>
            </div>
          </Reveal>
          <div className="min-h-[420px] bg-cream p-3">
            <iframe
              title="Map to Lokoman Cafe Nagpada"
              src={links.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[420px] w-full rounded-[2rem] border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
