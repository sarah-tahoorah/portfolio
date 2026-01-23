import { Navbar } from "@/components/portfolio/Navbar";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { CertificationsSection } from "@/components/portfolio/CertificationsSection";
import { StrengthsSection } from "@/components/portfolio/StrengthsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <StrengthsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
