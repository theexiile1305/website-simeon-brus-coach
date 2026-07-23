import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { buildAlternates, ogLocale, alternateOgLocale } from "@/lib/metadata";
import { kontakt as kontaktDe } from "@/content/de/kontakt";
import { contact as contactEn } from "@/content/en/contact";
import ContactForm from "@/components/contact/ContactForm";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactMeta" });
  const alternates = buildAlternates("/kontakt", locale);

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

export default async function KontaktPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const content = locale === "de" ? kontaktDe : contactEn;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-ink sm:text-4xl">
            {content.heading}
          </h1>
          <p className="mt-4 text-muted">{content.intro}</p>

          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {content.address.heading}
              </h2>
              <address className="mt-2 not-italic text-ink">
                {content.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {content.hours.heading}
              </h2>
              <div className="mt-2 text-ink">
                {content.hours.lines.map((line) => (
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
  );
}
