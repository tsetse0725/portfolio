export default function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <h2 className="relative z-10 text-2xl font-semibold text-white">
        {children}
      </h2>


      <span
        aria-hidden
        className="pointer-events-none absolute -inset-x-6 -bottom-2 h-px
                   bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent"
      />


      <span
        aria-hidden
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2
                   h-6 w-6 rounded-full bg-emerald-400/20 blur-xl"
      />
    </div>
  );
}
