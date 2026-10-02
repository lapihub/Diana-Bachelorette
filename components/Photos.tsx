import SubmitLink from "@/components/SubmitLink";
import { links, photos } from "@/content/weekend";

export default function Photos() {
  return (
    <div className="container-editorial">
      <div data-reveal className="mx-auto max-w-2xl border border-gold/60 bg-paper/60 px-6 py-12 text-center sm:px-14">
        <SubmitLink
          href={links.photoUpload}
          label="Ladda upp bilder"
          fallback="Uppladdningslänken kommer snart"
        />
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
        <h2 className="text-center font-serif text-3xl italic text-ink">Det vi letar efter</h2>
        <ul className="mt-8 grid gap-px bg-champagne/50 sm:grid-cols-3">
          {photos.wanted.map((w) => (
            <li key={w.title} className="bg-ivory px-6 py-8 text-center">
              <p className="font-serif text-2xl leading-tight text-ink">{w.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{w.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center font-serif text-lg italic text-ink-soft">
          Tips: skriv gärna ditt namn och ungefär vilket år bilden är från i filnamnet.
        </p>
      </div>
    </div>
  );
}
