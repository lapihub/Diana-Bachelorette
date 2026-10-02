import { shopping } from "@/content/weekend";

export default function Shopping() {
  return (
    <div className="container-editorial pb-24 sm:pb-32">
      <p
        data-reveal
        className="mx-auto max-w-2xl rounded-3xl border border-gold/60 bg-paper/60 px-6 py-8 text-center font-serif text-2xl leading-relaxed text-ink sm:px-12"
      >
        {shopping.note}
      </p>

      <div className="mx-auto mt-16 grid max-w-4xl gap-x-16 gap-y-12 sm:grid-cols-2">
        {shopping.categories.map((category) => (
          <div key={category.title} data-reveal>
            <h2 className="border-b border-champagne pb-3 font-serif text-2xl italic text-ink">{category.title}</h2>
            <ul className="mt-4 space-y-2">
              {category.items.map((item) => (
                <li key={item} className="flex items-baseline gap-3 font-serif text-lg text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 -translate-y-0.5 rotate-45 bg-gold" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
