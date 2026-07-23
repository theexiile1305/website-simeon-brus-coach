import type { CtaLink, FaqEntry } from "@/content/types";
import { Link } from "@/i18n/navigation";
import FaqAccordion from "./FaqAccordion";

export default function FaqTeaser({
  heading,
  intro,
  entries,
  cta,
}: {
  heading: string;
  intro: string;
  entries: FaqEntry[];
  cta: CtaLink;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-muted">{intro}</p>
      </div>

      <div className="mt-10">
        <FaqAccordion entries={entries} />
      </div>

      <div className="mt-8 text-center">
        <Link
          href={cta.href}
          className="text-sm font-semibold text-primary hover:text-primary-light"
        >
          {cta.label} →
        </Link>
      </div>
    </section>
  );
}
