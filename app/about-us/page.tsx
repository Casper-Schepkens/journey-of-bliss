import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Journey of Bliss crafts cultural, spiritual, historical and adventure holidays from New Delhi, with guides and plans shaped around how you like to travel.",
  alternates: { canonical: "/about-us" },
};

const steps = [
  {
    title: "Choose & Tell",
    text: "Select your favourite destinations and tell us your tentative plan and fill in the travel request form.",
  },
  {
    title: "Fine-Tune Your Plan",
    text: "Our tour consultant will help you build a customised trip. It is absolutely free.",
  },
  {
    title: "Get Ready to Travel Best",
    text: "Get ready for the best itinerary, the best trip, and the best travel.",
  },
  {
    title: "24/7 Assistance",
    text: "Any problems will be solved in just a minute with our support staff.",
  },
  {
    title: "Dedicated Team",
    text: "You will be full of information with our exceptional local tour guide.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        eyebrow="Who we are"
        image="/images/generic/jaisalmer-heritage-hotel-courtyard.jpg"
        alt="Courtyard of a heritage hotel in Jaisalmer"
      />
      <div className="site-wrap py-12 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="rounded-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-8">
            <h2 className="text-2xl font-bold">Who We Are and the Organisation</h2>
            <span className="mt-3 block h-[5px] w-12 bg-teal" />
            <p className="mt-5">
              At Journey of Bliss, we specialize in crafting exceptional tours and holiday packages
              to ensure complete customer satisfaction. Our mission is to provide the finest travel
              experiences, making each trip an unforgettable adventure and the best memories of your
              life.
            </p>
            <p className="mt-4">
              We offer a diverse range of tours, including cultural, spiritual, yoga, historical,
              adventure, and camping experiences in the mountains and deserts. Our knowledgeable
              guides, fluent in multiple languages, are dedicated to providing insightful information
              on historical and cultural aspects, enhancing your travel experience.
            </p>
            <p className="mt-4">
              We tailor our tour packages to your interests and preferences, ensuring a personalized
              and memorable journey.
            </p>
            <Link
              href="/tours"
              className="mt-6 inline-flex bg-teal px-6 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-deep"
            >
              View our tours
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative aspect-[3/4] sm:col-span-2">
              <Image
                src="/images/generic/bikaner-heritage-hotel-architecture.jpg"
                alt="Heritage hotel architecture in Bikaner"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-[3px] object-cover"
              />
            </div>
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/generic/india-auto-rickshaw-countryside.jpg"
                alt="An auto rickshaw in the Indian countryside"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="rounded-[3px] object-cover"
              />
            </div>
            <div className="relative aspect-[3/2]">
              <Image
                src="/images/generic/indian-thali-meal.jpg"
                alt="A traditional Indian thali"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="rounded-[3px] object-cover"
              />
            </div>
          </div>
        </div>

        <h2 className="mt-16 text-center text-2xl font-bold tracking-wide uppercase">Why Choose Journey of Bliss</h2>
        <span className="mx-auto mt-3 block h-[5px] w-12 bg-teal" />
        <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-[3px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-3 font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
