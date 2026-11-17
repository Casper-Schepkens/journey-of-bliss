import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the Journey of Bliss website. Last updated 1 September 2025.",
  alternates: { canonical: "/terms-condition" },
};

export default function TermsPage() {
  return (
    <>
      <PageBanner
        title="Terms & Conditions"
        image="/images/golden-triangle/delhi-humayuns-tomb-sunrise.jpg"
        alt="Humayun’s Tomb in its gardens, Delhi"
      />
      <div className="site-wrap py-12 md:py-16">
        <div className="rounded-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-10">
          <LegalDocument file="terms.md" />
        </div>
      </div>
    </>
  );
}
