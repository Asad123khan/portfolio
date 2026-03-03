import { Code2, Layers, Zap, Palette } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Architecture", desc: "Scalable, maintainable code that stands the test of time.", color: "primary" },
  { icon: Layers, title: "Frontend Focus", desc: "Production-ready React and Next.js interfaces with strong component architecture.", color: "secondary" },
  { icon: Zap, title: "Performance First", desc: "Lightning-fast experiences optimized for every device.", color: "warm" },
  { icon: Palette, title: "UI Consistency", desc: "Responsive, accessible, and user-centric interfaces across browsers and devices.", color: "accent" },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  warm: "bg-warm/10 text-warm",
  accent: "bg-accent/10 text-accent",
};

const borderMap: Record<string, string> = {
  primary: "hover:border-primary/40",
  secondary: "hover:border-secondary/40",
  warm: "hover:border-warm/40",
  accent: "hover:border-accent/40",
};

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Background accent */}
      <div className="absolute right-0 top-0 hidden h-[260px] w-[260px] bg-mixed-gradient opacity-10 blur-2xl sm:block lg:h-[300px] lg:w-[300px] lg:blur-3xl blob" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-hero-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
        </div>
        <h2 className="mb-8 text-3xl font-display font-bold text-foreground sm:mb-10 sm:text-4xl md:text-5xl lg:mb-12">
          Passionate about<br />
          <span className="text-gradient-hero">building the web</span>
        </h2>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm <span className="text-foreground font-semibold">Asad Ullah</span>, a frontend engineer with 3+ years of
              professional experience building production-ready web applications using React.js and Next.js.
              I focus on scalable UI architecture, performance, and maintainable code.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I’ve delivered travel, financial, and e-commerce platforms, collaborating closely with backend teams,
              integrating REST APIs, and shipping real-world features for active users. My experience includes improving
              Lighthouse performance scores from 65 to 90+ and reducing frontend error rates in API handling.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I specialize in frontend technologies and templating workflows, including Laravel Blade for UI rendering,
              while keeping my core focus on modern frontend engineering with clean, responsive, and accessible interfaces.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-4 pt-4 sm:gap-6 sm:pt-6">
              {[
                { num: "3+", label: "Years Experience", color: "text-gradient-hero" },
                { num: "90+", label: "Lighthouse Score", color: "text-gradient-cool" },
                { num: "35%", label: "Page Speed Boost", color: "text-gradient-warm" },
              ].map((stat) => (
                <div key={stat.label} className="min-w-[90px] text-center">
                  <p className={`text-2xl font-display font-bold sm:text-3xl ${stat.color}`}>{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
            {highlights.map((item) => (
              <div
                key={item.title}
                className={`group p-5 rounded-2xl bg-card border border-border ${borderMap[item.color]} transition-all hover:shadow-lg cursor-default`}
              >
                <div className={`w-10 h-10 rounded-xl ${colorMap[item.color]} flex items-center justify-center mb-3`}>
                  <item.icon size={20} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
