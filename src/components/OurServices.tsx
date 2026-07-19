"use client";

import {
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Cloud,
  ShieldCheck,
  Code2,
  BrainCircuit,
  Palette,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function OurServices() {
  const services = [
    {
      id: "1",
      title: "Data Analytics & BI",
      icon: BarChart3,
      description:
        "Transform raw enterprise data into actionable business intelligence, custom KPI dashboards, and automated forecasting models.",
    },
    {
      id: "2",
      title: "Cloud & DevOps Solutions",
      icon: Cloud,
      description:
        "High-availability cloud architecture, CI/CD pipeline automation, serverless scaling, and Kubernetes cluster orchestration.",
    },
    {
      id: "3",
      title: "Cyber Security & Auditing",
      icon: ShieldCheck,
      description:
        "End-to-end security penetration testing, SOC2 compliance auditing, zero-trust architecture, and real-time threat mitigation.",
    },
    {
      id: "4",
      title: "Web & Product Engineering",
      icon: Code2,
      description:
        "Full-stack Next.js and Node.js web applications built for speed, SEO excellence, and enterprise-grade performance.",
    },
    {
      id: "5",
      title: "AI & Workflow Automation",
      icon: BrainCircuit,
      description:
        "Custom LLM integrations, AI agent development, automated workflow pipelines, and predictive machine learning models.",
    },
    {
      id: "6",
      title: "Brand Strategy & UI/UX",
      icon: Palette,
      description:
        "World-class design systems, interactive prototypes, user research, and comprehensive brand identity packages.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 bg-card/60 border-t border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Our Services
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                Explore what services <br className="hidden sm:block" /> We're offering
              </h2>
            </div>

            {/* Top-Right Slider Arrow Buttons */}
            <div className="flex items-center gap-3 relative">
              <CarouselPrevious className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
              <CarouselNext className="static translate-y-0 w-12 h-12 rounded-full border border-border bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all" />
            </div>
          </div>

          {/* 3-Card Carousel Grid using Shadcn Carousel */}
          <CarouselContent className="-ml-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <CarouselItem key={service.id} className="pl-4 md:basis-1/3">
                  <div className="group glass-panel bg-card p-6 sm:p-8 rounded-3xl border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col justify-between h-full">
                    <div>
                      {/* Neon Green Custom Icon Badge */}
                      <div className="w-14 h-14 rounded-2xl bg-secondary border border-border flex items-center justify-center text-primary mb-6 sm:mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <IconComponent className="w-7 h-7" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                        {service.description}
                      </p>
                    </div>

                    {/* Bottom View Details Action Link */}
                    <a
                      href="#contact"
                      className="pt-6 border-t border-border/40 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors"
                    >
                      <span>VIEW DETAILS</span>
                      <span className="w-9 h-9 rounded-full bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
