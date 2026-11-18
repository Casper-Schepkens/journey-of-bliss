import type { Metadata } from "next";
import { Kaushan_Script, Oxygen, Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { site } from "@/lib/site";
import "./globals.css";

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oxygen",
  display: "swap",
});

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kaushan",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Journey of Bliss",
    template: "%s | Journey of Bliss",
  },
  description:
    "Journey of Bliss is a Delhi tour operator planning cultural, heritage and spiritual journeys across India, including the Golden Triangle, Rajasthan and the Char Dham route.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    images: [
      {
        url: "/images/golden-triangle/agra-taj-mahal.jpg",
        width: 1600,
        height: 1067,
        alt: "The Taj Mahal in Agra",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  url: site.url,
  telephone: "+91-96699-66836",
  image: `${site.url}/brand/logo.jpeg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "779 C Baba Farid Puri, West Patel Nagar",
    addressLocality: "New Delhi",
    postalCode: "110008",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 06:00-23:00",
  sameAs: [site.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oxygen.variable} ${kaushan.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
