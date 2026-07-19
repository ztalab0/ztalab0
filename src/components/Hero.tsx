"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Star, Share2, Globe, MessageCircle, Send } from "lucide-react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: (
        <>
          Fuel Your Business Growth with{" "}
          <span className="text-primary drop-shadow-[0_0_20px_rgba(38,224,156,0.3)]">
            Creative
          </span>{" "}
          Solutions
        </>
      ),
      subtitle:
        "We specialize in delivering cutting-edge digital experiences, brand strategy, and web applications tailored to transform your vision into reality.",
    },
    {
      title: (
        <>
          Drive Your Business Forward with{" "}
          <span className="text-primary drop-shadow-[0_0_20px_rgba(38,224,156,0.3)]">
            Innovative
          </span>{" "}
          Solutions
        </>
      ),
      subtitle:
        "Partner with our agency to accelerate growth, leverage AI automation, and dominate your market with high-performance software.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-background">
      {/* Background Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-secondary/80 rounded-full blur-[100px] pointer-events-none" />

      {/* Left Vertical Social Sidebar (matching demo 3) */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5">
        <span className="text-[11px] font-bold tracking-[0.25em] text-muted-foreground uppercase [writing-mode:vertical-lr] rotate-180">
          FOLLOW US
        </span>
        <div className="w-[1px] h-12 bg-border" />
        <div className="flex flex-col gap-4 text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-card"
          >
            <Globe className="w-4 h-4" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-card"
          >
            <Share2 className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-card"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-card"
          >
            <Send className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Auto Slider Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Leading Digital Agency
              </span>
            </div>

            {/* Title with Smooth Dynamic Slide Transition */}
            <div className="min-h-[160px] sm:min-h-[200px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight transition-all duration-700">
                {slides[currentSlide].title}
              </h1>
            </div>

            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons (matching demo 3) */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-extrabold text-sm tracking-wider hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-primary/25"
              >
                GET IN TOUCH
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-3 bg-card hover:bg-secondary border border-border text-foreground px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300 group hover:border-muted-foreground"
              >
                <span>EXPLORE MORE</span>
                <span className="w-7 h-7 rounded-full bg-secondary group-hover:bg-primary text-primary group-hover:text-primary-foreground flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </div>

            {/* Stat Counter Indicators (matching demo 3) */}
            <div className="mt-12 pt-8 border-t border-border/50 grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-md">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">7K</span>
                  <span className="text-3xl font-extrabold text-primary">+</span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mt-1">
                  OUR SATISFIED CUSTOMERS
                </span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-foreground">3K</span>
                  <span className="text-3xl font-extrabold text-primary">+</span>
                </div>
                <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mt-1">
                  COMPLETED PROJECTS
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Graphic Composition (matching demo 3 visual layout) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Glowing Circular Frame */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full p-3 bg-gradient-to-tr from-primary/40 via-secondary to-card shadow-2xl shadow-primary/20 border border-border">
              <div className="w-full h-full rounded-full overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Agency Digital Team"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Top-Right Floating Review Badge (matching demo 3) */}
            <div className="absolute top-0 right-0 sm:-right-4 glass-panel border border-border rounded-2xl p-3 sm:p-4 shadow-xl flex items-center gap-3 animate-pulse-glow">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                  alt="User 1"
                  className="w-8 h-8 rounded-full border-2 border-card object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="User 2"
                  className="w-8 h-8 rounded-full border-2 border-card object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                  alt="User 3"
                  className="w-8 h-8 rounded-full border-2 border-card object-cover"
                />
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-extrabold text-[10px] flex items-center justify-center border-2 border-card">
                  10k+
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-foreground mt-0.5">
                  Excellent 7,000+ Reviews
                </span>
              </div>
            </div>

            {/* Bottom-Left Overlapping Avatar Circular Graphic */}
            <div className="absolute -bottom-4 left-0 sm:left-4 glass-panel border border-border rounded-full p-2.5 shadow-2xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Agency Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pr-3">
                <p className="text-xs font-bold text-foreground">Innovation Leaders</p>
                <p className="text-[10px] text-muted-foreground">Top Rated Agency 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
