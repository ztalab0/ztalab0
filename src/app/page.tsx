import MouseFollower from "@/components/MouseFollower";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import AboutSection from "@/components/AboutSection";
import CompletedProjects from "@/components/CompletedProjects";
import OurServices from "@/components/OurServices";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ImpactStats from "@/components/ImpactStats";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <MouseFollower />
      <Navbar />
      <Hero />
      <BrandMarquee />
      <AboutSection />
      {/* Completed Projects moved UP */}
      <CompletedProjects />
      {/* Our Services moved DOWN */}
      <OurServices />
      <TestimonialsSection />
      <TeamSection />
      <ImpactStats />
      {/* Contact Us Form added */}
      <ContactSection />
      {/* Simplified Footer */}
      <Footer />
    </main>
  );
}
