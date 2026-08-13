import type { HeroContent } from "@/content/types";

export default function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="border-b border-border bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          {hero.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {hero.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
          {hero.subheadline}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.primaryCta.href}
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex min-h-11 items-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink hover:border-primary hover:text-primary"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
