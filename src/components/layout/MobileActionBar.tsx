import { Camera as InstagramIcon, MapPin, Menu as MenuIcon, Phone, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { links } from "@/data/site";

const actions = [
  { label: "Menu", href: "/menu", icon: MenuIcon, internal: true },
  { label: "Call", href: links.call, icon: Phone },
  { label: "Directions", href: links.directions, icon: MapPin },
  { label: "Instagram", href: links.instagram, icon: InstagramIcon },
  { label: "Order", href: links.order, icon: ShoppingBag }
];

export function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-2 bottom-2 z-50 rounded-[1.35rem] border border-paper/20 bg-ink/[0.94] px-2 py-2 text-paper shadow-poster backdrop-blur-xl md:hidden"
    >
      <div className="grid grid-cols-5 gap-1">
        {actions.map((action) => {
          const Icon = action.icon;
          const className =
            "flex min-h-[58px] flex-col items-center justify-center gap-1 rounded-2xl text-[0.68rem] font-black uppercase transition-colors hover:bg-paper/10";

          if (action.internal) {
            return (
              <Link key={action.label} href={action.href} className={className}>
                <Icon size={19} aria-hidden="true" />
                {action.label}
              </Link>
            );
          }

          return (
            <a
              key={action.label}
              href={action.href}
              className={className}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <Icon size={19} aria-hidden="true" />
              {action.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
