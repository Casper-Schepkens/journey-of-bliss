export const site = {
  name: "Journey of Bliss",
  url: "https://journeyofbliss.com",
  phoneDisplay: "+91-96699 66836",
  phoneHref: "tel:+919669966836",
  whatsapp: "https://wa.me/919669966836",
  hours: "6am - 11pm",
  instagram: "https://www.instagram.com/journey__of__bliss",
  address: {
    lines: ["779 C Baba Farid Puri", "West Patel Nagar", "New Delhi 110008", "India"],
    oneLine: "779 C Baba Farid Puri, West Patel Nagar, New Delhi 110008",
    mapQuery: "779 C Baba Farid Puri, West Patel Nagar, New Delhi 110008",
  },
} as const;

export function whatsappHref(text?: string) {
  if (!text) return site.whatsapp;
  return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const tourLinks = [
  {
    slug: "6-day-golden-triangle-delhi-agra-and-jaipur-tour",
    href: "/tours/6-day-golden-triangle-delhi-agra-and-jaipur-tour",
    label: "Golden Triangle",
  },
  {
    slug: "rajathan-tour-packages-for-10-days",
    href: "/tours/rajathan-tour-packages-for-10-days",
    label: "Rajasthan Heritage Explorer",
  },
  {
    slug: "delhi-haridwar-gangotri-yamuna-otri-kedarnath-badrinath",
    href: "/tours/delhi-haridwar-gangotri-yamuna-otri-kedarnath-badrinath",
    label: "Spiritual Sojourn",
  },
] as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const mainNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  {
    href: "/tours",
    label: "Tours",
    children: tourLinks.map((tour) => ({ href: tour.href, label: tour.label })),
  },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact-us", label: "Contact Us" },
];

export type HeroSlide = {
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  gold?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/golden-triangle/agra-taj-mahal.jpg",
    alt: "The Taj Mahal in Agra",
    title: "Fly For Bliss",
    gold: true,
  },
  {
    image: "/images/rajasthan-heritage/udaipur-city-palace-lake-pichola-sunset.jpg",
    alt: "City Palace and Lake Pichola at sunset, Udaipur",
    eyebrow: "Find your special tour",
    title: "With Journey of Bliss",
  },
  {
    image: "/images/rajasthan-heritage/jaipur-amber-fort-hills.jpg",
    alt: "Amber Fort on the hills above Jaipur",
    eyebrow: "Let Us Design Your",
    title: "Ideal Adventure",
  },
  {
    image: "/images/rajasthan-heritage/jaisalmer-thar-desert-camel-caravan-sunset.jpg",
    alt: "Camels at sunset in the Thar desert near Jaisalmer",
    eyebrow: "Let us plan your",
    title: "Perfect Holiday",
  },
  {
    image: "/images/spiritual-sojourn/varanasi-ganga-aarti.jpg",
    alt: "Evening Ganga Aarti on the ghats of Varanasi",
    title: "Journey to Spiritual Depth",
  },
];

export function mapEmbedSrc() {
  // West Patel Nagar, the neighbourhood of 779 C Baba Farid Puri.
  // Google’s embed endpoint is blocked from this build environment, so the
  // page uses OpenStreetMap and links out to a Google Maps search for the street address.
  const lat = 28.6516;
  const lon = 77.1595;
  const bbox = [lon - 0.012, lat - 0.008, lon + 0.012, lat + 0.008]
    .map((value) => value.toFixed(4))
    .join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
}
