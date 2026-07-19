"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CompletedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const projects: ProjectData[] = [
    {
      id: "1",
      title: "Digital Excellence for Modern Businesses",
      category: "App Development",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description:
        "A full-suite mobile and web application built for enterprise analytics, featuring real-time telemetry dashboard, offline sync, and bank-grade security protocols.",
      client: "Aura FinTech Global",
      year: "2026",
      tags: ["React Native", "TypeScript", "GraphQL", "TailwindCSS"],
      deliverables: [
        "iOS & Android App Suite",
        "Real-Time Analytics Engine",
        "Design System & Component UI",
        "Cloud API Integration",
      ],
    },
    {
      id: "2",
      title: "Building Bridges Between Brands And Audiences",
      category: "App Development",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      description:
        "Comprehensive brand identity transformation and interactive web portal for a global eCommerce pioneer, boosting conversion rates by 142%.",
      client: "Nexus Global Commerce",
      year: "2025",
      tags: ["Next.js 16", "TailwindCSS", "Framer Motion", "Stripe"],
      deliverables: [
        "Brand Guidelines & Identity",
        "High-Performance Web Portal",
        "Custom Checkout Flow",
        "SEO Optimization & Strategy",
      ],
    },
    {
      id: "3",
      title: "AI-Powered Automation for NextGen Enterprises",
      category: "AI Solutions",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      description:
        "Intelligent document classification and workflow automation suite powered by LLMs and predictive neural pipelines.",
      client: "Cipher Core Systems",
      year: "2026",
      tags: ["Python", "TensorFlow", "Next.js", "FastAPI"],
      deliverables: [
        "Custom LLM Fine-Tuning",
        "Interactive Admin Dashboard",
        "Automated OCR Extraction",
        "SOC2 Compliance Verification",
      ],
    },
    {
      id: "4",
      title: "Sustainable Brand Architecture & Ecosystem",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      description:
        "Strategic rebranding, packaging design, and 3D motion identity for an eco-conscious luxury lifestyle brand.",
      client: "Verde Living Group",
      year: "2025",
      tags: ["Brand Identity", "3D Motion Design", "Packaging", "UI/UX"],
      deliverables: [
        "Brand Book & Typography",
        "Interactive 3D Product Viewer",
        "Sustainable Packaging Assets",
        "Omnichannel Marketing Kit",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-3">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              Completed Projects
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-extrabold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 mb-8 sm:mb-10 pb-2 border-b border-border/40">
          {["All", "App Development", "Branding", "AI Solutions"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-105"
                  : "bg-card text-gray-300 border border-border hover:border-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Official Shadcn Carousel Component */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {filteredProjects.map((project) => (
              <CarouselItem key={project.id} className="pl-4 md:basis-1/2">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-1.5 shadow-xl flex flex-col h-full"
                >
                  {/* Project Visual Image */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  </div>

                  {/* Floating Bottom Card Banner */}
                  <div className="p-6 sm:p-8 bg-card -mt-10 relative z-10 flex flex-col justify-between flex-1 border-t border-border/40">
                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </h3>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">Click to view details</span>
                      <span className="w-10 h-10 rounded-full bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Shadcn Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12 relative">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
            <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
          </div>
        </Carousel>
      </div>

      {/* Project Details Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
