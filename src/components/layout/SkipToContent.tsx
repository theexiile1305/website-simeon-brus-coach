import { useTranslations } from "next-intl";

export default function SkipToContent() {
  const t = useTranslations("Nav");

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
    >
      {t("skipToContent")}
    </a>
  );
}
