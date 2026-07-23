import type { LegalContent } from "@/content/types";

export default function LegalSections({ content }: { content: LegalContent }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-ink sm:text-4xl">
        {content.heading}
      </h1>
      {content.intro && <p className="mt-4 text-muted">{content.intro}</p>}

      <div className="mt-10 space-y-10">
        {content.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-ink">
              {section.heading}
            </h2>
            <div className="mt-2 space-y-2 text-sm text-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
