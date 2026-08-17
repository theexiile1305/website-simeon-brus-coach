import type { CtaLink } from "@/content/types";

export default function PerformanceTeaser({
  id,
  eyebrow,
  heading,
  body,
  points,
  cta,
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  body: string;
  points: string[];
  cta: CtaLink;
}) {
  return (
    <div
      id={id}
      className="h-full rounded-2xl border border-border bg-paper p-8 sm:p-10"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">{heading}</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">{body}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
          >
            {point}
          </li>
        ))}
      </ul>

      <a
        href={cta.href}
        className="mt-6 inline-flex min-h-11 items-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
      >
        {cta.label}
      </a>
    </div>
  );
}
