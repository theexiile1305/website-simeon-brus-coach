import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/impressum": {
      de: "/impressum",
      en: "/legal",
    },
    "/datenschutz": {
      de: "/datenschutz",
      en: "/privacy",
    },
  },
});

export type AppPathname = keyof typeof routing.pathnames;
