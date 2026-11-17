import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageBanner } from "@/components/page-banner";
import { mapEmbedSrc, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Journey of Bliss in West Patel Nagar, New Delhi. Call or WhatsApp +91-96699 66836, 6am to 11pm, or send an enquiry.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        title="Contact Us"
        eyebrow="Get in touch"
        image="/images/generic/india-auto-rickshaw-countryside.jpg"
        alt="An auto rickshaw in the Indian countryside"
      />
      <div className="site-wrap py-12 md:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <section className="rounded-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-8">
            <h2 className="text-2xl font-bold">Contact Us India</h2>
            <span className="mt-3 block h-[5px] w-12 bg-teal" />
            <p className="mt-4 text-muted">Have a question? Call, message us on WhatsApp, or use the form.</p>
            <address className="mt-6 space-y-4 not-italic">
              <p>
                {site.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p>
                <a href={site.phoneHref} className="text-lg font-bold text-teal">
                  {site.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={site.whatsapp} className="font-bold text-teal" target="_blank" rel="noreferrer">
                  WhatsApp {site.phoneDisplay}
                </a>
              </p>
              <p>Hours: {site.hours}</p>
            </address>
          </section>
          <section className="rounded-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-8">
            <ContactForm heading="Have a question?" />
          </section>
        </div>

        <div className="mt-8 overflow-hidden rounded-[3px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <iframe
            title="Map of the Journey of Bliss office area in West Patel Nagar, New Delhi"
            src={mapEmbedSrc()}
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 text-sm">
            <span>{site.address.oneLine}</span>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-teal hover:underline"
            >
              Open this address in Google Maps
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
