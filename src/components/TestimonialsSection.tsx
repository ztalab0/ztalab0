"use client";

import { Star, Sparkles, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "1",
      name: "Sarah Sanders",
      role: "VP of Product, FinTech Global",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content:
        "ZTA LAB transformed our legacy web architecture into a lightning-fast Next.js application. Their attention to design detail and engineering precision exceeded all expectations.",
      rating: 5,
    },
    {
      id: "2",
      name: "Marcus Vance",
      role: "Founder & CEO, Nexus Tech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content:
        "Working with ZTA LAB was seamless from day one. They delivered our AI workflow platform 2 weeks ahead of schedule with flawless reliability.",
      rating: 5,
    },
    {
      id: "3",
      name: "Elena Rostova",
      role: "Chief Marketing Officer, Aura Luxe",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      content:
        "Our conversion rate jumped 140% post-rebrand. Their creative vision combined with technical execution is truly world-class.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Our Client Feedback
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                What Our Partners Say About Us
              </h2>
            </div>

            <div className="flex items-center gap-3 relative">
              <CarouselPrevious className="static translate-y-0 w-11 h-11 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md" />
              <CarouselNext className="static translate-y-0 w-11 h-11 rounded-full border border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-md" />
            </div>
          </div>

          <CarouselContent className="-ml-4">
            {testimonials.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2">
                <div className="glass-panel bg-card p-6 sm:p-8 rounded-3xl border border-border relative flex flex-col justify-between shadow-xl hover:border-primary/50 transition-all duration-300 h-full">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-border/60" />

                  <div>
                    <div className="flex items-center gap-1 text-primary mb-6">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    <p className="text-base sm:text-lg text-gray-200 leading-relaxed italic mb-8">
                      "{item.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full border-2 border-primary object-cover"
                    />
                    <div>
                      <h4 className="text-base font-bold text-foreground">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
