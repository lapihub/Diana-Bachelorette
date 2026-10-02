import Link from "next/link";
import SubmitLink from "@/components/SubmitLink";
import { games, links } from "@/content/weekend";

export default function Games() {
  return (
    <div className="container-editorial">
      <div className="mx-auto max-w-4xl border-t border-champagne">
        {games.map((game) => (
          <details key={game.number} data-reveal className="group border-b border-champagne">
            <summary className="flex cursor-pointer items-center gap-5 py-7 sm:gap-8 sm:py-9">
              <span className="w-10 shrink-0 font-serif text-2xl italic text-gold sm:w-14 sm:text-3xl">
                {game.number}
              </span>
              <span className="flex-1">
                <span className="label block text-ink-soft">{game.when}</span>
                <span className="mt-2 block font-serif text-[1.7rem] leading-tight text-ink sm:text-4xl">
                  {game.title}
                </span>
              </span>
              <span
                className="relative h-8 w-8 shrink-0 rounded-full border border-champagne transition-colors group-open:border-gold"
                aria-hidden
              >
                <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-x-1/2 -translate-y-1/2 bg-ink" />
                <span className="absolute left-1/2 top-1/2 h-3 w-px -translate-x-1/2 -translate-y-1/2 bg-ink transition-transform group-open:scale-y-0" />
              </span>
            </summary>

            <div className="pb-12 sm:pl-[5.5rem]">
              <p className="max-w-prose font-serif text-xl leading-relaxed text-ink">{game.intro}</p>

              {game.list && (
                <div className="mt-8">
                  <p className="label text-gold-deep">{game.listTitle}</p>
                  <ul className="mt-5 grid gap-x-10 gap-y-3 sm:grid-cols-2">
                    {game.list.map((entry) => (
                      <li key={entry} className="flex gap-3 border-b border-champagne/40 pb-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden />
                        <span className="font-serif text-lg italic leading-snug text-ink">{entry}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <p className="mt-8 text-sm text-ink-soft">
                <span className="label mr-3 text-ink">Behövs</span>
                {game.needed.join(" · ")}
              </p>

              {game.submit === "memoryForm" && (
                <div className="mt-8">
                  <SubmitLink
                    href={links.memoryForm}
                    label="Skicka ditt minne"
                    fallback="Skicka ditt minne privat till arrangörerna"
                  />
                </div>
              )}
              {game.submit === "photos" && (
                <div className="mt-8">
                  <Link
                    href="/bilder"
                    className="label inline-flex items-center gap-3 border border-ink px-6 py-3.5 text-ink transition-colors hover:bg-ink hover:text-ivory"
                  >
                    Skicka bilder <span aria-hidden>→</span>
                  </Link>
                </div>
              )}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
