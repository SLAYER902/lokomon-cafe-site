import type { Metadata } from "next";
import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { PageIntro } from "@/components/shared/PageIntro";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Instagram-inspired Lokoman Cafe gallery concept with food, interior, campaign, and mural-style visuals."
};

export default function GalleryPage() {
  return (
    <>
      <PageIntro
        eyebrow="Gallery"
        title="A feed you can walk through."
        copy="A modular gallery concept mixing temporary food photography, interior mood, mural inspiration, and poster-style campaign blocks."
      />
      <GalleryExperience />
    </>
  );
}
