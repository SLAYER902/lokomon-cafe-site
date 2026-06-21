import type { Metadata } from "next";
import { MenuExplorer } from "@/components/menu/MenuExplorer";
import { PageIntro } from "@/components/shared/PageIntro";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Search and filter Lokoman Cafe menu categories and sourced public item names without fake item-level prices."
};

export default function MenuPage() {
  return (
    <>
      <PageIntro
        eyebrow="Menu"
        title="Fast-food catalogue, cleaned up."
        copy="Search and filter sourced item/category names. No unsupported prices, no fake offers, no invented delivery partners."
      />
      <MenuExplorer />
    </>
  );
}
