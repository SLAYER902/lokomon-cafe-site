export type CampaignTile = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  tone: "blue" | "orange" | "cream" | "ink";
  source: "Master prompt suggested campaign language";
  placeholder: true;
};

// CAMPAIGN CONTENT RULE:
// These are poster-style placeholder campaign blocks inspired by the master prompt.
// They are not offers, discounts, events, or active promotions.
export const campaignTiles: CampaignTile[] = [
  {
    id: "craving-something",
    title: "Craving something?",
    kicker: "Poster drop",
    body: "A social-first tile for food shots, reels covers, and quick menu pushes.",
    tone: "orange",
    source: "Master prompt suggested campaign language",
    placeholder: true
  },
  {
    id: "hot-and-fresh",
    title: "Hot & Fresh",
    kicker: "Counter energy",
    body: "Built for fast-food mood, bold crops, and orange-on-blue campaign rhythm.",
    tone: "blue",
    source: "Master prompt suggested campaign language",
    placeholder: true
  },
  {
    id: "late-evening-bites",
    title: "Late Evening Bites",
    kicker: "Open till 11 PM",
    body: "A timing-led brand tile using only the verified closing time.",
    tone: "ink",
    source: "Master prompt suggested campaign language",
    placeholder: true
  },
  {
    id: "taste-that-hits",
    title: "Taste That Hits",
    kicker: "Cafe feed",
    body: "Designed as a reusable visual block for future real campaign posts.",
    tone: "cream",
    source: "Master prompt suggested campaign language",
    placeholder: true
  }
];
