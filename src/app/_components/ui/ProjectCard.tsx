"use client";
import { Globe } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  stack: string[];
  description: string;
  github?: string;
  live?: string;
}

export default function ProjectCard({
  title,
  stack,
  description,
  github,
  live,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative group rounded-2xl p-[1px] h-full"       
    >

      <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#10b98133,transparent_30%,#a855f733,transparent_70%)] opacity-50 blur-[2px] group-hover:opacity-80 transition-opacity" />


      <div
        className="
          relative rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm
          p-5 group-hover:border-white/20 group-hover:bg-neutral-900/80 transition-colors
          flex flex-col h-full                                      /* ⬅️ Доторхоо баганадана */
          min-h-[220px]                                             /* ⬅️ (сонголттой) бүх картанд доод хэмжээ */
        "
      >
        <div className="mb-2 text-sm text-neutral-400">{stack.join(" • ")}</div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>


        <p className="text-neutral-300 mb-4 min-h-[48px]">       
          {description}
        </p>


        <div className="mt-auto flex gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition"
            >
              <SiGithub className="h-5 w-5" />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500 hover:bg-emerald-500/10 transition"
            >
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
