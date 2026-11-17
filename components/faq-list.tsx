"use client";

import { useState } from "react";
import type { Faq } from "@/lib/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.question}>
            <h2>
              <button
                type="button"
                aria-expanded={expanded}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-bold"
                onClick={() => setOpen(expanded ? -1 : index)}
              >
                {item.question}
                <span aria-hidden className="text-teal">
                  {expanded ? "−" : "+"}
                </span>
              </button>
            </h2>
            {expanded ? <p className="pb-5 text-[15px] leading-relaxed text-muted">{item.answer}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
