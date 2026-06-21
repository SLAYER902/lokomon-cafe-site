export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  kind: "food" | "drink" | "interior" | "mural" | "campaign";
  credit: string;
  temporary: true;
  note: string;
};

// TEMPORARY IMAGE SOURCE RULE:
// These Unsplash URLs are intentionally centralized placeholder photography.
// Replace with official Lokoman Cafe food, interior, mural, and campaign assets before launch.
export const media = {
  heroBurger: {
    id: "hero-burger",
    src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1400&q=86",
    alt: "Temporary close-up burger photography standing in for Lokoman Cafe food imagery",
    kind: "food",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official Lokoman burger or signature fast-food photograph."
  },
  fries: {
    id: "fries",
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary fries photography for Lokoman Cafe menu category",
    kind: "food",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official fries or sides imagery."
  },
  ramen: {
    id: "ramen",
    src: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary ramen bowl photography for Lokoman Cafe food category",
    kind: "food",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official Lokoman ramen imagery if this item remains on the menu."
  },
  sandwich: {
    id: "sandwich",
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary sandwich photography for Lokoman Cafe category preview",
    kind: "food",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official sandwich or wrap imagery."
  },
  pizza: {
    id: "pizza",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary pizza photography for Lokoman Cafe category preview",
    kind: "food",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official pizza imagery if used."
  },
  cooler: {
    id: "cooler",
    src: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary cold drink photography for Lokoman Cafe beverage category",
    kind: "drink",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official cooler or beverage imagery."
  },
  coffee: {
    id: "coffee",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary coffee photography for Lokoman Cafe beverage category",
    kind: "drink",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official coffee imagery."
  },
  shake: {
    id: "shake",
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=1200&q=84",
    alt: "Temporary shake photography for Lokoman Cafe dessert drink category",
    kind: "drink",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official shake imagery."
  },
  interiorWarm: {
    id: "interior-warm",
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary warm cafe interior photography for Lokoman Cafe ambience section",
    kind: "interior",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with real Lokoman Cafe interior and mural wall images."
  },
  interiorCounter: {
    id: "interior-counter",
    src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary cafe counter interior photography for Lokoman Cafe gallery",
    kind: "interior",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with official counter or service moment imagery."
  },
  muralWall: {
    id: "mural-wall",
    src: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=84",
    alt: "Temporary mural wall street-art photography representing Lokoman Cafe visual language",
    kind: "mural",
    credit: "Temporary Unsplash placeholder",
    temporary: true,
    note: "Replace with actual Lokoman Cafe mural wall image."
  }
} satisfies Record<string, MediaAsset>;
