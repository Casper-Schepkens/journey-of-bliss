import type { Metadata } from "next";
import { PageBanner } from "@/components/page-banner";
import { TourCard } from "@/components/tour-card";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Three journeys with Journey of Bliss: the Golden Triangle, a Rajasthan heritage route, and a 12-day Char Dham spiritual sojourn. Price on request.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <PageBanner
        title="Tours"
        eyebrow="Take a look"
        image="/images/golden-triangle/jaipur-amber-fort.jpg"
        alt="Amber Fort, Jaipur"
      />
      <div className="site-wrap py-12 md:py-16">
        <p className="mx-auto max-w-3xl text-center text-lg">
          Three journeys, each starting and ending at Delhi Airport. Tell us your dates and we will
          confirm the plan. Price on request.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </>
  );
}
