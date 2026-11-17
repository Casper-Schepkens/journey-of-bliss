import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageBanner } from "@/components/page-banner";
import { TourCard } from "@/components/tour-card";
import { TourTabs } from "@/components/tour-tabs";
import { priceOnRequest, getTour, tours } from "@/lib/tours";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tours/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Tour" };
  return {
    title: tour.title,
    description: `${tour.title} — ${tour.duration}, departing and returning at Delhi Airport. ${priceOnRequest}.`,
    alternates: { canonical: tour.href },
    openGraph: {
      images: [{ url: tour.cover.src, alt: tour.cover.alt }],
    },
  };
}

export default async function TourPage({ params }: PageProps<"/tours/[slug]">) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const others = tours.filter((item) => item.slug !== tour.slug);

  return (
    <>
      <PageBanner title={tour.title} eyebrow={tour.duration} image={tour.cover.src} alt={tour.cover.alt} />
      <div className="site-wrap py-10 md:py-14">
        <div className="grid items-start gap-8 lg:grid-cols-3">
          <div className="rounded-[3px] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-7 lg:col-span-2">
            <TourTabs tour={tour} />
          </div>
          <aside className="space-y-5 lg:sticky lg:top-6">
            <div className="rounded-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
              <p className="text-sm font-bold tracking-wider text-teal uppercase">{tour.category}</p>
              <p className="mt-2 text-xl font-bold">{tour.duration}</p>
              <p className="mt-1 text-sm text-muted">Departure / return: {tour.departure}</p>
              <p className="mt-3 text-lg font-bold text-teal">{priceOnRequest}</p>
              <a
                href={tour.enquireHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center bg-teal px-4 py-3 text-sm font-bold tracking-wide text-white uppercase hover:bg-teal-deep"
              >
                Enquire now
              </a>
              <Link
                href="/contact-us"
                className="mt-3 flex items-center justify-center border-2 border-teal px-4 py-3 text-sm font-bold tracking-wide text-teal uppercase hover:bg-teal hover:text-white"
              >
                Contact page
              </Link>
              <p className="mt-3 text-sm text-muted">
                WhatsApp and phone: +91-96699 66836, 6am - 11pm.
              </p>
            </div>
          </aside>
        </div>

        <h2 className="mt-14 text-2xl font-bold">Other journeys</h2>
        <span className="mt-3 block h-[5px] w-12 bg-teal" />
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((item) => (
            <TourCard key={item.slug} tour={item} />
          ))}
        </div>
      </div>
    </>
  );
}
