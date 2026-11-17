import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { PageBanner } from "@/components/page-banner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy notice for Journey of Bliss. Last updated 1 September 2025.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        title="Privacy Policy"
        image="/images/rajasthan-heritage/jodhpur-mehrangarh-fort.jpg"
        alt="Mehrangarh Fort, Jodhpur"
      />
      <div className="site-wrap py-12 md:py-16">
        <div className="rounded-[3px] bg-white p-6 shadow-[0_2px_8px_rgba(0,0,0,0.08)] md:p-10">
          <LegalDocument file="privacy.md" />
        </div>
      </div>
    </>
  );
}
