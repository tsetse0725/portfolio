"use client";

import AboutSection from "@/app/_components/AboutSection";
import SkillsSection from "@/app/_components/SkillsSection";
import ProjectsSection from "@/app/_components/ProjectsSection";
import ContactSection from "@/app/_components/ContactSection";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 space-y-32 text-neutral-100 font-sans">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>


      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative space-y-6"
      >
        <SkillsSection />
      </motion.section>


      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
        className="relative space-y-6"
      >
        <ProjectsSection />
      </motion.section>


      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative space-y-6"
      >
        <ContactSection />
      </motion.section>
    </main>
  );
}
