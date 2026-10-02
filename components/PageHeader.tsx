type Props = {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
};

export default function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <header data-reveal className="mx-auto max-w-3xl px-6 pb-14 pt-16 text-center sm:pb-20 sm:pt-24">
      <p className="label text-gold-deep">{eyebrow}</p>
      <h1 className="mt-5 font-serif text-[2.8rem] font-light leading-[1.02] text-ink sm:text-6xl md:text-7xl">
        {title}
      </h1>
      {intro && (
        <p className="mx-auto mt-6 max-w-prose font-serif text-xl leading-relaxed text-ink-soft sm:text-[1.35rem]">
          {intro}
        </p>
      )}
    </header>
  );
}
