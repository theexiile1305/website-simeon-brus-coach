import type { MetadataRoute } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing, type AppPathname } from "@/i18n/routing";
import { SITE_URL } from "@/lib/constants";

const HREFLANG_BY_LOCALE: Record<string, string> = {
  de: "de-DE",
  en: "en",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pathnameKeys = Object.keys(routing.pathnames) as AppPathname[];

  return pathnameKeys.flatMap((key) =>
    routing.locales.map((locale) => {
      const languages: Record<string, string> = {};
      for (const l of routing.locales) {
        languages[HREFLANG_BY_LOCALE[l] ?? l] = `${SITE_URL}${getPathname({
          locale: l,
          href: key,
        })}`;
      }

      return {
        url: `${SITE_URL}${getPathname({ locale, href: key })}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: key === "/" ? 1.0 : 0.7,
        alternates: { languages },
      };
    }),
  );
}
