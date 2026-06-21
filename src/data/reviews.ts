import { business } from "@/data/site";

export const reviewSummary = {
  rating: business.rating,
  count: business.reviewCount,
  type: business.type,
  priceRange: business.priceRange,
  source:
    "Verified from the master prompt. No individual review quotes were supplied."
} as const;

// REVIEW CONTENT RULE:
// Do not write fake customer quotes. These cards are honest placeholders for future
// real review snippets and are visibly labeled in the UI.
export const reviewCards = [
  {
    id: "rating-signal",
    label: "Google profile signal",
    text: "4.6 rating across 45 reviews.",
    placeholder: false
  },
  {
    id: "review-copy-pending",
    label: "Review copy pending",
    text: "Add approved customer wording here when real review text is provided.",
    placeholder: true
  },
  {
    id: "photo-proof-pending",
    label: "Photo proof pending",
    text: "Replace temporary visuals with official cafe, food, and guest-approved imagery.",
    placeholder: true
  }
] as const;
