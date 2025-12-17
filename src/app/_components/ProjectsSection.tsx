import SectionHeading from "@/app/_components/ui/SectionHeading";
import ProjectCard from "@/app/_components/ui/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Food Delivery",
      stack: ["Next.js", "Express", "MongoDB", "Cloudinary"],
      description:
        "Auth (JWT), ангилал/захиалга, зураг upload, admin dashboard.",
      github: "https://github.com/tsetse0725/food-delivery",
      live: "https://food-delivery-zeta-jet.vercel.app/",
    },
    {
      title: "Buy Me a Coffee",
      stack: ["Next.js", "Prisma", "PostgreSQL"],
      description:
        "Donation/payment flow, profile, dashboard (earnings, recent donations).",
      github: "https://github.com/tsetse0725/buy-me-coffee",
      live: "https://buy-me-coffee-bt8a.vercel.app/",
    },
    {
      title: "Weather App",
      stack: ["Next.js", "API Integration"],
      description: "Realtime weather info using OpenWeather API.",
      github: "https://github.com/tsetse0725/weather-app",
      live: "https://weather-app-five-delta-92.vercel.app/",
    },
    {
      title: "Todo Application",
      stack: ["Next.js", "Tailwind", "LocalStorage"],
      description: "CRUD todo list with responsive UI.",
      github: "https://github.com/tsetse0725/to-do-list-app",
      live: "https://to-do-list-app-one-gamma.vercel.app/",
    },
    {
      title: "Movie Web App",
      stack: ["Next.js", "TMDB API"],
      description: "Movie search, favorites, detail page.",
      github: "https://github.com/tsetse0725/movie-app",
      live: "https://movie-app-zeta-sage.vercel.app/",
    },
    {
      title: "Multi-step Form",
      stack: ["Next.js", "Tailwind"],
      description: "Validation, progress bar, success screen.",
      github: "https://github.com/tsetse0725/form",
      live: "https://form-dusky-psi.vercel.app/",
    },
{
  title: "Tic-Tac-Toe",
  stack: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion", "Playwright", "Vitest"],
  description:
    "PvP & Bot (minimax) горимтой, sound/haptics, accessibility, undo history, гоёмсог анимацтай. Vitest + Playwright тест, GitHub Actions CI.",
  github: "https://github.com/tsetse0725/tic-tac-toe",
  live: "https://tic-tac-toe-teal-delta-55.vercel.app/",
  highlights: [
    "AI: Minimax + move ordering",
    "Settings: sound/volume, bot delay, haptics",
    "A11y: keyboard навигац, aria roles",
    "CI: Vitest + Playwright (GitHub Actions)"
  ],
  roles: ["Frontend", "Testing/CI"],
  year: 2025
},
{
  title: "Music Player",
  stack: ["Next.js", "React", "TypeScript", "Tailwind", "Web Audio API"],
  description:
    "Audio playlist player with seek bar, shuffle/repeat, volume & mute controls, and a 3-band equalizer (bass/mid/treble). Built with Next.js App Router and clean component architecture.",
  github: "https://github.com/tsetse0725/music-player",
  live: "https://music-player-gules-five.vercel.app/",
  highlights: [
    "Playback: play/pause, seek, next/prev, playlist selection",
    "Modes: shuffle + repeat (off/all/one)",
    "Sound: volume slider + mute toggle",
    "EQ: 3-band equalizer using Web Audio API (BiquadFilterNode + GainNode)"
  ],
  roles: ["Frontend"],
  year: 2025
}
  ];

  return (
    <section id="projects" className="space-y-6">

      <SectionHeading>Projects</SectionHeading>


      <div
        className="
          grid gap-6 md:grid-cols-2
          items-stretch
          auto-rows-[1fr]
        "
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            description={p.description}
            stack={p.stack}
            github={p.github}
            live={p.live}
          />
        ))}
      </div>
    </section>
  );
}
