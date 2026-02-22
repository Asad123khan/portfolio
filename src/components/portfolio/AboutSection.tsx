import { Code2, Layers, Zap, Palette } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Architecture", desc: "Scalable, maintainable code that stands the test of time.", color: "primary" },
  { icon: Layers, title: "Full Stack Ready", desc: "Frontend mastery with solid backend skills in Laravel.", color: "secondary" },
  { icon: Zap, title: "Performance First", desc: "Lightning-fast experiences optimized for every device.", color: "warm" },
  { icon: Palette, title: "Design Eye", desc: "Pixel-perfect implementation bridging design and code.", color: "accent" },
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
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-mixed-gradient opacity-10 blob blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="h-1 w-12 bg-hero-gradient rounded-full" />
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-12">
          Passionate about<br />
          <span className="text-gradient-hero">building the web</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Asad Ullah</span>, a frontend developer
              with a deep passion for creating beautiful and functional web applications. With expertise in
              modern JavaScript frameworks, I turn complex requirements into elegant solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My toolkit spans from <span className="text-primary font-semibold">React.js</span> and{" "}
              <span className="text-secondary font-semibold">Next.js</span> on the frontend to{" "}
              <span className="text-rose font-semibold">Laravel</span> on the backend. I believe in writing
              code that's not just functional — but a joy to read and maintain.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects,
              and constantly pushing myself to grow as a developer. My mission? Building digital products
              that make real impact.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 pt-6">
              {[
                { num: "2+", label: "Years Experience", color: "text-gradient-hero" },
                { num: "20+", label: "Projects Done", color: "text-gradient-cool" },
                { num: "15+", label: "Happy Clients", color: "text-gradient-warm" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className={`text-3xl font-display font-bold ${stat.color}`}>{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
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
