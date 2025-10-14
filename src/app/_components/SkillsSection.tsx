"use client";

import SectionHeading from "@/app/_components/ui/SectionHeading";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMongodb,
  SiVercel,
  SiDocker,
  SiGithub,
  SiJest,
  SiVitest,
  SiCloudinary,
  SiStripe,
} from "react-icons/si";
import { CreditCard } from "lucide-react";

type ChipIcon = {
  label: string;
  Icon: React.ElementType;
};

function IconChips({
  list,
  className = "",
}: {
  list: ChipIcon[];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-1.5 ${className}`}
    >
      {list.map(({ label, Icon }) => (
        <span
          key={label}
          className="inline-flex h-7 items-center gap-1 rounded-lg border border-white/10
                     bg-white/5 px-2.5 text-xs leading-none text-neutral-300
                     hover:bg-white/10 hover:border-white/20 transition"
          title={label}
          aria-label={label}
        >
          <Icon className="h-3.5 w-3.5 opacity-90" />
          {label}
        </span>
      ))}
    </div>
  );
}

export default function SkillsSection() {
  const categories = [
    {
      category: "Languages",
      icons: [
        { label: "HTML5", Icon: SiHtml5 },
        { label: "CSS3", Icon: SiCss3 },
        { label: "JavaScript", Icon: SiJavascript },
        { label: "TypeScript", Icon: SiTypescript },
      ],
      items: "JavaScript, TypeScript",
    },
    {
      category: "Frontend",
      icons: [
        { label: "React", Icon: SiReact },
        { label: "Next.js", Icon: SiNextdotjs },
        { label: "Tailwind CSS", Icon: SiTailwindcss },
      ],
      items: "React, Next.js, Tailwind CSS",
    },
    {
      category: "Backend",
      icons: [
        { label: "Node.js", Icon: SiNodedotjs },
        { label: "Express", Icon: SiExpress },
        { label: "Prisma", Icon: SiPrisma },
        { label: "MongoDB", Icon: SiMongodb },
      ],
      items: "Node.js, Express, Prisma, MongoDB",
    },
    {
      category: "Infrastructure",
      icons: [
        { label: "Vercel", Icon: SiVercel },
        { label: "Docker", Icon: SiDocker },
        { label: "GitHub", Icon: SiGithub },
      ],
      items: "Vercel, Docker (basic), GitHub",
    },
    {
      category: "Testing",
      icons: [
        { label: "Jest", Icon: SiJest },
        { label: "Vitest", Icon: SiVitest },
      ],
      items: "Jest, Vitest (basic)",
    },
    {
      category: "Others",
      icons: [
        { label: "Cloudinary", Icon: SiCloudinary },
        { label: "Stripe", Icon: SiStripe },
        { label: "QPay", Icon: CreditCard },
      ],
      items: "Cloudinary, Stripe, QPay",
    },
  ];

  return (
    <section id="skills" className="space-y-8">

      <SectionHeading>Skills / Stack</SectionHeading>


      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch text-sm text-neutral-300">
        {categories.map((c) => (
          <li
            key={c.category}
            className="flex flex-col justify-between rounded-2xl border border-white/10
                       bg-neutral-900/40 p-5 text-center hover:bg-neutral-900/60
                       transition duration-300"
          >

            <div>
              <div className="text-sm text-neutral-400">{c.category}</div>
              <IconChips list={c.icons} className="mt-3" />
            </div>


            <p
              className="mt-6 text-center text-[17px] sm:text-lg leading-6
                         font-medium text-neutral-200 tracking-normal"
            >
              {c.items}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
