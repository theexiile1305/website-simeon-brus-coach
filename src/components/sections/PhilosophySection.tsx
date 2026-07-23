import type { PhilosophyPillar } from "@/content/types";

export default function PhilosophySection({
  heading,
  body,
  pillars,
}: {
  heading: string;
  body: string;
  pillars: PhilosophyPillar[];
}) {
  return (
    <section className="bg-sand/10">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
          <p className="mt-4 text-muted">{body}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-border bg-paper p-6 text-center"
            >
              <h3 className="font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
