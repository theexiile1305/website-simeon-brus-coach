import type { CtaLink, ServiceItem } from "@/content/types";
import ServicesGrid from "./ServicesGrid";

export default function TherapyTeaser({
  id,
  eyebrow,
  heading,
  body,
  services,
  cta,
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  body: string;
  services: ServiceItem[];
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
      <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">
        {heading}
      </h2>
      <p className="mt-3 max-w-2xl text-sm text-muted">{body}</p>

      <div className="mt-5">
        <ServicesGrid services={services} />
      </div>

      <a
        href={cta.href}
        className="mt-6 inline-flex min-h-11 items-center rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-white"
      >
        {cta.label}
      </a>
    </div>
  );
}
