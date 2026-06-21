import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  inverse?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  inverse = false,
  className
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-4xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("mb-4 text-sm font-black uppercase", inverse ? "text-amber" : "text-orange")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "display-type text-5xl sm:text-6xl md:text-8xl",
          inverse ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p className={cn("mt-5 max-w-2xl text-base font-medium leading-7 sm:text-lg", inverse ? "text-paper/80" : "text-charcoal/75", align === "center" && "mx-auto")}>
          {copy}
        </p>
      ) : null}
    </Reveal>
  );
}
