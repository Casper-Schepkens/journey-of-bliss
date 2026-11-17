"use client";

import Image from "next/image";
import { useState } from "react";
import { priceOnRequest, type Tour } from "@/lib/tours";

const tabs = ["Details", "Itinerary", "Photos"] as const;

export function TourTabs({ tour }: { tour: Tour }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Details");

  return (
    <div>
      <div role="tablist" aria-label="Tour information" className="flex border-b border-line">
        {tabs.map((tab) => {
          const selected = active === tab;
          return (
            <button
              key={tab}
              type="button"
              role="tab"
              id={`tab-${tab}`}
              aria-selected={selected}
              aria-controls={`panel-${tab}`}
              onClick={() => setActive(tab)}
              className={`px-4 py-3 text-sm font-bold tracking-wide uppercase md:px-6 ${
                selected ? "border-b-[3px] border-teal text-teal" : "text-ink hover:text-teal"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="panel-Details"
        aria-labelledby="tab-Details"
        hidden={active !== "Details"}
        className="px-1 py-6 md:px-2"
      >
        <p className="text-sm font-bold tracking-wider text-teal uppercase">{tour.category}</p>
        <p className="mt-3 text-lg leading-relaxed">{tour.description}</p>
        <table className="mt-6 w-full border border-line text-left text-sm">
          <tbody>
            <Row label="Duration" value={tour.duration} />
            <Row label="Departure / return" value={tour.departure} />
            <Row label="Price" value={priceOnRequest} />
            {tour.vehicle ? <Row label="Vehicle" value={tour.vehicle} /> : null}
          </tbody>
        </table>
        {tour.route ? (
          <div className="mt-6">
            <h3 className="font-bold">Route</h3>
            <ol className="mt-3 flex flex-wrap gap-2">
              {tour.route.map((stop, index) => (
                <li key={stop} className="flex items-center gap-2">
                  <span className="bg-teal px-3 py-1 text-sm font-bold text-white">{stop}</span>
                  {index < tour.route!.length - 1 ? <span aria-hidden className="text-teal">→</span> : null}
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>

      <div
        role="tabpanel"
        id="panel-Itinerary"
        aria-labelledby="tab-Itinerary"
        hidden={active !== "Itinerary"}
        className="px-1 py-6 md:px-2"
      >
        {tour.days ? (
          <div className="timeline">
            {tour.days.map((day, index) => (
              <article key={day.title} className="timeline-item">
                <div className="timeline-num">{index + 1}</div>
                <h3 className="text-lg font-bold">{day.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed">{day.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-teal/30 bg-teal/5 px-5 py-5">
            <h3 className="text-lg font-bold">Itinerary on request / coming soon</h3>
            <p className="mt-2">{tour.itineraryNote}</p>
          </div>
        )}
      </div>

      <div
        role="tabpanel"
        id="panel-Photos"
        aria-labelledby="tab-Photos"
        hidden={active !== "Photos"}
        className="px-1 py-6 md:px-2"
      >
        {tour.route ? (
          <p className="mb-4 text-sm text-muted">
            Photographs of the Ganges and Himalayan pilgrimage towns. Pictures of Gangotri,
            Yamunotri, Kedarnath and Badrinath will be added with the day-by-day itinerary.
            Captions name the place in each photograph.
          </p>
        ) : null}
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tour.photos.map((photo) => (
            <li key={photo.src} className="overflow-hidden rounded-[3px] bg-paper">
              <div className="relative aspect-[3/2]">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover" />
              </div>
              <p className="px-3 py-2 text-sm leading-snug text-muted">{photo.alt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-line last:border-0">
      <th className="w-2/5 bg-paper px-4 py-3 font-bold uppercase">{label}</th>
      <td className="px-4 py-3">{value}</td>
    </tr>
  );
}
