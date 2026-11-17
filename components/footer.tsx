import Link from "next/link";
import { site, tourLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-auto bg-navy text-white">
      <a
        href="#top"
        className="absolute top-0 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-navy text-white hover:border-white"
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M7 14l5-5 5 5H7z" />
        </svg>
      </a>

      <div className="site-wrap grid gap-10 py-14 md:grid-cols-3">
        <section>
          <h2 className="footer-title">About Us</h2>
          <p className="mt-4 text-white/85">
            We are a team of passionate professionals dedicated to sustainable tourism and
            exceptional travel experiences. Our focus is on delivering innovative tours and travel
            services with the highest standards of excellence and reliability.
          </p>
        </section>
        <section>
          <h2 className="footer-title">Our Tours</h2>
          <ul className="mt-4 space-y-2">
            {tourLinks.map((tour) => (
              <li key={tour.href}>
                <Link href={tour.href} className="text-white/85 hover:text-white hover:underline">
                  {tour.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="footer-title">Contact Us</h2>
          <ul className="mt-4 space-y-3 text-white/85">
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-teal">
                ●
              </span>
              <span>{site.address.oneLine}</span>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-teal">
                ●
              </span>
              <a href={site.phoneHref} className="hover:text-white hover:underline">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <span aria-hidden className="mt-1 text-teal">
                ●
              </span>
              <span>{site.hours}</span>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="border-t border-white/30">
        <div className="site-wrap flex flex-col items-center justify-between gap-3 py-5 text-sm text-white/80 md:flex-row">
          <p>© Journey of Bliss 2026, All Rights Reserved</p>
          <ul className="flex gap-5">
            <li>
              <Link href="/terms-condition" className="hover:text-white hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
