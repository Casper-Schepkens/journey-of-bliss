import { site } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-4 z-50 grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 2.1 16.8L1 23l6.4-1.1A11 11 0 0 0 20.5 3.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.8.6.6-3.7-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.4 7.4 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.4.2-.3a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1.1 2.7 11.5 11.5 0 0 0 4.4 3.9 3.7 3.7 0 0 0 2.4.5 2.2 2.2 0 0 0 1.5-1 1.8 1.8 0 0 0 .1-1.1c-.1-.1-.2-.1-.4-.2z" />
      </svg>
    </a>
  );
}
