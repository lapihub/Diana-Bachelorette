import Link from "next/link";
import Hero from "@/components/Hero";
import { cancellationDeadline, event, links, paymentDeadline } from "@/content/weekend";
import { pages } from "@/lib/pages";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container-editorial pb-24 sm:pb-32">
        <p data-reveal className="mx-auto max-w-2xl text-center font-serif text-2xl font-light leading-relaxed text-ink sm:text-[1.9rem] sm:leading-[1.5]">
          {event.intro}
        </p>

        {/* Table of contents */}
        <nav data-reveal aria-label="Innehåll" className="mx-auto mt-24 max-w-3xl">
          <p className="label text-center text-ink-soft">Innehåll</p>
          <ol className="mt-8 border-t border-champagne">
            {pages.slice(1).map((page, i) => (
              <li key={page.href} className="border-b border-champagne">
                <Link href={page.href} className="group flex items-baseline gap-5 py-5 sm:gap-8">
                  <span className="w-8 shrink-0 font-serif text-lg italic text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-3xl text-ink transition-colors group-hover:text-gold-deep">
                      {page.label}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{page.description}</span>
                  </span>
                  <span className="font-serif text-xl text-gold transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </section>
    </>
  );
}
