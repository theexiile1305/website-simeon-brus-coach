import type { BenefitItem } from "@/content/types";

export default function BenefitsSection({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro: string;
  items: BenefitItem[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-muted">{intro}</p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.title} className="flex gap-4">
            <span
              aria-hidden="true"
              className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent-dark"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  d="M16.704 5.29a1 1 0 0 1 0 1.415l-7.25 7.25a1 1 0 0 1-1.415 0l-3.25-3.25a1 1 0 1 1 1.415-1.414l2.543 2.543 6.543-6.543a1 1 0 0 1 1.414 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <div>
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
