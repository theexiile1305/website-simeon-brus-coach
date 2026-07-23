"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const t = useTranslations("LanguageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-paper p-1 ${className}`}
    >
      {routing.locales.map((loc) => {
        const isActive = loc === locale;
        return (
          <button
            key={loc}
            type="button"
            aria-current={isActive ? "true" : undefined}
            onClick={() => router.replace(pathname, { locale: loc })}
            className={`min-h-11 min-w-11 rounded-full px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
              isActive ? "bg-primary text-white" : "text-muted hover:text-ink"
            }`}
          >
            {loc}
            <span className="sr-only"> — {t(loc)}</span>
          </button>
        );
      })}
    </div>
  );
}
