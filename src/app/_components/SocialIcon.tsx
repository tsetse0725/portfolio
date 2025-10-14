import { ReactNode } from "react";

export default function SocialIcon({
  href,
  label,
  children,
  brand,
}: {
  href: string;
  label: string;
  children: ReactNode;
  brand?: "gmail" | "facebook" | "instagram" | "linkedin";
}) {
  const brandHover =
    brand === "facebook"
      ? "hover:border-blue-500 hover:text-blue-500"
      : brand === "instagram"
      ? "hover:border-pink-500 hover:text-pink-500"
      : brand === "linkedin"
      ? "hover:border-sky-500 hover:text-sky-500"
      : "hover:border-emerald-500 hover:text-emerald-400";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={[
        "group inline-flex items-center justify-center",
        "h-12 w-12 rounded-2xl border border-neutral-700/80",
        "bg-neutral-900/20 text-neutral-400",
        "transition-all duration-150",
        "hover:bg-neutral-900",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60",
        brandHover,
      ].join(" ")}
    >
      <span className="sr-only">{label}</span>
      <div className="transform transition-transform group-hover:scale-110">
        {children}
      </div>
    </a>
  );
}
