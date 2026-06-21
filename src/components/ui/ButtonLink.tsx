import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "orange" | "blue" | "cream" | "ghost" | "ink";

const variants: Record<ButtonVariant, string> = {
  orange: "bg-orange text-ink shadow-glow hover:bg-amber",
  blue: "bg-midnight text-paper shadow-poster hover:bg-ink",
  cream: "bg-cream text-ink border border-ink/15 hover:border-orange/60",
  ghost: "border border-current/25 bg-white/10 text-current hover:bg-white/20",
  ink: "bg-ink text-paper hover:bg-midnight"
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: ReactNode;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "orange",
  className,
  icon,
  external,
  ariaLabel
}: ButtonLinkProps) {
  const classes = cn("brand-button", variants[variant], className);
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10">{icon ?? <ArrowUpRight size={18} aria-hidden="true" />}</span>
    </>
  );

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
