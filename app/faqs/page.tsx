import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/faq-list";
import { PageBanner } from "@/components/page-banner";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Practical answers about booking a Journey of Bliss tour, private travel, custom plans, payment, and the best time to visit India.",
  alternates: { canonical: "/faqs" },
};

export default function FaqsPage() {
  return (
    <>
      <PageBanner
        title="FAQs"
        image="/images/golden-triangle/delhi-india-gate.jpg"
        alt="India Gate, New Delhi"
      />
      <div className="site-wrap max-w-3xl py-12 md:py-16">
        <p className="mb-6 text-lg">
          A few practical answers before you travel with us. For anything else, call{" "}
          <a href={site.phoneHref} className="font-bold text-teal">
            {site.phoneDisplay}
          </a>{" "}
          or{" "}
          <Link href="/contact-us" className="font-bold text-teal">
            send a message
          </Link>
          .
        </p>
        <div className="rounded-[3px] bg-white px-5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:px-8">
          <FaqList items={faqs} />
        </div>
      </div>
    </>
  );
}
