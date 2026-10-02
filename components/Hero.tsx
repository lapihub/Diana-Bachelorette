import Image from "next/image";
import { event, villa } from "@/content/weekend";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-3.5rem)] flex-col overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={villa.heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="animate-slow-zoom object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/10 via-ivory/25 to-ivory" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ivory via-ivory/85 to-transparent" />
      </div>

      <div className="relative mt-auto px-6 pb-16 pt-32 text-center sm:pb-24">
        <p className="label mb-6 text-ink-soft sm:mb-10">Välkommen till</p>
        <h1>
          <span className="block pt-6 font-script text-[5.5rem] leading-[0.9] text-gold-deep sm:pt-14 sm:text-[9rem]">
            {event.bride}
          </span>
          <span className="mt-2 block font-serif text-4xl font-light uppercase tracking-[0.18em] text-ink sm:text-6xl">
            {event.title}
          </span>
        </h1>

        <div className="mx-auto mt-8 flex max-w-md items-center gap-4">
          <span className="rule flex-1" />
          <span className="font-serif text-lg italic text-gold">&amp;</span>
          <span className="rule flex-1" />
        </div>

        <p className="mt-6 font-serif text-2xl italic text-ink sm:text-3xl">{event.dateLabel}</p>
        <p className="label mt-3 text-ink-soft">{event.locationLabel}</p>
      </div>
    </section>
  );
}
