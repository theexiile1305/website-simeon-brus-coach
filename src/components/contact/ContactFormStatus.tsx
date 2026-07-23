export default function ContactFormStatus({
  status,
  title,
  body,
}: {
  status: "success" | "error";
  title: string;
  body: string;
}) {
  return (
    <div
      role="status"
      className={`rounded-xl border p-4 text-sm ${
        status === "success"
          ? "border-accent/30 bg-accent/5 text-accent-dark"
          : "border-error/30 bg-error/5 text-error"
      }`}
    >
      <p className="font-semibold">{title}</p>
      <p className="mt-1">{body}</p>
    </div>
  );
}
