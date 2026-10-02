/** A button to an external link, or a quiet fallback text when no link is set yet. */
export default function SubmitLink({
  href,
  label,
  fallback = "Länken kommer snart",
}: {
  href?: string;
  label: string;
  fallback?: string;
}) {
  if (!href) {
    return <p className="label text-ink-soft">{fallback}</p>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="label inline-flex items-center gap-3 border border-ink px-6 py-3.5 text-ink transition-colors hover:bg-ink hover:text-ivory"
    >
      {label}
      <span aria-hidden>→</span>
    </a>
  );
}
