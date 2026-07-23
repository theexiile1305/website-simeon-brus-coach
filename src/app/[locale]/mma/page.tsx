import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { mma as mmaDe } from "@/content/de/mma";
import { mma as mmaEn } from "@/content/en/mma";
import Hero from "@/components/sections/Hero";
import CtaBanner from "@/components/sections/CtaBanner";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MmaMeta" });
  const alternates = buildAlternates("/mma", locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: alternates.canonical,
      siteName: "Simeon Brus Coach",
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocale(locale),
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function MmaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "de" ? mmaDe : mmaEn;

  return (
    <>
      <Hero hero={content.hero} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          {content.intro.heading}
        </h2>
        <p className="mt-4 text-muted">{content.intro.body}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold text-ink">
          {content.training.heading}
        </h2>
        <p className="mt-4 text-muted">{content.training.body}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {content.training.styles.map((style) => (
            <li
              key={style}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-ink"
            >
              {style}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.training.conditioning.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-ink">
          {content.selfDefence.heading}
        </h2>
        <p className="mt-4 text-muted">{content.selfDefence.body}</p>
        <ul className="mt-4 space-y-2 text-muted">
          {content.selfDefence.focusPoints.map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                →
              </span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-8">
        <h2 className="text-2xl font-bold text-ink">
          {content.audience.heading}
        </h2>
        <p className="mt-4 text-muted">{content.audience.intro}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {content.audience.scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-ink">
                {scenario.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{scenario.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-semibold text-ink">
          {content.audience.cta}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <CtaBanner
          heading={content.ctaBanner.heading}
          body={content.ctaBanner.body}
          cta={content.ctaBanner.cta}
        />
      </section>
    </>
  );
}
