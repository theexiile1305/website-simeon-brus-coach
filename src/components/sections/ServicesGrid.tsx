import type { ServiceItem } from "@/content/types";
import { Link } from "@/i18n/navigation";

export default function ServicesGrid({
  services,
}: {
  services: ServiceItem[];
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <Link
          key={service.title}
          href={service.href}
          className="group rounded-2xl border border-border bg-paper p-6 transition-colors hover:border-primary"
        >
          <h3 className="text-lg font-semibold text-ink group-hover:text-primary">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-muted">{service.description}</p>
        </Link>
      ))}
    </div>
  );
}
