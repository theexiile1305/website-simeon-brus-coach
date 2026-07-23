import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/therapie": {
      de: "/therapie",
      en: "/therapy",
    },
    "/mma": {
      de: "/mma",
      en: "/mma",
    },
    "/faq": {
      de: "/faq",
      en: "/faq",
    },
    "/kontakt": {
      de: "/kontakt",
      en: "/contact",
    },
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
