import StatusPill from "@/components/StatusPill";
import { schedule, transport } from "@/content/weekend";

export default function Schedule() {
  return (
    <div className="container-editorial">
      <div className="mx-auto max-w-4xl space-y-20">
        {schedule.map((day) => (
          <div key={day.label}>
            <div data-reveal className="mb-6 flex items-end justify-between gap-6 border-b border-champagne pb-4">
              <h2 className="font-serif text-4xl italic text-ink sm:text-5xl">{day.label}</h2>
              <p className="label pb-2 text-gold-deep">{day.date}</p>
            </div>

            <ol className="relative">
              <span className="absolute bottom-3 left-[7.25rem] top-3 hidden w-px bg-champagne/70 sm:block" aria-hidden />
              {day.items.map((item) => (
                <li key={item.title} data-reveal className="relative grid gap-1 py-5 sm:grid-cols-[6rem_1fr] sm:gap-10">
                  <p className="font-serif text-2xl text-gold-deep sm:pr-4 sm:text-right">{item.time}</p>
                  <span
                    className="absolute left-[7rem] top-[2.05rem] hidden h-2 w-2 rotate-45 border border-gold bg-ivory sm:block"
                    aria-hidden
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif text-2xl text-ink sm:text-3xl">{item.title}</h3>
                      <StatusPill status={item.status} />
                    </div>
                    <p className="mt-2 max-w-prose text-[0.95rem] leading-relaxed text-ink-soft">{item.description}</p>
                    {(item.location || item.address) && (
                      <p className="label mt-3 text-ink-soft/80">
                        {[item.location, item.address].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      <div data-reveal className="mx-auto mt-24 max-w-4xl bg-paper px-6 py-10 sm:px-12">
        <h2 className="text-center font-serif text-3xl italic text-ink">Att ta sig dit</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {transport.map((t) => (
            <div key={t.title}>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-serif text-xl text-ink">{t.title}</h3>
                <StatusPill status={t.status} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
