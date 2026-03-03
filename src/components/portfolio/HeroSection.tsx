import { AtSign, Github, Linkedin } from "lucide-react";

const navItems = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#projects" },
];

const socials = [
  { icon: AtSign, href: "mailto:asadullahkhan814@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/Asad123khan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/asad-ullah-b64976ba", label: "LinkedIn" },
];

// const PROFILE_IMAGE = "";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-foreground">
      <div className="absolute inset-0 bg-muted md:hidden" />
      <div
        className="absolute inset-y-0 left-0 hidden w-[64%] bg-muted md:block"
        style={{ clipPath: "polygon(0 0, 78% 0, 65% 100%, 0 100%)" }}
      />

      <div className="relative z-10 min-h-[100svh] px-4 sm:px-6 lg:px-12">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-[1200px] flex-col justify-between py-5 sm:py-7 lg:py-8">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-xl font-display font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
              AU
            </a>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-background lg:gap-10 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition-opacity hover:opacity-80">
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-background px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-foreground"
              >
                Contact me
              </a>
            </nav>
          </div>

          <nav className="mt-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-foreground md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full bg-background/60 px-3 py-1.5 transition-opacity hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-background"
            >
              Contact
            </a>
          </nav>

          <div className="grid items-center gap-8 pb-6 pt-8 sm:gap-10 sm:pt-10 md:grid-cols-2 lg:gap-8 lg:pb-0 lg:pt-0">
            <div className="max-w-xl self-center lg:pb-16">
              <p className="mb-3 text-2xl font-semibold text-foreground sm:mb-4 sm:text-3xl lg:mb-6 lg:text-5xl">Hi, I am</p>
              <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-7xl">Asad Ullah</h1>
              <p className="mt-2 text-base font-semibold text-muted-foreground sm:mt-3 sm:text-md lg:text-2xl">
                Frontend Engineer — React.js & Next.js
              </p>

              <div className="mt-7 flex items-center gap-3 sm:mt-10 sm:gap-4 lg:mt-12">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded bg-background/50 text-foreground transition-colors hover:bg-background sm:h-11 sm:w-11"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto h-[300px] w-full max-w-[320px] sm:h-[360px] sm:max-w-[380px] lg:h-full lg:min-h-[520px] lg:max-w-none">
              <img
                src="/profile-768.webp"
                srcSet="/profile-420.webp 420w, /profile-768.webp 768w, /profile-1200.webp 1200w"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 520px"
                alt="Developer portrait"
                width={650}
                height={920}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain lg:h-[92%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
