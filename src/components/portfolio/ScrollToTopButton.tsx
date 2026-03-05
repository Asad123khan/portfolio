import { useEffect, useMemo, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsVisible(scrollTop > 220);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const progressBackground = useMemo(
    () =>
      `conic-gradient(hsl(var(--primary)) ${scrollProgress}%, hsl(var(--border)) ${scrollProgress}% 100%)`,
    [scrollProgress],
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-5 right-5 z-50 rounded-full p-[2px] shadow-lg transition-all duration-300 sm:bottom-6 sm:right-6 ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      style={{ background: progressBackground }}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-card text-primary transition-colors hover:text-foreground">
        <ArrowUp size={18} />
      </span>
    </button>
  );
};

export default ScrollToTopButton;
