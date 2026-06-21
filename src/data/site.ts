import { stripPhoneNumber } from "@/lib/utils";

export const business = {
  name: "Lokoman Cafe",
  devanagariName: "लोकोमन कैफे",
  type: "Fast food restaurant",
  rating: 4.6,
  reviewCount: 45,
  priceRange: "₹1–200",
  address:
    "Haaji Kasam Building, Plot No. 243, Jehangir Boman Behram Rd, next to Alexandra Cinema, opposite Lakda Bazaar, Jahangir Boman, Nagpada, Mumbai, Maharashtra 400008",
  shortAddress: "Nagpada, Mumbai",
  area: "Nagpada",
  city: "Mumbai",
  phone: "097029 88544",
  closesAt: "11 PM",
  hoursSummary: "Open · Closes 11 PM",
  serviceOptions: ["Dine-in", "Drive-through", "No-contact delivery"],
  googleActions: [
    "Directions",
    "Save",
    "Nearby",
    "Send to phone",
    "Share",
    "Reserve a table",
    "Order online",
    "Menu"
  ],
  sourceNote:
    "Verified business data comes from C:/Users/slaye/Downloads/LOKOMAN_CAFE_MASTER_DESIGN_PROMPT.md."
} as const;

const internationalPhone = `91${stripPhoneNumber(business.phone).replace(/^0/, "")}`;
const encodedAddress = encodeURIComponent(`${business.name}, ${business.address}`);

export const links = {
  call: `tel:+${internationalPhone}`,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
  mapEmbed: `https://www.google.com/maps?q=${encodedAddress}&output=embed`,
  instagram: "https://www.instagram.com/lokomanindia/",
  reserve: `tel:+${internationalPhone}`,
  order: `https://wa.me/${internationalPhone}?text=${encodeURIComponent(
    "Hi Lokoman Cafe, I would like to place an order."
  )}`,
  menu: "/menu"
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
] as const;

export const sourceDisclosures = {
  instagram:
    "Instagram URL is centralized here. It was located from public search result for Lokoman (@lokomanindia). Replace if the client provides a different official handle.",
  order:
    "Order action uses WhatsApp with the verified phone number because no delivery partner URL was supplied. Replace with the official order-online URL if provided.",
  reserve:
    "Reserve action calls the verified phone number because no booking platform URL was supplied."
} as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: business.name,
  alternateName: business.devanagariName,
  telephone: `+${internationalPhone}`,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Haaji Kasam Building, Plot No. 243, Jehangir Boman Behram Rd, next to Alexandra Cinema, opposite Lakda Bazaar",
    addressLocality: "Nagpada, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400008",
    addressCountry: "IN"
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating,
    reviewCount: business.reviewCount
  },
  priceRange: business.priceRange,
  servesCuisine: "Fast food",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      closes: "23:00"
    }
  ],
  url: "https://lokoman-cafe.local",
  sameAs: [links.instagram]
};
