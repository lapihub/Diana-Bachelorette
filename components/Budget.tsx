import StatusPill from "@/components/StatusPill";
import { budget } from "@/content/weekend";
import { calculateBudgetTotal, formatRange } from "@/lib/budget";

export default function Budget() {
  const total = calculateBudgetTotal(budget.items);
  return (
    <div className="container-editorial">
      <div data-reveal className="mx-auto max-w-2xl border border-champagne/70 bg-paper/50 px-6 py-12 sm:px-14">
        <ul className="space-y-6">
          {budget.items.map((item) => (
            <li key={item.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-3">
              <span className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-serif text-xl text-ink sm:text-2xl">{item.label}</span>
                <StatusPill status={item.status} className="self-center" />
                <span className="mb-1 hidden flex-1 border-b border-dotted border-champagne sm:block" aria-hidden />
              </span>
              <span className="whitespace-nowrap font-serif text-xl text-ink sm:text-2xl">
                {item.approximate && "ca "}{formatRange(item.min, item.max)}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-serif text-lg italic leading-relaxed text-ink-soft">
          Kan tillkomma: {budget.extras.join(", ")}.
        </p>

        <div className="mt-10 border-t border-champagne pt-10 text-center">
          <p className="label text-gold-deep">Totalt per person, ungefär</p>
          <p className="mt-3 font-serif text-[clamp(1.5rem,7vw,3.75rem)] font-light text-ink">ca {formatRange(total.min, total.max)}</p>
          <p className="mx-auto mt-5 max-w-sm font-serif text-lg italic text-ink-soft">{budget.dianaNote}</p>
        </div>
      </div>
    </div>
  );
}
