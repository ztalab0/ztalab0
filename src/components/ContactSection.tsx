"use client";

import { useState } from "react";
import {
  Sparkles,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Development",
    budget: "$10k-$25k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Web Development",
    "Brand Strategy",
    "AI Automation",
    "UI/UX Design",
    "Cloud DevOps",
  ];

  const budgets = ["<$10k", "$10k-$25k", "$25k-$50k", "$50k+"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Let's Connect
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Start Your Next Project With Us
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            Have a project in mind or need expert technical consultation? Send us a message and our team will reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel bg-card p-6 sm:p-8 rounded-3xl border border-border space-y-6 sm:space-y-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground border-b border-border/50 pb-4">
                Get In Touch Direct
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Us
                  </span>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">hello@ztalab.com</p>
                  <p className="text-xs text-gray-400">Response time: &lt; 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Call Us
                  </span>
                  <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">(603) 555-0123</p>
                  <p className="text-xs text-gray-400">Direct Client Line</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Headquarters
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-foreground mt-0.5 leading-snug">
                    House 178/196, Avenue 01, Uttara DOHS, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-border/50">
                <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center shrink-0 border border-border">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Working Hours
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                    Monday - Friday: 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-panel bg-card p-6 sm:p-10 rounded-3xl border border-border shadow-2xl relative">
              {submitted ? (
                <div className="py-12 sm:py-16 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto border-2 border-primary">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground">Message Received!</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. A dedicated project strategist from ZTA LAB will review your inquiry and connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        service: "Web Development",
                        budget: "$10k-$25k",
                        message: "",
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-secondary text-foreground text-xs font-bold hover:bg-border transition-colors border border-border"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Service Needed Selection Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                      Service Required
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: item })}
                          className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                            formData.service === item
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                              : "bg-background text-gray-300 border border-border hover:border-muted-foreground"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Budget Selection Pills */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                      Estimated Budget Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 rounded-xl text-xs font-bold transition-all text-center ${
                            formData.budget === b
                              ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                              : "bg-background text-gray-300 border border-border hover:border-muted-foreground"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Message Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project objectives, timeline, and key requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 sm:py-4 rounded-xl bg-primary text-primary-foreground font-extrabold text-sm tracking-wider hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
