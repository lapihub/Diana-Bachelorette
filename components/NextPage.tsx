import Link from "next/link";
import { pages, type PageHref } from "@/lib/pages";

/** "Nästa: …" link at the bottom of each page, so the site can be read in order. */
export default function NextPage({ current }: { current: PageHref }) {
  const index = pages.findIndex((p) => p.href === current);
  const next = pages[index + 1];
  if (!next) return null;

  return (
    <div className="container-editorial pb-20 pt-8 sm:pb-28">
      <Link
        href={next.href}
        className="group mx-auto block max-w-3xl border-t border-champagne pt-8 text-center"
      >
        <span className="label text-ink-soft">Nästa</span>
        <span className="mt-3 block font-serif text-4xl text-ink transition-colors group-hover:text-gold-deep sm:text-5xl">
          {next.label} <span className="text-gold">→</span>
        </span>
      </Link>
    </div>
  );
}
