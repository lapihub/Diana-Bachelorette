import Image from "next/image";
import StatusPill from "@/components/StatusPill";
import { links, villa, type GalleryImage } from "@/content/weekend";

const tile: Record<GalleryImage["size"], { cls: string; sizes: string }> = {
  large: { cls: "aspect-[4/3] md:col-span-4 md:row-span-2 md:aspect-auto", sizes: "(min-width: 768px) 66vw, 100vw" },
  tall: { cls: "aspect-[3/4] md:col-span-2 md:row-span-2 md:aspect-auto", sizes: "(min-width: 768px) 33vw, 100vw" },
  wide: { cls: "aspect-[4/3] md:col-span-3 md:row-span-2 md:aspect-auto", sizes: "(min-width: 768px) 50vw, 100vw" },
  small: { cls: "aspect-square md:col-span-2 md:row-span-1 md:aspect-auto", sizes: "(min-width: 768px) 33vw, 100vw" },
};

export default function Villa() {
  const facts = [
    { label: "Värd", value: villa.host },
    { label: "Plats", value: villa.location },
    { label: "Incheckning", value: villa.checkIn },
    { label: "Utcheckning", value: villa.checkOut },
  ];

  return (
    <>
      <div className="container-editorial">
        {/* Facts */}
        <div data-reveal className="mx-auto mb-12 max-w-4xl border-y border-champagne">
          <div className="grid grid-cols-2 divide-champagne/60 sm:grid-cols-4 sm:divide-x">
            {facts.map((f) => (
              <div key={f.label} className="px-4 py-6 text-center">
                <p className="label text-gold-deep">{f.label}</p>
                <p className="mt-2 font-serif text-lg leading-snug text-ink">{f.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 border-t border-champagne/60 py-5">
            <StatusPill status={villa.status} force />
            <a
              href={links.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="label text-ink underline decoration-gold/60 underline-offset-[6px] transition-colors hover:text-gold-deep"
            >
              Se annonsen på Airbnb
            </a>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 gap-3 sm:gap-4 md:auto-rows-[13rem] md:grid-cols-6 lg:auto-rows-[15rem]">
          {villa.gallery.map((img) => (
            <figure
              key={img.caption}
              data-reveal
              className={`group relative overflow-hidden bg-linen ${tile[img.size].cls}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                sizes={tile[img.size].sizes}
                className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.03]"
              />
              <figcaption className="absolute bottom-0 left-0 bg-ivory/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-serif text-lg italic text-ink">{img.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Amenities & services */}
        <div data-reveal className="mx-auto mt-20 grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="label text-gold-deep">I huset</p>
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              {villa.amenities.map((a) => (
                <li key={a} className="flex items-center gap-3 font-serif text-2xl text-ink">
                  <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-gold-deep">Service på {villa.host}</p>
            <ul className="mt-5 space-y-4">
              {villa.services.map((s) => (
                <li key={s.title} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-champagne/50 pb-4">
                  <span className="font-serif text-2xl text-ink">{s.title}</span>
                  <span className="text-sm text-ink-soft">{s.text}</span>
                  <StatusPill status={s.status} className="ml-auto" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pool After Dark */}
      <section className="relative mt-24 overflow-hidden bg-night text-ivory">
        <div className="relative h-[80svh] min-h-[30rem]">
          <Image
            src={villa.poolImage}
            alt="Villans inomhuspool med stentrappor ner i det turkosa vattnet"
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[18%_center] brightness-[0.62] saturate-[0.85] md:object-[35%_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-night/10 to-night" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_75%,rgba(216,195,160,0.22),transparent_55%)]" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-14 text-center sm:pb-20">
            <p className="label text-champagne/90">Lördag · sent</p>
            <h2 data-reveal className="mt-4 font-serif text-[3.6rem] font-light leading-[0.95] sm:text-8xl md:text-9xl">
              Pool <em className="text-champagne">After Dark</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-xl leading-relaxed text-ivory/85 sm:text-2xl">
              När middagen är slut tänder vi ljusen och går ner till poolen. Varmt vatten, bastu, bubbel och en
              lugnare stund tillsammans.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
