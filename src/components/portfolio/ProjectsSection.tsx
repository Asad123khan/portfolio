import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online store built with Next.js and Laravel backend. Includes cart, checkout, payment integration, and admin dashboard.",
    tags: ["Next.js", "Laravel", "Tailwind CSS", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "A clean, intuitive project management tool with drag-and-drop boards, real-time updates, and team collaboration features.",
    tags: ["React.js", "TypeScript", "Node.js", "PostgreSQL"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Dashboard",
    description:
      "An analytics dashboard for tracking portfolio performance with interactive charts, data visualization, and responsive design.",
    tags: ["React.js", "Recharts", "Tailwind CSS", "REST API"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 section-alt">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mb-10" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-5">
                  <Folder size={28} className="text-primary" />
                  <div className="flex items-center gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
