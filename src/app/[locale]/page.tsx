import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { buildProfessionalServiceJsonLd, buildFaqJsonLd } from "@/lib/jsonld";
import { home as homeDe } from "@/content/de/home";
import { home as homeEn } from "@/content/en/home";
import { faq as faqDe } from "@/content/de/faq";
import { faq as faqEn } from "@/content/en/faq";
import { kontakt as kontaktDe } from "@/content/de/kontakt";
import { contact as contactEn } from "@/content/en/contact";
import Hero from "@/components/sections/Hero";
import TherapyTeaser from "@/components/sections/TherapyTeaser";
import PerformanceTeaser from "@/components/sections/PerformanceTeaser";
import BenefitsSection from "@/components/sections/BenefitsSection";
import AboutSection from "@/components/sections/AboutSection";
import FaqAccordion from "@/components/sections/FaqAccordion";
import ContactForm from "@/components/contact/ContactForm";
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
      siteName: "Simeon Brus Coaching",
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
  const faqContent = locale === "de" ? faqDe : faqEn;
  const kontaktContent = locale === "de" ? kontaktDe : contactEn;
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
        <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
          <TherapyTeaser
            id="therapie"
            eyebrow={content.therapyIntro.eyebrow}
            heading={content.therapyIntro.heading}
            body={content.therapyIntro.body}
            services={content.therapyServices}
            cta={content.hero.primaryCta}
          />
          <PerformanceTeaser
            id="mma"
            eyebrow={content.performanceTeaser.eyebrow}
            heading={content.performanceTeaser.heading}
            body={content.performanceTeaser.body}
            points={content.performanceTeaser.points}
            cta={content.performanceTeaser.cta}
          />
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

      <section id="faq" className="mx-auto max-w-3xl px-6 py-16">
        <JsonLd data={buildFaqJsonLd(faqContent.entries)} />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            {faqContent.heading}
          </h2>
          <p className="mt-4 text-muted">{faqContent.intro}</p>
        </div>
        <div className="mt-10">
          <FaqAccordion entries={faqContent.entries} />
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              {kontaktContent.heading}
            </h2>
            <p className="mt-4 text-muted">{kontaktContent.intro}</p>
            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {kontaktContent.address.heading}
                </h3>
                <address className="mt-2 not-italic text-ink">
                  {kontaktContent.address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                  {kontaktContent.hours.heading}
                </h3>
                <div className="mt-2 text-ink">
                  {kontaktContent.hours.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
