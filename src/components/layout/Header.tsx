import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileNav from "./MobileNav";

const NAV_ITEMS = [
  { href: "/" as const, key: "home" as const },
  { href: "/therapie" as const, key: "therapy" as const },
  { href: "/mma" as const, key: "mma" as const },
  { href: "/faq" as const, key: "faq" as const },
  { href: "/kontakt" as const, key: "contact" as const },
];

export default function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="relative border-b border-border bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-ink">
          Simeon Brus
        </Link>

        <nav aria-label={t("home")} className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="text-ink hover:text-primary">
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
