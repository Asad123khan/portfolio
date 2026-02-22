const skillCategories = [
  {
    title: "Frontend",
    color: "primary" as const,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    title: "Backend",
    color: "secondary" as const,
    skills: [
      { name: "Laravel", level: 85 },
      { name: "PHP", level: 82 },
      { name: "REST APIs", level: 88 },
      { name: "MySQL", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "PostgreSQL", level: 72 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "accent" as const,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 75 },
      { name: "Vercel", level: 85 },
      { name: "Docker", level: 60 },
      { name: "npm / yarn", level: 90 },
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
    <section id="skills" className="py-28 section-alt relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-hero-gradient opacity-[0.06] blob-2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-cool-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          My <span className="text-gradient-cool">tech stack</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-card border border-border p-7 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${gradientMap[category.color]}`} />
                <h3 className={`text-lg font-display font-bold ${textMap[category.color]}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
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
