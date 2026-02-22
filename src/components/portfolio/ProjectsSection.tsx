import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern online store with cart, checkout, payment integration, and a powerful admin dashboard for managing products and orders.",
    tags: ["Next.js", "Laravel", "Tailwind", "MySQL"],
    github: "#",
    live: "#",
    gradient: "bg-hero-gradient",
    tagColor: "text-primary",
  },
  {
    title: "Task Management App",
    description:
      "Intuitive project management tool with drag-and-drop kanban boards, real-time collaboration, and team workflow automation.",
    tags: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
    gradient: "bg-cool-gradient",
    tagColor: "text-cyan",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard with interactive charts, custom reports, filterable datasets, and responsive real-time metrics.",
    tags: ["React.js", "Recharts", "Tailwind", "REST API"],
    github: "#",
    live: "#",
    gradient: "bg-warm-gradient",
    tagColor: "text-warm",
  },
  {
    title: "Social Media App",
    description:
      "A feature-rich social platform with user profiles, news feeds, messaging, notifications, and content moderation tools.",
    tags: ["Next.js", "Laravel", "WebSocket", "Redis"],
    github: "#",
    live: "#",
    gradient: "bg-mixed-gradient",
    tagColor: "text-accent",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-warm-gradient opacity-[0.07] blob blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-warm-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          Featured <span className="text-gradient-warm">work</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl">
          A selection of projects I've built — from e-commerce to real-time apps.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-card border border-border hover:border-primary/30 p-7 transition-all hover:shadow-xl hover:-translate-y-1"
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
