import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { buildProfessionalServiceJsonLd } from "@/lib/jsonld";
import { home as homeDe } from "@/content/de/home";
import { home as homeEn } from "@/content/en/home";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AboutSection from "@/components/sections/AboutSection";
import QualificationsSection from "@/components/sections/QualificationsSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import FaqTeaser from "@/components/sections/FaqTeaser";
import PerformanceTeaser from "@/components/sections/PerformanceTeaser";
import CtaBanner from "@/components/sections/CtaBanner";
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
  const t = await getTranslations({ locale, namespace: "HomeMeta" });
  const alternates = buildAlternates("/", locale);

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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "de" ? homeDe : homeEn;
  const portraitCaption =
    locale === "de"
      ? "Foto: Porträt von Simeon Brus, natürliches Licht"
      : "Photo: Portrait of Simeon Brus, natural light";

  return (
    <>
      <JsonLd
        data={buildProfessionalServiceJsonLd(locale === "de" ? "de" : "en")}
      />

      <Hero hero={content.hero} />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {content.therapyIntro.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
            {content.therapyIntro.heading}
          </h2>
          <p className="mx-auto mt-4 text-muted">{content.therapyIntro.body}</p>
        </div>
        <div className="mt-12">
          <ServicesGrid services={content.therapyServices} />
        </div>
      </section>

      <BenefitsSection
        heading={content.benefits.heading}
        intro={content.benefits.intro}
        items={content.benefits.items}
      />

      <AboutSection
        eyebrow={content.about.eyebrow}
        heading={content.about.heading}
        body={content.about.body}
        highlights={content.about.highlights}
        portraitCaption={portraitCaption}
      />

      <QualificationsSection
        heading={content.qualifications.heading}
        intro={content.qualifications.intro}
        items={content.qualifications.items}
      />

      <PhilosophySection
        heading={content.philosophy.heading}
        body={content.philosophy.body}
        pillars={content.philosophy.pillars}
      />

      <FaqTeaser
        heading={content.faqTeaser.heading}
        intro={content.faqTeaser.intro}
        entries={content.faqTeaser.entries}
        cta={content.faqTeaser.cta}
      />

      <PerformanceTeaser
        eyebrow={content.performanceTeaser.eyebrow}
        heading={content.performanceTeaser.heading}
        body={content.performanceTeaser.body}
        points={content.performanceTeaser.points}
        cta={content.performanceTeaser.cta}
      />

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
