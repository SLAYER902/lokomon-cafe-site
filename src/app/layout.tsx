import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { Navbar } from "@/components/layout/Navbar";
import { business, localBusinessJsonLd } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://lokoman-cafe.local"),
  title: {
    default: "Lokoman Cafe Nagpada | Aesthetic Fast Food in Mumbai",
    template: "%s | Lokoman Cafe"
  },
  description:
    "Lokoman Cafe in Nagpada, Mumbai: youthful fast food, dine-in, drive-through, no-contact delivery, 4.6 rating, and open till 11 PM.",
  keywords: [
    "Lokoman Cafe",
    "Nagpada cafe",
    "Mumbai fast food",
    "Lokoman menu",
    "drive-through cafe Mumbai"
  ],
  openGraph: {
    title: "Lokoman Cafe Nagpada",
    description:
      "Good food. Good vibe. Lokoman. A typography-led cafe website concept for Nagpada's youthful fast-food spot.",
    type: "website",
    locale: "en_IN"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#142B63"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <Script
          id="lokoman-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd)
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber focus:px-5 focus:py-3 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="safe-bottom md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
