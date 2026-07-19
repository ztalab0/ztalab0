"use client";

import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    "Custom High-Performance Digital Products",
    "Data-Driven Marketing & Brand Acceleration",
    "Full-Cycle Engineering & AI Integration",
    "24/7 Enterprise Dedicated Support",
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Gallery Grid */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    alt="Team collaboration"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="glass-panel p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-black text-foreground">99.8%</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Project success rate & client retention benchmark.
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="glass-panel p-6 rounded-2xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                    <span className="text-2xl font-black text-foreground">10+ Yrs</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Delivering enterprise digital solutions globally.
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-border shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
                    alt="Strategy meeting"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Glowing Accent Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 blur-xl pointer-events-none" />
          </div>

          {/* Right Column: Text Overview */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-4">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                About Our Agency
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight tracking-tight">
              ZTA LAB is a business that provides services related to online marketing & custom development.
            </h2>

            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              We bridge the gap between creative storytelling and robust technology. Whether you need to scale your web platform, revamp your brand identity, or integrate intelligent workflows, our team crafts bespoke solutions tailored for long-term impact.
            </p>

            <div className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-border/50 flex items-center gap-6">
              <a
                href="#contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Learn More About Us
              </a>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">Award Winning Agency</span>
                <span className="text-xs text-muted-foreground">Clutch & Awwwards Recognized</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
