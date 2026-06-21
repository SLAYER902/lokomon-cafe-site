import type { Metadata } from "next";
import { CalendarCheck, Camera as InstagramIcon, Clock, MapPin, Phone, ShoppingBag } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/shared/PageIntro";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { business, links } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, reserve, order, get directions, or send a local enquiry to Lokoman Cafe Nagpada."
};

const contactActions = [
  { label: "Call", href: links.call, icon: Phone, variant: "orange" as const },
  { label: "Directions", href: links.directions, icon: MapPin, variant: "blue" as const },
  { label: "Reserve", href: links.reserve, icon: CalendarCheck, variant: "cream" as const },
  { label: "Order", href: links.order, icon: ShoppingBag, variant: "orange" as const },
  { label: "Instagram", href: links.instagram, icon: InstagramIcon, variant: "blue" as const }
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Call, order, reserve, or pull up."
        copy="All primary actions use centralized contact data. The enquiry form is local/demo only until a backend is added."
      />

      <section className="section-shell bg-paper">
        <div className="content-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal className="rounded-[2rem] bg-ink p-6 text-paper shadow-poster sm:p-8">
            <p className="mb-5 text-sm font-black uppercase text-amber">Direct details</p>
            <h2 className="display-type text-6xl text-orange">Lokoman Cafe</h2>
            <div className="mt-7 grid gap-4">
              <a href={links.call} className="flex gap-4 rounded-3xl bg-paper/10 p-5 font-bold hover:bg-paper/15">
                <Phone className="text-orange" size={22} aria-hidden="true" />
                {business.phone}
              </a>
              <a
                href={links.directions}
                target="_blank"
                rel="noreferrer"
                className="flex gap-4 rounded-3xl bg-paper/10 p-5 font-bold hover:bg-paper/15"
              >
                <MapPin className="text-orange" size={22} aria-hidden="true" />
                {business.address}
              </a>
              <div className="flex gap-4 rounded-3xl bg-paper/10 p-5 font-bold">
                <Clock className="text-orange" size={22} aria-hidden="true" />
                {business.hoursSummary}
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {business.serviceOptions.map((option) => (
                <div key={option} className="rounded-3xl bg-paper/10 p-4 text-sm font-black uppercase">
                  {option}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {contactActions.map((action) => {
                const Icon = action.icon;
                return (
                  <ButtonLink
                    key={action.label}
                    href={action.href}
                    variant={action.variant}
                    icon={<Icon size={18} aria-hidden="true" />}
                  >
                    {action.label}
                  </ButtonLink>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-4 pb-20">
        <div className="content-shell overflow-hidden rounded-[2.5rem] bg-ink p-3 shadow-poster">
          <iframe
            title="Lokoman Cafe map"
            src={links.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[520px] w-full rounded-[2rem] border-0"
          />
        </div>
      </section>
    </>
  );
}
