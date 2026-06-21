import { media, type MediaAsset } from "@/data/media";

export type MenuCategory =
  | "Burgers"
  | "Sandwiches"
  | "Wraps"
  | "Fries"
  | "Hot Beverages"
  | "Cold Beverages"
  | "Shakes"
  | "Bowls"
  | "Pizza"
  | "Desserts";

export type MenuItem = {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  tags: string[];
  image: MediaAsset;
  featured?: boolean;
  source:
    | "Master prompt category"
    | "Public Instagram snippet"
    | "Public Zomato snippet";
  priceNote: "No item-level price supplied; keep only verified cafe range.";
};

export const menuCategories: MenuCategory[] = [
  "Burgers",
  "Sandwiches",
  "Wraps",
  "Fries",
  "Hot Beverages",
  "Cold Beverages",
  "Shakes",
  "Bowls",
  "Pizza",
  "Desserts"
];

// MENU CONTENT RULE:
// Do not add prices or unsupported menu items here. Names below are either categories from the
// master prompt or item names surfaced by public Lokoman snippets. Exact item descriptions/prices
// are intentionally not claimed because no official menu sheet was supplied.
export const menuItems: MenuItem[] = [
  {
    id: "lokoman-signature-burger",
    name: "Lokoman Signature Burger",
    category: "Burgers",
    description:
      "Public social preview item. Exact build and price should be confirmed from the official menu.",
    tags: ["Social pick", "Fast food", "Official price pending"],
    image: media.heroBurger,
    featured: true,
    source: "Public Instagram snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "ramen-bowl",
    name: "Ramen",
    category: "Bowls",
    description:
      "Public social preview item. Keep the final copy aligned with the latest official menu.",
    tags: ["Bowl", "Warm pick", "Official price pending"],
    image: media.ramen,
    featured: true,
    source: "Public Instagram snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "coolers",
    name: "Coolers",
    category: "Cold Beverages",
    description:
      "Beverage family mentioned in public social preview copy; flavors and prices need official confirmation.",
    tags: ["Cold", "Refresh", "Official price pending"],
    image: media.cooler,
    source: "Public Instagram snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "fries",
    name: "Fries",
    category: "Fries",
    description:
      "Popular dish name surfaced by a public listing snippet; variants and prices are not asserted.",
    tags: ["Side", "Quick bite", "Official price pending"],
    image: media.fries,
    source: "Public Zomato snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "mocha-coffee",
    name: "Mocha Coffee",
    category: "Hot Beverages",
    description:
      "Popular dish name surfaced by a public listing snippet; final menu details should come from the cafe.",
    tags: ["Coffee", "Warm", "Official price pending"],
    image: media.coffee,
    source: "Public Zomato snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "irish-coffee",
    name: "Irish Coffee",
    category: "Hot Beverages",
    description:
      "Popular dish name surfaced by a public listing snippet; ingredients and price are not claimed.",
    tags: ["Coffee", "Cafe pick", "Official price pending"],
    image: media.coffee,
    source: "Public Zomato snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "shakes",
    name: "Shakes",
    category: "Shakes",
    description:
      "Menu family surfaced by public listing snippets; exact flavors should be replaced from official data.",
    tags: ["Cold", "Sweet", "Official price pending"],
    image: media.shake,
    featured: true,
    source: "Public Zomato snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "pizza",
    name: "Pizza",
    category: "Pizza",
    description:
      "Menu family surfaced by public listing snippets; item-level details remain pending.",
    tags: ["Shareable", "Group pick", "Official price pending"],
    image: media.pizza,
    source: "Public Zomato snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    category: "Sandwiches",
    description:
      "Category preview from the master prompt and public listings; variants should be confirmed.",
    tags: ["Quick bite", "Cafe classic", "Official price pending"],
    image: media.sandwich,
    source: "Master prompt category",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "wraps",
    name: "Wraps",
    category: "Wraps",
    description:
      "Category preview from the master prompt. Add exact wrap names only when the official menu is supplied.",
    tags: ["Grab-and-go", "Prompt category", "Official price pending"],
    image: media.sandwich,
    source: "Master prompt category",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  },
  {
    id: "desserts",
    name: "Desserts",
    category: "Desserts",
    description:
      "Menu family surfaced by public listing snippets; exact dessert names and prices are not asserted.",
    tags: ["Sweet", "After food", "Official price pending"],
    image: media.shake,
    source: "Public Zomato snippet",
    priceNote: "No item-level price supplied; keep only verified cafe range."
  }
];
