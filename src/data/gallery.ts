import { media } from "@/data/media";

export type GalleryFilter = "All" | "Food" | "Drinks" | "Interior" | "Campaigns" | "Mural";

export type GalleryItem = {
  id: string;
  title: string;
  filter: Exclude<GalleryFilter, "All">;
  span: "small" | "wide" | "tall" | "poster";
  image?: (typeof media)[keyof typeof media];
  copy?: string;
  temporary: true;
};

// GALLERY RULE:
// Gallery photography and poster copy are temporary placeholders until official
// Lokoman Cafe food, interior, Instagram, and mural assets are supplied.
export const galleryFilters: GalleryFilter[] = [
  "All",
  "Food",
  "Drinks",
  "Interior",
  "Campaigns",
  "Mural"
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g-burger",
    title: "Food close-up",
    filter: "Food",
    span: "tall",
    image: media.heroBurger,
    temporary: true
  },
  {
    id: "g-interior",
    title: "Warm cafe seating",
    filter: "Interior",
    span: "wide",
    image: media.interiorWarm,
    temporary: true
  },
  {
    id: "g-campaign-orange",
    title: "Good vibe poster",
    filter: "Campaigns",
    span: "poster",
    copy: "GOOD FOOD / GOOD VIBE / LOKOMAN",
    temporary: true
  },
  {
    id: "g-cooler",
    title: "Cold beverage mood",
    filter: "Drinks",
    span: "small",
    image: media.cooler,
    temporary: true
  },
  {
    id: "g-mural",
    title: "Mural-inspired wall",
    filter: "Mural",
    span: "wide",
    image: media.muralWall,
    temporary: true
  },
  {
    id: "g-fries",
    title: "Fast-food side",
    filter: "Food",
    span: "small",
    image: media.fries,
    temporary: true
  },
  {
    id: "g-campaign-blue",
    title: "Open till 11 PM",
    filter: "Campaigns",
    span: "poster",
    copy: "NAGPADA / OPEN TILL 11 PM",
    temporary: true
  },
  {
    id: "g-counter",
    title: "Counter moment",
    filter: "Interior",
    span: "tall",
    image: media.interiorCounter,
    temporary: true
  },
  {
    id: "g-ramen",
    title: "Bowl preview",
    filter: "Food",
    span: "wide",
    image: media.ramen,
    temporary: true
  }
];
