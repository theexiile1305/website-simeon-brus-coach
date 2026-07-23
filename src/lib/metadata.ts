import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";
import { SITE_URL } from "./constants";

const HREFLANG_BY_LOCALE: Record<string, string> = {
  de: "de-DE",
  en: "en",
};

const OG_LOCALE_BY_LOCALE: Record<string, string> = {
  de: "de_DE",
  en: "en_US",
};

export function ogLocale(locale: string) {
  return OG_LOCALE_BY_LOCALE[locale] ?? "en_US";
}

export function alternateOgLocale(locale: string) {
  return locale === "de" ? OG_LOCALE_BY_LOCALE.en : OG_LOCALE_BY_LOCALE.de;
}

export function buildAlternates(
  pathnameKey: AppPathname,
  currentLocale: string,
) {
  const languages: Record<string, string> = {};

  for (const locale of routing.locales) {
    const localePath = getPathname({ locale, href: pathnameKey });
    languages[HREFLANG_BY_LOCALE[locale] ?? locale] =
      `${SITE_URL}${localePath}`;
  }

  languages["x-default"] = `${SITE_URL}${getPathname({
    locale: routing.defaultLocale,
    href: pathnameKey,
  })}`;

  const canonical = `${SITE_URL}${getPathname({
    locale: currentLocale as (typeof routing.locales)[number],
    href: pathnameKey,
  })}`;

  return { canonical, languages };
}
