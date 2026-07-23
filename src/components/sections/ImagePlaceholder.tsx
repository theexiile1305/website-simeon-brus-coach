export default function ImagePlaceholder({
  caption,
  aspectClassName = "aspect-[4/5]",
  className = "",
}: {
  caption: string;
  aspectClassName?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex ${aspectClassName} flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-gradient-to-br from-sand/20 via-paper to-primary/5 p-8 text-center ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
        className="h-8 w-8 text-muted"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5A1.5 1.5 0 0 1 4.5 6h2.379a1.5 1.5 0 0 0 1.06-.44l.622-.62A1.5 1.5 0 0 1 9.62 4.5h4.759a1.5 1.5 0 0 1 1.06.44l.621.62a1.5 1.5 0 0 0 1.061.44H19.5A1.5 1.5 0 0 1 21 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 16.5v-9Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15.75a3.375 3.375 0 1 0 0-6.75 3.375 3.375 0 0 0 0 6.75Z"
        />
      </svg>
      <p className="text-xs italic text-muted">{caption}</p>
    </div>
  );
}
