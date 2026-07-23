import type { CtaLink } from "@/content/types";
import { Link } from "@/i18n/navigation";

export default function CtaBanner({
  heading,
  body,
  cta,
}: {
  heading: string;
  body: string;
  cta: CtaLink;
}) {
  return (
    <section className="rounded-3xl bg-primary px-6 py-14 text-center text-white">
      <h2 className="text-2xl font-bold sm:text-3xl">{heading}</h2>
      <p className="mx-auto mt-3 max-w-xl text-white/85">{body}</p>
      <Link
        href={cta.href}
        className="mt-6 inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-white/90"
      >
        {cta.label}
      </Link>
    </section>
  );
}
