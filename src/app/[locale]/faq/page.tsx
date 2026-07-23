import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { buildFaqJsonLd } from "@/lib/jsonld";
import { faq as faqDe } from "@/content/de/faq";
import { faq as faqEn } from "@/content/en/faq";
import FaqAccordion from "@/components/sections/FaqAccordion";
import JsonLd from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "FaqMeta" });
  const alternates = buildAlternates("/faq", locale);

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

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "de" ? faqDe : faqEn;

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <JsonLd data={buildFaqJsonLd(content.entries)} />
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">
        {content.heading}
      </h1>
      <p className="mt-4 text-muted">{content.intro}</p>
      <div className="mt-10">
        <FaqAccordion entries={content.entries} />
      </div>
    </section>
  );
}
