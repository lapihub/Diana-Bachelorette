import Link from "next/link";
import StatusPill from "@/components/StatusPill";
import { forDiana } from "@/content/weekend";

export default function ForDiana() {
  const { scrapbook, museum } = forDiana;

  return (
    <div className="container-editorial">
      <div className="mx-auto max-w-3xl space-y-6">
        <article data-reveal className="border border-champagne/60 bg-paper/60 p-8 sm:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">{scrapbook.title}</h2>
            <StatusPill status={scrapbook.status} />
          </div>
          <p className="mt-4 font-serif text-xl leading-relaxed text-ink-soft">{scrapbook.text}</p>
          <p className="mt-6 text-sm text-ink-soft">
            Bilderna skickar du via{" "}
            <Link href="/bilder" className="text-ink underline decoration-gold/60 underline-offset-4 hover:text-gold-deep">
              Bilder & minnen
            </Link>
            . Brevet lämnar du till arrangörerna.
          </p>
        </article>

        <article data-reveal className="border border-champagne/60 p-8 sm:p-12">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-serif text-4xl text-ink sm:text-5xl">{museum.title}</h2>
            <StatusPill status={museum.status} />
          </div>
          <p className="mt-4 font-serif text-xl leading-relaxed text-ink-soft">{museum.text}</p>
          <ol className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {museum.rooms.map((room, i) => (
              <li key={room} className="font-serif text-lg text-ink">
                <span className="mr-2 italic text-gold">{i + 1}.</span>
                {room}
              </li>
            ))}
          </ol>
        </article>
      </div>
    </div>
  );
}
