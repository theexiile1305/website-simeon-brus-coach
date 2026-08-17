import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { BUSINESS_FACTS } from "@/lib/constants";
import { NAV_ITEMS } from "./navItems";

export default function Footer() {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-lg font-semibold text-ink">Simeon Brus</p>
          <p className="mt-2 max-w-xs text-sm text-muted">{t("tagline")}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">{t("navHeading")}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                {item.kind === "link" ? (
                  <Link
                    href={item.href}
                    className="text-muted hover:text-primary"
                  >
                    {tNav(item.key)}
                  </Link>
                ) : (
                  <a href={item.href} className="text-muted hover:text-primary">
                    {tNav(item.key)}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">
            {t("contactHeading")}
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>{BUSINESS_FACTS.streetAddress}</li>
            <li>
              {BUSINESS_FACTS.postalCode} {BUSINESS_FACTS.addressLocality}
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS_FACTS.email}`}
                className="hover:text-primary"
              >
                {BUSINESS_FACTS.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">
            {t("legalHeading")}
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/impressum" className="text-muted hover:text-primary">
                {t("impressum")}
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="text-muted hover:text-primary"
              >
                {t("datenschutz")}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-4 text-center text-xs text-muted">
        <p>
          © {year} Simeon Brus Coaching. {t("rights")}
        </p>
        <p className="mt-1">
          {t("builtBy")}{" "}
          <a
            href="https://github.com/theexiile1305"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            theexiile1305
          </a>
          . {t("issuesBy")}{" "}
          <a
            href="https://github.com/theexiile1305/website-simeon-brus-coach/issues"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
