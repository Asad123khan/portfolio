import { Suspense, lazy } from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import Navbar from "@/components/portfolio/Navbar";
import ScrollToTopButton from "@/components/portfolio/ScrollToTopButton";

const AboutSection = lazy(() => import("@/components/portfolio/AboutSection"));
const SkillsSection = lazy(() => import("@/components/portfolio/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/portfolio/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </Suspense>
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
