"use client";

import { useState, type FormEvent } from "react";
import { site, tourLinks } from "@/lib/site";

const ENDPOINT = "https://formsubmit.co/ajax/info@journeyofbliss.com";

type Status = "idle" | "sending" | "success" | "invalid" | "error";

export function ContactForm({
  tone = "light",
  heading,
  id = "enquiry-form",
}: {
  tone?: "light" | "dark";
  heading?: string;
  id?: string;
}) {
  const dark = tone === "dark";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const honey = String(data.get("_honey") ?? "").trim();
    if (honey) {
      setStatus("success");
      setError("");
      return;
    }

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || phone.length < 8 || message.length < 5) {
      setStatus("invalid");
      setError("Please add your name, a valid email, a mobile number, and a short message.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          tour: String(data.get("tour") ?? "").trim(),
          "travel dates": String(data.get("travel dates") ?? "").trim(),
          "group size": String(data.get("group size") ?? "").trim(),
          message,
          _subject: "New enquiry – journeyofbliss.com",
          _template: "table",
          _captcha: "false",
          _honey: "",
        }),
      });
      const body = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null;
      const accepted = body?.success === true || body?.success === "true";
      if (!response.ok || !accepted) {
        throw new Error(body?.message || "FormSubmit did not accept the enquiry.");
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("We could not send your enquiry by email. Please try again, or message us on WhatsApp.");
    }
  }

  return (
    <div className={dark ? "contact-panel rounded-md p-6 text-white shadow-lg md:p-7" : ""}>
      {heading ? (
        <h2 className={`text-2xl font-bold tracking-wide uppercase ${dark ? "text-white" : "text-ink"}`}>
          {heading}
        </h2>
      ) : null}
      {dark ? <span className="mt-3 mb-5 block h-[4px] w-12 bg-white/80" /> : null}

      {status === "success" ? (
        <p className="mt-4 rounded-sm bg-white px-4 py-4 text-[15px] leading-relaxed text-ink" role="status">
          Thank you. Your enquiry has been sent to Journey of Bliss. We will reply by email or phone.
        </p>
      ) : (
        <form id={id} onSubmit={onSubmit} className={heading ? "mt-4 space-y-3" : "space-y-3"} noValidate>
          <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
            <label htmlFor={`${id}-honey`}>Leave this field empty</label>
            <input id={`${id}-honey`} name="_honey" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
          </div>
          <Field id={`${id}-name`} name="name" label="Your name" autoComplete="name" dark={dark} required />
          <Field id={`${id}-email`} name="email" type="email" label="Email" autoComplete="email" dark={dark} required />
          <Field id={`${id}-phone`} name="phone" type="tel" label="Mobile No." autoComplete="tel" dark={dark} required />
          <div>
            <label htmlFor={`${id}-tour`} className="sr-only">
              Tour
            </label>
            <select id={`${id}-tour`} name="tour" defaultValue="" className={inputClass(dark)}>
              <option value="">Tour (optional)</option>
              {tourLinks.map((tour) => (
                <option key={tour.slug} value={tour.label}>
                  {tour.label}
                </option>
              ))}
              <option value="Not sure yet">Not sure yet</option>
            </select>
          </div>
          <Field id={`${id}-dates`} name="travel dates" label="Travel dates" autoComplete="off" dark={dark} />
          <Field id={`${id}-group`} name="group size" label="Group size" autoComplete="off" dark={dark} />
          <div>
            <label htmlFor={`${id}-message`} className="sr-only">
              Message
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              required
              minLength={5}
              maxLength={2000}
              rows={5}
              placeholder="Message"
              className={inputClass(dark)}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex w-full items-center justify-center gap-2 bg-send px-4 py-3 text-sm font-bold tracking-wider text-white uppercase hover:bg-[#002e73] disabled:opacity-70"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
            </svg>
            {status === "sending" ? "Sending" : "Send"}
          </button>
        </form>
      )}

      <p className={`mt-3 text-sm ${dark ? "text-white/80" : "text-muted"}`}>
        We reply by email, WhatsApp and phone.
      </p>

      {status === "invalid" || status === "error" ? (
        <div aria-live="polite" className="mt-3 rounded-sm bg-white px-4 py-3 text-sm text-ink" role="alert">
          <p>{error}</p>
          {status === "error" ? (
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex bg-[#25D366] px-4 py-2 text-sm font-bold text-white hover:bg-[#1ebe5d]"
            >
              Message us on WhatsApp
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  dark,
  required,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete: string;
  dark: boolean;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={label}
        maxLength={type === "email" ? 200 : 120}
        className={inputClass(dark)}
      />
    </div>
  );
}

function inputClass(dark: boolean) {
  return `w-full border px-3 py-2 text-[15px] text-ink outline-none placeholder:text-neutral-400 focus:border-teal ${
    dark ? "border-white/30 bg-white" : "border-line bg-white"
  }`;
}
