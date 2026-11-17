import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { HeroSlider } from "@/components/hero-slider";
import { SectionTitle } from "@/components/section-title";
import { TourCard } from "@/components/tour-card";
import { heroSlides } from "@/lib/site";
import { tours } from "@/lib/tours";

const reasons = [
  {
    title: "Experienced Staff",
    text: "Our staff is dedicated to crafting seamless and unforgettable travel experiences.",
    icon: "chat",
  },
  {
    title: "Expert Guidance",
    text: "Experience smooth and hassle-free travel from start to finish.",
    icon: "heart",
  },
  {
    title: "24/7 Support",
    text: "Our dedicated support team is available around the clock to assist you with any needs or concerns.",
    icon: "globe",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSlider slides={heroSlides} />

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/spiritual-sojourn/rishikesh-ganges-mountains.jpg)" }}
          role="img"
          aria-label="The Ganges and the hills at Rishikesh"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/88 via-white/62 to-white/45" />
        <div className="site-wrap relative py-16 md:py-20">
          <SectionTitle eyebrow="Take a Look at Our" title="Most Popular Tours" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="site-wrap grid items-start gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionTitle title="Why Travel with Us?" align="left" />
            <p className="mt-6">
              At <strong>Journey of Bliss</strong>, we create outstanding tours and holiday packages
              to guarantee your satisfaction. Our goal is to offer top-notch travel experiences that
              turn every trip into unforgettable memories.
            </p>
            <p className="mt-4">
              We customize our tour packages to match your interests, ensuring a unique and memorable
              experience tailored just for you.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-3">
              {reasons.map((reason) => (
                <li key={reason.title}>
                  <div className="mb-3 grid h-14 w-14 place-items-center rounded-full border-2 border-teal text-teal">
                    <ReasonIcon name={reason.icon} />
                  </div>
                  <h3 className="font-bold">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{reason.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4">
            <ContactForm tone="dark" heading="Contact Us" />
          </div>
        </div>
      </section>

      <section className="ornament py-14 text-white">
        <div className="site-wrap">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-wide uppercase md:text-3xl">Deals and Discounts</h2>
              <p className="mt-2 text-white/85">Plan Your Dream Vacation - Find the Best Vacation Places</p>
            </div>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 rounded-full bg-teal px-6 py-2 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-deep"
            >
              View more <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} compact />
            ))}
          </div>
          <p className="mt-6 text-sm text-white/75">Every journey is quoted individually. Price on request.</p>
        </div>
      </section>
    </>
  );
}

function ReasonIcon({ name }: { name: "chat" | "heart" | "globe" }) {
  if (name === "heart") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden>
        <path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.8 3.8 6 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-6-3.8-9S9.5 5.8 12 3z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-2" aria-hidden>
      <path d="M5 6h14v9H8l-3 3V6z" />
    </svg>
  );
}
