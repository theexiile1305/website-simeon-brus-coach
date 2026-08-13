import type { AppPathname } from "@/i18n/routing";

export type NavItem =
  | { key: "home"; kind: "link"; href: AppPathname }
  | {
      key: "therapy" | "mma" | "faq" | "contact";
      kind: "anchor";
      href: string;
    };

export const NAV_ITEMS: NavItem[] = [
  { key: "home", kind: "link", href: "/" },
  { key: "therapy", kind: "anchor", href: "#therapie" },
  { key: "mma", kind: "anchor", href: "#mma" },
  { key: "faq", kind: "anchor", href: "#faq" },
  { key: "contact", kind: "anchor", href: "#kontakt" },
];
