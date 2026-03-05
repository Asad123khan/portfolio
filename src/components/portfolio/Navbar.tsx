import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass" data-aos="fade-down">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold tracking-tight">
          <span className="text-gradient-hero">Asad</span>
          <span className="text-foreground">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a
              href="#contact"
              className="text-sm font-semibold bg-hero-gradient text-primary-foreground px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-shadow"
            >
              Hire Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-border" data-aos="fade-down" data-aos-duration="450">
          <ul className="flex flex-col items-center gap-2 py-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-2 rounded-full hover:bg-muted transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
