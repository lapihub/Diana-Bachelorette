import StatusPill from "@/components/StatusPill";
import { dressCode, packingList } from "@/content/weekend";

export default function DressAndPacking() {
  return (
    <div className="container-editorial">
      <div className="mx-auto grid max-w-5xl gap-px bg-champagne/50 sm:grid-cols-3">
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
