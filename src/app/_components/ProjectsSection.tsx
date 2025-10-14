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
      live: "https://food-delivery-pied-eta.vercel.app/",
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
