import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:asad@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="text-xl font-display font-bold">
            <span className="text-gradient-hero">Asad</span>
            <span className="text-foreground">.</span>
          </a>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
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
