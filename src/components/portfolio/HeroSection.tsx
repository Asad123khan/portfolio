import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:asad@example.com", label: "Email" },
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Colorful decorative blobs */}
      <div className="absolute top-20 right-[-5%] w-[500px] h-[500px] bg-hero-gradient opacity-15 blob blur-3xl" />
      <div className="absolute bottom-10 left-[-8%] w-[400px] h-[400px] bg-cool-gradient opacity-15 blob-2 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-warm-gradient opacity-[0.06] rounded-full blur-3xl" />

      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Available for work
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-6">
              Hi, I'm{" "}
              <span className="text-gradient-hero">Asad</span>
              <br />
              <span className="text-gradient-cool">Ullah</span>
              <span className="text-warm">.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
              Frontend Developer
            </p>

            <p className="text-base text-muted-foreground max-w-lg mb-8 leading-relaxed">
              I specialize in <span className="text-primary font-semibold">React.js</span> &{" "}
              <span className="text-secondary font-semibold">Next.js</span> — crafting pixel-perfect,
              high-performance web apps that users love. I also work with{" "}
              <span className="text-rose font-semibold">Laravel</span> to deliver full-stack solutions.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="bg-hero-gradient text-primary-foreground px-8 py-3.5 rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-primary/20 transition-shadow"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="glass px-8 py-3.5 rounded-full font-semibold text-sm text-foreground hover:shadow-lg transition-shadow"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Right - creative visual card */}
          <div className="hidden lg:block relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-4 bg-hero-gradient rounded-3xl rotate-6 opacity-20" />
              <div className="absolute inset-4 bg-cool-gradient rounded-3xl -rotate-3 opacity-15" />

              {/* Main card */}
              <div className="relative glass rounded-3xl p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-8">
                    <div className="w-3 h-3 rounded-full bg-rose" />
                    <div className="w-3 h-3 rounded-full bg-warm" />
                    <div className="w-3 h-3 rounded-full bg-accent" />
                  </div>
                  <pre className="font-mono text-sm leading-loose text-muted-foreground">
                    <code>
                      <span className="text-secondary">const</span>{" "}
                      <span className="text-primary">developer</span> = {"{\n"}
                      {"  "}name: <span className="text-accent">"Asad Ullah"</span>,{"\n"}
                      {"  "}role: <span className="text-accent">"Frontend Dev"</span>,{"\n"}
                      {"  "}skills: [
                      {"\n    "}
                      <span className="text-rose">"React"</span>,{" "}
                      <span className="text-warm">"Next.js"</span>,
                      {"\n    "}
                      <span className="text-primary">"Laravel"</span>,{" "}
                      <span className="text-cyan">"TypeScript"</span>
                      {"\n  "}],{"\n"}
                      {"  "}passion: <span className="text-accent">"Building web"</span>,{"\n"}
                      {"  "}coffee: <span className="text-warm">true</span>{"\n"}
                      {"}"};
                    </code>
                  </pre>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                    AU
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Asad Ullah</p>
                    <p className="text-xs text-muted-foreground">React • Next.js • Laravel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
