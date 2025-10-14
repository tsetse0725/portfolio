"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownToLine, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-8"
    >

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-500/8 via-transparent to-purple-700/8" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-3xl text-center sm:text-left"
      >

        <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-emerald-400 to-purple-500 bg-clip-text text-transparent">
          Full-Stack Developer
        </p>


        <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-white leading-tight">
          Сайн байна уу, намайг Цэцэн гэдэг.
        </h1>

        <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">
          Би програм хангамжийн чиглэлээр суралцаж байгаа бөгөөд өмнө нь борлуулалт,
          үйлчилгээний салбарт 10 гаруй жил ажилласан туршлагатай. Хүмүүс болон технологийг
          холбосон ухаалаг шийдэл бүтээхийг зорьдог.
        </p>


        <div className="mt-8 flex flex-wrap gap-3">
          <motion.a
            href="/cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CV татаж авах"
            whileHover={reduceMotion ? undefined : { scale: 1.04 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5
                       border-emerald-500/40 text-emerald-400 font-medium
                       hover:border-emerald-500 hover:text-emerald-300 hover:bg-emerald-500/10
                       transition-colors"
          >
            <ArrowDownToLine className="h-5 w-5" />
            Download CV
          </motion.a>

          <a
            href="#projects"
            aria-label="Projects хэсэг рүү очих"
            className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5
                       border-white/15 text-neutral-200 hover:text-white hover:bg-white/10 hover:border-white/30
                       transition-colors"
          >
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
