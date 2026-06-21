import { Marquee } from "@/components/ui/Marquee";
import { business } from "@/data/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-paper/10 bg-ink text-paper">
      <Marquee
        items={[
          business.shortAddress,
          "Fast Food",
          `Open till ${business.closesAt}`,
          ...business.serviceOptions
        ]}
        className="py-1"
      />
    </div>
  );
}
