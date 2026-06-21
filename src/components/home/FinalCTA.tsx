import { Camera as InstagramIcon, MapPin, Phone, ShoppingBag } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { business, links } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="mural-field bg-orange px-4 py-20 text-ink">
      <div className="content-shell text-center">
        <p className="mb-4 text-sm font-black uppercase">Open till {business.closesAt}</p>
        <h2 className="display-type mx-auto max-w-5xl text-6xl sm:text-8xl md:text-9xl">
          Pull up. Dine in. Take away. Repeat.
        </h2>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/menu" variant="ink" icon={<ShoppingBag size={18} aria-hidden="true" />}>
            View Menu
          </ButtonLink>
          <ButtonLink href={links.directions} variant="cream" icon={<MapPin size={18} aria-hidden="true" />}>
            Directions
          </ButtonLink>
          <ButtonLink href={links.call} variant="cream" icon={<Phone size={18} aria-hidden="true" />}>
            Call Now
          </ButtonLink>
          <ButtonLink href={links.instagram} variant="blue" icon={<InstagramIcon size={18} aria-hidden="true" />}>
            Follow
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
