import type { ServiceItem } from "@/content/types";

export default function ServicesGrid({
  services,
}: {
  services: ServiceItem[];
}) {
  return (
    <div className="grid gap-4">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border border-border bg-paper p-6"
        >
          <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
          <p className="mt-2 text-sm text-muted">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
