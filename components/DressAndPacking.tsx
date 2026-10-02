import StatusPill from "@/components/StatusPill";
import { dressCode, dressCodeColor, packingList } from "@/content/weekend";

export default function DressAndPacking() {
  return (
    <div className="container-editorial">
      <div className="relative mx-auto max-w-5xl pt-12 sm:pt-0">
        {/* Dress code stamp (no data-reveal: the fade-in would reset its rotation) */}
        <div
          className="absolute right-1 top-0 z-10 flex h-28 w-28 rotate-[-12deg] flex-col items-center justify-center rounded-full border-2 border-ink bg-ivory text-center shadow-[0_10px_30px_-12px_rgba(43,38,34,0.35)] sm:-right-8 sm:-top-14 sm:h-32 sm:w-32"
          role="img"
          aria-label={`Dresscode: ${dressCodeColor}`}
        >
          <span className="absolute inset-1.5 rounded-full border border-ink/40" aria-hidden />
          <span className="label text-[0.55rem] text-ink-soft">Dresscode</span>
          <span className="mt-1 pl-[0.1em] font-serif text-[1.35rem] font-medium uppercase tracking-[0.1em] text-ink sm:text-2xl">
            {dressCodeColor}
          </span>
        </div>

        <div className="grid gap-px bg-champagne/50 sm:grid-cols-3">
          {dressCode.map((look) => (
            <div key={look.title} data-reveal className="bg-ivory px-6 py-10 text-center sm:px-8">
              <p className="label text-gold-deep">{look.title}</p>
              <p className="mt-5 font-serif text-xl leading-relaxed text-ink">{look.text}</p>
              {look.status && (
                <div className="mt-5">
                  <StatusPill status={look.status} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div data-reveal className="mx-auto mt-20 max-w-3xl">
        <h2 className="text-center font-serif text-3xl italic text-ink">Packlista Tips</h2>
        <ul className="mt-10 grid gap-x-12 gap-y-4 sm:grid-cols-2">
          {packingList.map((item) => (
            <li key={item} className="flex items-start gap-4 border-b border-champagne/40 pb-4">
              <span className="mt-1.5 h-3.5 w-3.5 shrink-0 border border-gold/70" aria-hidden />
              <span className="font-serif text-lg text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
