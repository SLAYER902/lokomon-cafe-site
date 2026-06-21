import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type StatChipProps = {
  label: string;
  value: string;
  icon?: ReactNode;
  inverse?: boolean;
};

export function StatChip({ label, value, icon, inverse }: StatChipProps) {
  return (
    <div
      className={cn(
        "inline-flex min-h-16 items-center gap-3 rounded-full border px-4 py-2",
        inverse ? "border-paper/20 bg-paper/10 text-paper" : "border-ink/10 bg-white/70 text-ink"
      )}
    >
      {icon ? <span className="grid h-10 w-10 place-items-center rounded-full bg-orange text-ink">{icon}</span> : null}
      <span>
        <span className="block text-xs font-black uppercase opacity-70">{label}</span>
        <span className="block text-base font-black">{value}</span>
      </span>
    </div>
  );
}
