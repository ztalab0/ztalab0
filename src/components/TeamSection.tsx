"use client";

import { Sparkles, Globe, Share2, Send } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Mercer",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "David Vance",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Michael Sterling",
      role: "Head of Product Design",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Sophia Chen",
      role: "Lead AI Engineer",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section id="team" className="py-24 bg-card/80 border-t border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-background border border-border w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Legends
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
            Meet the Minds Behind ZTA LAB
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            A collective of passionate engineers, designers, and strategists committed to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group glass-panel bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/60 transition-all duration-500 hover:-translate-y-2 shadow-xl flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                {/* Active Indicator Dot */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 border border-border text-[10px] font-bold text-primary">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{member.role}</p>
                </div>

                <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-border/40 text-gray-400">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
