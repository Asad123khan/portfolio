import { useEffect, useState } from "react";
import AOS from "aos";
import { ExternalLink, Folder, Github } from "lucide-react";
import tourazImage from "../../assets/touraz.png";
import mytechworth from "../../assets/mytechworth.png";
import awnFinance from "../../assets/awnFinance.png";
import ticketPool from "../../assets/ticketPool.png";
import qeemahProperty from "../../assets/qeemahProperty.png";
import sullis from "../../assets/sullis.png";
import youmiTech from "../../assets/youmiTech.png";

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  image: string;
  gradient: "bg-hero-gradient" | "bg-cool-gradient" | "bg-warm-gradient";
  tagColor: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Travel Ticket Booking Platforms (Touraz Travels & Wings Travels)",
    category: "TravelTech",
    description:
      "Built complete frontend for Touraz Travels and Wings Travels, including public websites and admin dashboards with dynamic routing and smooth booking experiences.",
    tags: ["Next.js", "React", "JavaScript", "SCSS", "Bootstrap", "REST API"],
    image: tourazImage,
    gradient: "bg-hero-gradient",
    tagColor: "text-primary",
    year: "2025",
  },
  {
    title: "E-Commerce Platform (mytechworth App)",
    category: "E-Commerce",
    description:
      "Developed full e-commerce frontend with product listings, cart workflows, dynamic product pages, and admin dashboard screens in a production-ready architecture.",
    tags: ["Next.js", "React", "JavaScript", "CSS/SCSS", "Bootstrap", "Responsive UI"],
    image: mytechworth,
    gradient: "bg-cool-gradient",
    tagColor: "text-cyan",
    year: "2025",
  },
  {
    title: "Financial Services Platform",
    category: "FinServ",
    description:
      "Designed and implemented secure, responsive frontend interfaces that improved user engagement through stronger UI structure and usability.",
    tags: ["HTML5", "CSS3", "JavaScript", "jQuery", "Laravel Blade"],
    image: awnFinance,
    gradient: "bg-warm-gradient",
    tagColor: "text-warm",
    year: "2024",
  },
  {
    title: "Event Management Dashboard (Ticket Pool)",
    category: "EventTech",
    description:
      "Created a role-based dashboard for event operations with ticket inventory tracking, organizer tools, and streamlined management workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API", "Dashboard UI"],
    image: ticketPool,
    gradient: "bg-cool-gradient",
    tagColor: "text-cyan",
    year: "2025",
  },
  {
    title: "Qeemah Property",
    category: "PropTech",
    description:
      "Implemented a modern property platform UI for listings, inquiries, and detail-rich property pages optimized for mobile and desktop browsing.",
    tags: ["Next.js", "React", "SCSS", "Responsive UI", "SEO Pages"],
    image: qeemahProperty,
    gradient: "bg-hero-gradient",
    tagColor: "text-primary",
    year: "2024",
  },
  {
    title: "FinTech Website",
    category: "FinTech",
    description:
      "Delivered a high-conversion marketing and product experience for a fintech brand with reusable UI sections and consistent visual storytelling.",
    tags: ["Next.js", "React", "Animation", "Responsive UI", "Landing Pages"],
    image: sullis,
    gradient: "bg-warm-gradient",
    tagColor: "text-warm",
    year: "2024",
  },
  {
    title: "Vendor Management System",
    category: "SaaS",
    description:
      "Built a centralized vendor operations interface covering onboarding, status tracking, and performance views to simplify team workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Tables", "Form UX"],
    image: youmiTech,
    gradient: "bg-cool-gradient",
    tagColor: "text-cyan",
    year: "2025",
  },
];

const isValidLink = (url?: string) => Boolean(url && url !== "#");
const INITIAL_VISIBLE_PROJECTS = 4;

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, INITIAL_VISIBLE_PROJECTS);
  const hasMoreProjects = projects.length > INITIAL_VISIBLE_PROJECTS;

  useEffect(() => {
    AOS.refresh();
  }, [showAllProjects]);

  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="absolute right-0 top-20 hidden h-[280px] w-[280px] bg-warm-gradient opacity-[0.07] blur-2xl sm:block lg:h-[400px] lg:w-[400px] lg:blur-3xl blob" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3" data-aos="fade-right">
          <div className="h-1 w-12 bg-warm-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Projects</span>
        </div>
        <h2 className="mb-4 text-3xl font-display font-bold text-foreground sm:text-4xl md:text-5xl" data-aos="fade-up" data-aos-delay="80">
          Featured <span className="text-gradient-warm">work</span>
        </h2>
        <div className="mb-8 flex flex-wrap items-center gap-3 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-delay="140">
          <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
            Selected frontend work across travel, e-commerce, fintech, and operations platforms.
          </p>
          <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            {projects.length} shipped projects
          </span>
        </div>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl sm:p-6 lg:p-7"
              data-aos="fade-up"
              data-aos-delay={180 + index * 90}
            >
              <div className={`absolute top-0 left-6 right-6 h-1 ${project.gradient} rounded-b-full opacity-60`} />

              <div className="relative mb-5 overflow-hidden rounded-xl border border-border/50 bg-muted/20">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center justify-between mb-5 pt-2">
                <div className={`w-12 h-12 rounded-xl ${project.gradient} opacity-15 absolute top-4 left-4`} />
                <Folder size={28} className={project.tagColor} />
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="text-xs font-semibold uppercase tracking-wide">{project.year}</span>
                  <a
                    href={project.github}
                    className={`transition-colors ${isValidLink(project.github) ? "hover:text-foreground" : "pointer-events-none opacity-40"}`}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className={`transition-colors ${isValidLink(project.live) ? "hover:text-foreground" : "pointer-events-none opacity-40"}`}
                    aria-label="Live"
                    target="_blank"
                    rel="noreferrer"
                  >
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
            </article>
          ))}
        </div>

        {hasMoreProjects && !showAllProjects && (
          <div className="mt-8 flex justify-center sm:mt-10">
            <button
              type="button"
              onClick={() => setShowAllProjects(true)}
              className="rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              Load more projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
