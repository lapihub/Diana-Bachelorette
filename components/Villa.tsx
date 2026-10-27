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

        <p data-reveal className="mx-auto mb-12 max-w-4xl text-center font-serif text-xl leading-relaxed text-ink-soft">
          {villa.address}
          <br />
          <a href={links.map} target="_blank" rel="noopener noreferrer" className="label mt-3 inline-block text-ink underline decoration-gold/60 underline-offset-4">
            Visa på kartan
          </a>
        </p>

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

        {/* The apartment and its surroundings */}
        <div data-reveal className="mx-auto mt-20 grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="label text-gold-deep">I lägenheten</p>
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
            <p className="label text-gold-deep">Vid vattnet i Huvudsta</p>
            <p className="mt-5 font-serif text-xl leading-relaxed text-ink-soft">{villa.area}</p>
          </div>
        </div>
      </div>

    </>
  );
}
