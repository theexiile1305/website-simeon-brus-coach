import type { FaqEntry } from "@/content/types";
import { getPathname } from "@/i18n/navigation";
import { BUSINESS_FACTS, SITE_NAME, SITE_URL } from "./constants";

type Locale = "de" | "en";

export function buildProfessionalServiceJsonLd(locale: Locale) {
  const url = `${SITE_URL}${getPathname({ locale, href: "/" })}`;

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url,
    image: `${SITE_URL}/og/business.jpg`,
    ...(BUSINESS_FACTS.telephone !== "TBD"
      ? { telephone: BUSINESS_FACTS.telephone }
      : {}),
    email: BUSINESS_FACTS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_FACTS.streetAddress,
      addressLocality: BUSINESS_FACTS.addressLocality,
      addressRegion: BUSINESS_FACTS.addressRegion,
      postalCode: BUSINESS_FACTS.postalCode,
      addressCountry: BUSINESS_FACTS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_FACTS.latitude,
      longitude: BUSINESS_FACTS.longitude,
    },
    areaServed: locale === "de" ? "Bayern" : "Bavaria, Germany",
    priceRange: "€€",
    founder: {
      "@type": "Person",
      name: "Simeon Brus",
      jobTitle:
        locale === "de"
          ? "Physiotherapeut & MMA-Trainer"
          : "Physiotherapist & MMA Coach",
    },
  };
}

export function buildFaqJsonLd(entries: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  };
}
