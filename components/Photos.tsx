import MemoryForm from "@/components/MemoryForm";
import SubmitLink from "@/components/SubmitLink";
import { links, photos } from "@/content/weekend";

export default function Photos() {
  return (
    <div className="container-editorial">
      {/* Photos */}
      <div data-reveal className="mx-auto max-w-2xl rounded-3xl border border-gold/60 bg-paper/60 px-6 py-12 text-center sm:px-14">
        <p className="font-serif text-2xl leading-relaxed text-ink">{photos.intro}</p>
        <div className="mt-8">
          <SubmitLink href={links.photoUpload} label="Ladda upp bilder" fallback="Uppladdningslänken kommer snart" />
        </div>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
          Välj bilderna direkt från mobilen eller datorn. Du behöver inget konto, och bilderna går bara till
          arrangörerna.
          {photos.deadline && (
            <>
              {" "}
              Skicka senast <strong className="font-medium text-ink">{photos.deadline}</strong>.
            </>
          )}
        </p>
      </div>

      <div data-reveal className="mx-auto mt-16 max-w-3xl">
        <ul className="grid gap-px overflow-hidden rounded-3xl border border-champagne/50 bg-champagne/50 sm:grid-cols-3">
          {photos.wanted.map((w) => (
            <li key={w.title} className="bg-ivory px-6 py-8 text-center">
              <p className="font-serif text-2xl leading-tight text-ink">{w.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Memory */}
      <section id="minne" data-reveal className="mx-auto mt-24 max-w-2xl scroll-mt-20">
        <h2 className="text-center font-serif text-4xl text-ink sm:text-5xl">
          Ditt <em>minne</em>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center font-serif text-lg leading-relaxed text-ink-soft">
          {photos.memory.text}
        </p>
        <div className="mt-10 rounded-3xl border border-champagne/70 bg-paper/40 px-6 py-10 sm:px-12">
          <MemoryForm />
        </div>
      </section>
    </div>
  );
}
