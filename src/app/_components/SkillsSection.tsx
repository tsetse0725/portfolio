import SectionHeading from "@/app/_components/ui/SectionHeading";

export default function SkillsSection() {
  const skills = [
    { category: "Languages", items: "JavaScript, TypeScript" },
    { category: "Frontend", items: "React, Next.js, Tailwind CSS" },
    { category: "Backend", items: "Node.js, Express, Prisma, MongoDB" },
    { category: "Infrastructure", items: "Vercel, Docker (basic), GitHub" },
    { category: "Testing", items: "Jest, Vitest (basic)" },
    { category: "Others", items: "Cloudinary, Stripe, QPay" },
  ];

  return (
    <section id="skills" className="relative space-y-6">

      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 -top-10 left-0 h-24 w-72
                   rounded-full bg-emerald-500/12 blur-2xl"
      />

      <SectionHeading>Skills / Stack</SectionHeading>

      <ul
        className="
          grid gap-4 sm:grid-cols-2 lg:grid-cols-3
          items-stretch auto-rows-[1fr]
        "
      >
        {skills.map((s) => (
          <li
            key={s.category}
            className="
              h-full rounded-2xl border border-white/12
              bg-white/5 backdrop-blur-sm
              px-5 py-4 text-neutral-200
              shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
              hover:border-white/25 hover:bg-white/8
              transition-colors
            "
          >
            <div className="text-sm text-neutral-400">{s.category}</div>
            <div className="mt-1 font-medium">{s.items}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
