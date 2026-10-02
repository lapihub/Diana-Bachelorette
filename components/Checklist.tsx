import StatusPill from "@/components/StatusPill";
import { checklist } from "@/content/weekend";

export default function Checklist() {
  return (
    <div className="container-editorial">
        <div className="mx-auto grid max-w-5xl items-start gap-4 md:grid-cols-2">
          {checklist.map((category) => {
            const done = category.items.filter((i) => i.status === "done").length;
            const total = category.items.length;

            return (
              <details key={category.title} data-reveal className="group card-paper">
                <summary className="flex cursor-pointer items-center gap-4 px-6 py-5">
                  <span className="flex-1 font-serif text-2xl text-ink">{category.title}</span>
                  <span className="label text-ink-soft">
                    {done}/{total}
                  </span>
                  <span
                    className="font-serif text-2xl leading-none text-gold transition-transform duration-300 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <div className="mx-6 h-px bg-champagne/30">
                  <div
                    className="h-px bg-gold transition-all"
                    style={{ width: `${total ? (done / total) * 100 : 0}%` }}
                  />
                </div>
                <ul className="px-6 pb-6 pt-4">
                  {category.items.map((item) => {
                    const isDone = item.status === "done";
                    return (
                      <li
                        key={item.label}
                        className="flex items-center gap-4 border-b border-champagne/30 py-3 last:border-0"
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center border ${
                            isDone ? "border-gold bg-gold text-ivory" : "border-gold/70"
                          }`}
                          aria-hidden
                        >
                          {isDone && (
                            <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.6">
                              <path d="M2 6.5 5 9l5-6" />
                            </svg>
                          )}
                        </span>
                        <span
                          className={`flex-1 font-serif text-lg leading-snug ${
                            isDone ? "text-ink-soft line-through decoration-gold/60" : "text-ink"
                          }`}
                        >
                          {item.label}
                        </span>
                        <StatusPill status={item.status} />
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
        </div>
    </div>
  );
}
