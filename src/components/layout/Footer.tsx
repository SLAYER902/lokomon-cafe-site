import { Camera as InstagramIcon, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { business, links, navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="mural-field bg-ink px-4 py-14 text-paper">
      <div className="content-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="display-type text-6xl text-orange">Lokoman Cafe</p>
          <p className="devanagari mt-2 text-lg font-bold text-amber">{business.devanagariName}</p>
          <p className="mt-5 max-w-md text-paper/70">
            A youthful Nagpada fast-food spot for dine-in, drive-through, delivery, quick bites,
            and very photographable cafe energy.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-black uppercase text-amber">Explore</p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="font-bold text-paper/80 hover:text-orange">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <a href={links.call} className="flex gap-3 rounded-3xl bg-paper/10 p-4 font-bold hover:bg-paper/15">
            <Phone size={20} aria-hidden="true" className="text-orange" />
            {business.phone}
          </a>
          <a
            href={links.directions}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 rounded-3xl bg-paper/10 p-4 font-bold hover:bg-paper/15"
          >
            <MapPin size={20} aria-hidden="true" className="text-orange" />
            <span>{business.address}</span>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex gap-3 rounded-3xl bg-paper/10 p-4 font-bold hover:bg-paper/15"
          >
            <InstagramIcon size={20} aria-hidden="true" className="text-orange" />
            Follow @lokomanindia
          </a>
        </div>
      </div>
      <div className="content-shell mt-12 border-t border-paper/10 pt-6 text-sm font-bold text-paper/60">
        <p>
          Business facts centralized from the master prompt. Temporary visuals are marked in source
          and on image badges.
        </p>
      </div>
    </footer>
  );
}
