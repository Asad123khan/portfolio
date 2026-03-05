const skillCategories = [
  {
    title: "Frontend Frameworks",
    color: "primary" as const,
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 90 },
      { name: "Redux / Redux Toolkit", level: 70 },
      { name: "React Router", level: 88 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 75 },
      { name: "HTML5 / CSS3 / SCSS", level: 90 },
    ],
  },
  {
    title: "UI & Integration",
    color: "secondary" as const,
    skills: [
      { name: "REST API Integration", level: 90 },
      { name: "Laravel Blade (Templating)", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 95 },
      { name: "Material UI", level: 85 },
      { name: "Ant Design", level: 85 },
      { name: "Responsive / Cross-Browser UI", level: 90 },
    ],
  },
  {
    title: "Tools & Workflow",
    color: "accent" as const,
    skills: [
      { name: "Git & GitHub (Version Control)", level: 90 },
      { name: "CI/CD & Deployment (Vercel)", level: 85 },
      { name: "Package Management (NPM / Yarn)", level: 90 },
      { name: "Agile / Scrum Workflow", level: 85 },
      { name: "Figma to Code Conversion", level: 85 },
      { name: "Performance Optimization", level: 88 },
      { name: "Team Collaboration", level: 90 },
    ],
  },
];

const gradientMap = {
  primary: "bg-hero-gradient",
  secondary: "bg-warm-gradient",
  accent: "bg-mixed-gradient",
};

const bgMap = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  accent: "bg-accent/10",
};

const textMap = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="section-alt relative overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <div className="absolute bottom-0 left-0 hidden h-[280px] w-[280px] bg-hero-gradient opacity-[0.06] blur-2xl sm:block lg:h-[400px] lg:w-[400px] lg:blur-3xl blob-2" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3" data-aos="fade-right">
          <div className="h-1 w-12 bg-cool-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Skills
          </span>
        </div>
        <h2 className="mb-8 text-3xl font-display font-bold text-foreground sm:mb-10 sm:text-4xl md:text-5xl lg:mb-12" data-aos="fade-up" data-aos-delay="80">
          My <span className="text-gradient-cool">tech stack</span>
        </h2>

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="rounded-2xl border border-border bg-card p-5 transition-shadow hover:shadow-lg sm:p-6 lg:p-7"
              data-aos="fade-up"
              data-aos-delay={140 + index * 100}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-3 h-3 rounded-full ${gradientMap[category.color]}`}
                />
                <h3
                  className={`text-lg font-display font-bold ${textMap[category.color]}`}
                >
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${gradientMap[category.color]}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
