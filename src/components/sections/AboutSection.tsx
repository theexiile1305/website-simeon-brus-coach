import Image from "next/image";

export default function AboutSection({
  eyebrow,
  heading,
  body,
  highlights,
  portraitCaption,
}: {
  eyebrow: string;
  heading: string;
  body: string[];
  highlights: string[];
  portraitCaption: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative order-2 aspect-[4/5] overflow-hidden rounded-2xl border border-border md:order-1">
          <Image
            src="/simeon-brus-portrait.jpg"
            alt={portraitCaption}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-dark">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">
            {heading}
          </h2>
          <div className="mt-4 space-y-4 text-muted">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-border bg-paper px-4 py-2 text-sm text-ink"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
