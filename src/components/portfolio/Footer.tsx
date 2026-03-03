import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Asad123khan", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/asad-ullah-b64976ba", label: "LinkedIn" },
  { icon: Mail, href: "mailto:asadullahkhan814@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 sm:py-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:gap-6 md:text-left">
          <a href="#home" className="text-xl font-display font-bold">
            <span className="text-gradient-hero">Asad</span>
            <span className="text-foreground">.</span>
          </a>

          <p className="flex flex-wrap items-center justify-center gap-1 text-sm text-muted-foreground md:justify-start">
            Built with <Heart size={14} className="text-rose fill-rose" /> by Asad Ullah © {new Date().getFullYear()}
          </p>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
