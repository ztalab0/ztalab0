"use client";

import { Sparkles, Phone, ArrowUp, Mail, MapPin, Globe, Share2, MessageCircle, Send } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border text-gray-300 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Logo & Quick Phone Callout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-border/60">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-foreground">
                ZTA<span className="text-primary">LAB</span>
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest -mt-1 font-semibold">
                Digital Agency
              </span>
            </div>
          </a>

          {/* Quick Call Callout Box */}
          <div className="flex items-center gap-4 bg-secondary/80 border border-border px-6 py-3.5 rounded-full shadow-lg">
            <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/40">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                Call Any Time
              </span>
              <a href="tel:6035550123" className="text-sm font-extrabold text-foreground hover:text-primary transition-colors">
                (603) 555-0123
              </a>
            </div>
          </div>
        </div>

        {/* Simplified Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12 border-b border-border/60">
          {/* Column 1: Agency Tagline & Direct Info */}
          <div className="md:col-span-5 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Empowering global businesses with high-impact web software, strategic brand identity, and scalable enterprise digital solutions.
            </p>
            <div className="space-y-2 pt-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>House 178/196, Avenue 01, Uttara DOHS, Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:hello@ztalab.com" className="hover:text-primary transition-colors">
                  hello@ztalab.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors">Completed Projects</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#team" className="hover:text-primary transition-colors">Meet Our Team</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">Get in Touch</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect & Socials */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Social Community
            </h4>
            <p className="text-xs text-muted-foreground">
              Follow our agency updates, design showcases, and open-source contributions.
            </p>
            <div className="flex items-center gap-3 text-gray-300">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ZTA LAB. All Rights Reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-foreground transition-colors">Terms & Conditions</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Privacy Policy</a>
            
            {/* Back To Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary text-primary hover:text-primary-foreground flex items-center justify-center border border-border transition-all shadow-lg ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
