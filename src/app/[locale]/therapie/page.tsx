import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { therapie as therapieDe } from "@/content/de/therapie";
import { therapy as therapyEn } from "@/content/en/therapy";
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
  const t = await getTranslations({ locale, namespace: "TherapyMeta" });
  const alternates = buildAlternates("/therapie", locale);

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

export default async function TherapiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "de" ? therapieDe : therapyEn;

  return (
    <>
      <Hero hero={content.hero} />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">
          {content.intro.heading}
        </h2>
        <p className="mt-4 text-muted">{content.intro.body}</p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {content.modalities.map((modality) => (
            <div
              key={modality.title}
              className="rounded-2xl border border-border p-6"
            >
              <h3 className="text-lg font-semibold text-ink">
                {modality.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{modality.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-ink">
          {content.audience.heading}
        </h2>
        <ul className="mt-4 space-y-2 text-muted">
          {content.audience.items.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-primary">
                →
              </span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8">
        <ol className="space-y-8">
          {content.process.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
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
