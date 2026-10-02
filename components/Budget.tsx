import StatusPill from "@/components/StatusPill";
import { budget, links, paymentDeadline } from "@/content/weekend";
import { formatRange } from "@/lib/budget";

export default function Budget() {
  return (
    <div className="container-editorial">
      <div data-reveal className="mx-auto max-w-2xl border border-champagne/70 bg-paper/50 px-6 py-12 sm:px-14">
        <ul className="space-y-6">
          {budget.items.map((item) => (
            <li key={item.label} className="flex items-baseline gap-3">
              <span className="font-serif text-xl text-ink sm:text-2xl">{item.label}</span>
              <StatusPill status={item.status} className="self-center" />
              <span className="mb-1 flex-1 border-b border-dotted border-champagne" aria-hidden />
              <span className="whitespace-nowrap font-serif text-xl text-ink sm:text-2xl">
                {formatRange(item.min, item.max)}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 font-serif text-lg italic leading-relaxed text-ink-soft">
          Kan tillkomma: {budget.extras.join(", ")}.
        </p>

        <div className="mt-10 border-t border-champagne pt-10 text-center">
          <p className="label text-gold-deep">Totalt per person, ungefär</p>
          <p className="mt-3 whitespace-nowrap font-serif text-[2.1rem] font-light text-ink sm:text-6xl">{budget.estimate}</p>
          <p className="mx-auto mt-5 max-w-sm font-serif text-lg italic text-ink-soft">{budget.dianaNote}</p>
        </div>
      </div>

      <p data-reveal className="mx-auto mt-10 max-w-2xl text-center font-serif text-xl text-ink">
        Betalas senast <em className="text-gold-deep">{paymentDeadline.day} {paymentDeadline.month}</em>
        {links.payment ? ` · ${links.payment}` : ". Betalinfo delas i gruppchatten."}
      </p>
    </div>
  );
}
