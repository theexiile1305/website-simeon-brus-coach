import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { datenschutz as datenschutzDe } from "@/content/de/datenschutz";
import { privacy as privacyEn } from "@/content/en/privacy";
import LegalSections from "@/components/sections/LegalSections";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "DatenschutzMeta" });
  const alternates = buildAlternates("/datenschutz", locale);

  return {
    title: t("title"),
    description: t("description"),
    alternates,
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: alternates.canonical,
      siteName: "Simeon Brus Coaching",
      locale: ogLocale(locale),
      alternateLocale: alternateOgLocale(locale),
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "de" ? datenschutzDe : privacyEn;

  return <LegalSections content={content} />;
}
