import type { FaqEntry } from "@/content/types";

export default function FaqAccordion({ entries }: { entries: FaqEntry[] }) {
  return (
    <div className="divide-y divide-border rounded-2xl border border-border">
      {entries.map((entry) => (
        <details key={entry.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-ink">
            {entry.question}
            <span
              aria-hidden="true"
              className="shrink-0 text-muted transition-transform group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="mt-3 text-sm text-muted">{entry.answer}</p>
        </details>
      ))}
    </div>
  );
}
