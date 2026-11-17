"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav, site, type NavItem } from "@/lib/site";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function isCurrent(pathname: string, href: string) {
  const current = normalize(pathname);
  const target = normalize(href);
  if (target === "/") return current === "/";
  return current === target || current.startsWith(`${target}/`);
}

export function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  return (
    <header id="top" className="relative z-40 bg-white text-ink shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="info-bar">
        <div className="site-wrap flex items-center justify-between gap-4 py-1 text-[0.93em]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 text-white hover:opacity-80">
              <PhoneIcon />
              <span>{site.phoneDisplay}</span>
            </a>
            <span className="hidden items-center gap-2 sm:inline-flex">
              <ClockIcon />
              {site.hours}
            </span>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Journey of Bliss on Instagram"
            className="hidden text-white hover:opacity-80 sm:inline-flex"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>

      <div className="site-wrap flex items-center justify-between gap-4 py-3 md:py-0">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/logo.jpeg"
            alt="Journey of Bliss"
            className="h-14 w-auto md:h-[72px]"
          />
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm bg-burgundy text-white md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>

        <nav
          id="site-nav"
          aria-label="Primary"
          className={`${open ? "block" : "hidden"} absolute top-full right-0 left-0 border-t border-line bg-white px-4 py-3 shadow-lg md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-1">
            {mainNav.map((item) => (
              <NavEntry
                key={item.href}
                item={item}
                pathname={pathname}
                onNavigate={() => setOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavEntry({
  item,
  pathname,
  onNavigate,
}: {
  item: NavItem;
  pathname: string;
  onNavigate: () => void;
}) {
  const active = isCurrent(pathname, item.href);
  return (
    <li className="group relative">
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        onClick={onNavigate}
        className="relative block px-3 py-2 text-sm font-bold tracking-wide text-black uppercase hover:text-teal md:py-8"
      >
        {item.label}
        {active ? (
          <span className="absolute bottom-1 left-1/2 hidden h-[5px] w-8 -translate-x-1/2 bg-teal md:block" />
        ) : null}
      </Link>
      {item.children ? (
        <ul className="mb-2 ml-3 border-l border-line pl-3 md:invisible md:absolute md:top-full md:left-0 md:z-50 md:mb-0 md:ml-0 md:w-64 md:rounded-sm md:border md:border-line md:bg-white md:py-2 md:pl-0 md:opacity-0 md:shadow-lg md:group-hover:visible md:group-hover:opacity-100 md:group-focus-within:visible md:group-focus-within:opacity-100">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block px-4 py-2 text-sm font-bold text-ink hover:text-teal"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1L6.6 10.8z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden>
      <path d="M12 2a10 10 0 1 0 .01 20.01A10 10 0 0 0 12 2zm1 11h-5V7h2v4h3v2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
      <path d="M12 2.2c2.7 0 3 .01 4.1.06 1 .05 1.6.22 2 .37.5.2.9.46 1.3.86.4.4.66.8.86 1.3.15.4.32 1 .37 2 .05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1-.22 1.6-.37 2a3.5 3.5 0 0 1-2.16 2.16c-.4.15-1 .32-2 .37-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1-.05-1.6-.22-2-.37a3.5 3.5 0 0 1-2.16-2.16c-.15-.4-.32-1-.37-2C2.21 15 2.2 14.7 2.2 12s.01-3 .06-4.1c.05-1 .22-1.6.37-2A3.5 3.5 0 0 1 4.79 3.74c.4-.15 1-.32 2-.37C8 2.21 8.3 2.2 12 2.2zm0 1.8c-2.6 0-2.9.01-4 .06-.9.04-1.4.2-1.7.33-.43.17-.74.37-.99.62-.25.25-.45.56-.62.99-.13.3-.29.8-.33 1.7-.05 1.1-.06 1.4-.06 4s.01 2.9.06 4c.04.9.2 1.4.33 1.7.17.43.37.74.62.99.25.25.56.45.99.62.3.13.8.29 1.7.33 1.1.05 1.4.06 4 .06s2.9-.01 4-.06c.9-.04 1.4-.2 1.7-.33.43-.17.74-.37.99-.62.25-.25.45-.56.62-.99.13-.3.29-.8.33-1.7.05-1.1.06-1.4.06-4s-.01-2.9-.06-4c-.04-.9-.2-1.4-.33-1.7a2.6 2.6 0 0 0-1.61-1.61c-.3-.13-.8-.29-1.7-.33-1.1-.05-1.4-.06-4-.06zm0 3.07a4.93 4.93 0 1 1 0 9.86 4.93 4.93 0 0 1 0-9.86zm0 1.8a3.13 3.13 0 1 0 0 6.26 3.13 3.13 0 0 0 0-6.26zm5.05-2.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3z" />
    </svg>
  );
}
