import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { InstaCampaignSection } from "@/components/home/InstaCampaignSection";
import { InteriorShowcase } from "@/components/home/InteriorShowcase";
import { LocationCTA } from "@/components/home/LocationCTA";
import { MenuPreview } from "@/components/home/MenuPreview";
import { MoodBlock } from "@/components/home/MoodBlock";
import { ReviewSection } from "@/components/home/ReviewSection";
import { SignatureItems } from "@/components/home/SignatureItems";
import { WhyLokoman } from "@/components/home/WhyLokoman";

export default function Home() {
  return (
    <>
      <Hero />
      <MoodBlock />
      <SignatureItems />
      <InstaCampaignSection />
      <WhyLokoman />
      <MenuPreview />
      <InteriorShowcase />
      <ReviewSection />
      <LocationCTA />
      <FinalCTA />
    </>
  );
}
