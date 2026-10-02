"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { pages } from "@/lib/pages";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the menu after navigating, and stop the page scrolling behind it.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-champagne/40 bg-ivory/90 backdrop-blur-md">
      <div className="container-editorial flex h-14 items-center justify-between gap-6">
        <Link href="/" className="flex items-baseline gap-3" aria-label="Till startsidan">
          <span className="font-script text-2xl leading-none text-gold-deep">D</span>
          <span className="label hidden text-ink-soft sm:inline lg:hidden xl:inline">Bridal Weekend</span>
        </Link>

        {/* Desktop */}
        <nav aria-label="Sidor" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {pages.slice(1).map((page) => {
              const active = pathname === page.href;
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={active ? "page" : undefined}
                    className={`label border-b py-1 transition-colors hover:text-gold-deep ${
                      active ? "border-gold text-gold-deep" : "border-transparent text-ink-soft"
                    }`}
                  >
                    {page.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="label -mr-2 flex items-center gap-3 p-2 text-ink lg:hidden"
        >
          {open ? "Stäng" : "Meny"}
          <span className="relative block h-3 w-5" aria-hidden>
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-px w-5 bg-ink transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

    </header>

      {/* Mobile menu (outside the header, so the blur does not trap it) */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto bg-ivory transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Sidor" className="px-6 pb-[calc(2rem+env(safe-area-inset-bottom))] pt-6">
          <ul>
            {pages.map((page) => {
              const active = pathname === page.href;
              return (
                <li key={page.href} className="border-b border-champagne/50">
                  <Link
                    href={page.href}
                    aria-current={active ? "page" : undefined}
                    tabIndex={open ? 0 : -1}
                    className="flex items-baseline justify-between gap-4 py-4"
                  >
                    <span className={`font-serif text-3xl ${active ? "italic text-gold-deep" : "text-ink"}`}>
                      {page.label}
                    </span>
                    <span className="font-serif text-lg text-gold">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
