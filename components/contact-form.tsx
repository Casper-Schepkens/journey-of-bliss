"use client";

import { useActionState } from "react";
import { submitEnquiry, type EnquiryState } from "@/app/enquiry";

const idleEnquiry: EnquiryState = { status: "idle", message: "" };

export function ContactForm({
  tone = "light",
  heading,
  id = "enquiry-form",
}: {
  tone?: "light" | "dark";
  heading?: string;
  id?: string;
}) {
  const [state, action, pending] = useActionState(submitEnquiry, idleEnquiry);
  const dark = tone === "dark";

  return (
    <div className={dark ? "contact-panel rounded-md p-6 text-white shadow-lg md:p-7" : ""}>
      {heading ? (
        <h2 className={`text-2xl font-bold tracking-wide uppercase ${dark ? "text-white" : "text-ink"}`}>
          {heading}
        </h2>
      ) : null}
      {dark ? <span className="mt-3 mb-5 block h-[4px] w-12 bg-white/80" /> : null}

      <form id={id} action={action} className={heading ? "mt-4 space-y-3" : "space-y-3"}>
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${id}-company`}>Company</label>
          <input id={`${id}-company`} name="company" tabIndex={-1} autoComplete="off" />
        </div>
        <Field id={`${id}-name`} name="name" label="Your name" autoComplete="name" dark={dark} required />
        <Field id={`${id}-email`} name="email" type="email" label="Email" autoComplete="email" dark={dark} required />
        <Field id={`${id}-phone`} name="phone" type="tel" label="Mobile No." autoComplete="tel" dark={dark} required />
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
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 bg-send px-4 py-3 text-sm font-bold tracking-wider text-white uppercase hover:bg-[#002e73] disabled:opacity-70"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
            <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
          </svg>
          {pending ? "Sending" : "Send"}
        </button>
      </form>

      <p className={`mt-3 text-sm ${dark ? "text-white/80" : "text-muted"}`}>
        We reply on WhatsApp and by phone. Email delivery is not connected yet.
      </p>

      <div aria-live="polite" className="mt-3">
        {state.message ? (
          <p className={state.status === "error" ? "text-sm text-red-200" : "text-sm"} role="status">
            {state.status === "error" && !dark ? (
              <span className="text-red-700">{state.message}</span>
            ) : (
              state.message
            )}
          </p>
        ) : null}
        {state.whatsappUrl ? (
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex bg-[#25D366] px-4 py-2 text-sm font-bold text-white hover:bg-[#1ebe5d]"
          >
            Send this on WhatsApp
          </a>
        ) : null}
      </div>
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
