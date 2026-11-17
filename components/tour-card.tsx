import Image from "next/image";
import Link from "next/link";
import { priceOnRequest, type Tour } from "@/lib/tours";

export function TourCard({ tour, compact = false }: { tour: Tour; compact?: boolean }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[3px] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <Link href={tour.href} className="relative block aspect-[3/2] overflow-hidden">
        <Image
          src={tour.cover.src}
          alt={tour.cover.alt}
          fill
          sizes={compact ? "(max-width: 768px) 50vw, 280px" : "(max-width: 768px) 100vw, 360px"}
          className="object-cover transition duration-300 hover:scale-105"
        />
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-teal" />
        <span className="absolute right-0 bottom-0 bg-teal px-3 text-sm leading-[42px] font-bold text-white">
          {priceOnRequest}
        </span>
      </Link>
      <div className="flex flex-1 flex-col px-5 pt-4 pb-4">
        <p className="text-xs font-bold tracking-wider text-teal uppercase">{tour.duration}</p>
        <h3 className={`mt-1 font-bold leading-snug ${compact ? "text-base" : "text-[1.15rem]"}`}>
          <Link href={tour.href} className="hover:text-teal">
            {tour.title}
          </Link>
        </h3>
        {compact ? null : <p className="mt-2 text-sm leading-relaxed text-muted">{tour.excerpt}</p>}
        <span className="mt-3 block h-[3px] w-8 bg-teal" />
        <div className="mt-auto flex items-center justify-end pt-3">
          <Link
            href={tour.href}
            aria-label={`View ${tour.title}`}
            className="grid h-9 w-9 place-items-center rounded-full bg-teal text-lg text-white hover:bg-teal-deep"
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
