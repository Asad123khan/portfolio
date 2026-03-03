import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Travel Ticket Booking Platforms",
    description:
      "Built complete frontend for Touraz Travels and Wings Travels, including public websites and admin dashboards with dynamic routing and smooth booking experiences.",
    tags: ["Next.js", "React", "JavaScript", "SCSS", "Bootstrap", "REST API"],
    github: "#",
    live: "#",
    gradient: "bg-hero-gradient",
    tagColor: "text-primary",
  },
  {
    title: "E-Commerce Platform (mytechworth App)",
    description:
      "Developed full e-commerce frontend with product listings, cart workflows, dynamic product pages, and admin dashboard screens in a production-ready architecture.",
    tags: ["Next.js", "React", "JavaScript", "CSS/SCSS", "Bootstrap", "Responsive UI"],
    github: "#",
    live: "#",
    gradient: "bg-cool-gradient",
    tagColor: "text-cyan",
  },
  {
    title: "Financial Services Platform",
    description:
      "Designed and implemented secure, responsive frontend interfaces that improved user engagement through stronger UI structure and usability.",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Laravel Blade"],
    github: "#",
    live: "#",
    gradient: "bg-warm-gradient",
    tagColor: "text-warm",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute right-0 top-20 hidden h-[280px] w-[280px] bg-warm-gradient opacity-[0.07] blur-2xl sm:block lg:h-[400px] lg:w-[400px] lg:blur-3xl blob" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-warm-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
        </div>
        <h2 className="mb-4 text-3xl font-display font-bold text-foreground sm:text-4xl md:text-5xl">
          Featured <span className="text-gradient-warm">work</span>
        </h2>
        <p className="mb-8 max-w-xl text-base text-muted-foreground sm:mb-10 sm:text-lg lg:mb-12">
          Selected frontend work across travel, e-commerce, and financial services platforms.
        </p>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-6 lg:p-7"
            >
              {/* Top gradient line */}
              <div className={`absolute top-0 left-6 right-6 h-1 ${project.gradient} rounded-b-full opacity-60`} />

              <div className="flex items-center justify-between mb-5 pt-2">
                <div className={`w-12 h-12 rounded-xl ${project.gradient} opacity-15 absolute top-4 left-4`} />
                <Folder size={28} className={project.tagColor} />
                <div className="flex items-center gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Live">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
