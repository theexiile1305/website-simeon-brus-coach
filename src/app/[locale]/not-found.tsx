import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl font-bold text-ink">{t("title")}</h1>
      <p className="mt-4 text-muted">{t("body")}</p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary-light"
      >
        {t("cta")}
      </Link>
    </section>
  );
}
