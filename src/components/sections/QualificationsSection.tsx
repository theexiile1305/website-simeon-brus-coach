import type { QualificationItem } from "@/content/types";

export default function QualificationsSection({
  heading,
  intro,
  items,
}: {
  heading: string;
  intro: string;
  items: QualificationItem[];
}) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
        <p className="mt-4 text-muted">{intro}</p>
      </div>

      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-paper">
        {items.map((item) => (
          <div key={item.title} className="p-6">
            <h3 className="font-semibold text-ink">{item.title}</h3>
            <p className="mt-1 text-sm text-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
