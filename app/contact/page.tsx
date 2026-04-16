'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, CheckCircle, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessType: '',
    businessName: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        businessType: '',
        businessName: '',
        message: '',
      });

      // Reset after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 border-b border-border/30">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-destructive uppercase border-b border-destructive/30 pb-1">Awaiting Transmission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connection</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono text-sm animate-fade-in-up delay-200">
            // Open a secure comms channel to discuss system architecture, timelines, and resource allocation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Info Widget */}
            <div className="lg:col-span-4 space-y-8 animate-slide-left">
              <div className="glass-card rounded-2xl p-8 border-t-2 border-t-primary/30">
                <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8 border-b border-border/50 pb-4">Terminal Coordinates</h2>

                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="p-3 bg-background/50 border border-border rounded-lg mr-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                      <Mail className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div className="mt-1">
                      <h3 className="text-xs font-mono tracking-widest uppercase text-foreground mb-1">Secure Channel</h3>
                      <a href="mailto:hello@serverstack.co" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        hello@serverstack.co
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3 bg-background/50 border border-border rounded-lg mr-4 group-hover:border-secondary/50 group-hover:bg-secondary/5 transition-all">
                      <Phone className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div className="mt-1">
                      <h3 className="text-xs font-mono tracking-widest uppercase text-foreground mb-1">Voice Comm</h3>
                      <a href="tel:+919876543210" className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="p-3 bg-background/50 border border-border rounded-lg mr-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                      <MapPin className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    </div>
                    <div className="mt-1">
                      <h3 className="text-xs font-mono tracking-widest uppercase text-foreground mb-1">Physical Node</h3>
                      <p className="text-sm font-medium text-muted-foreground">Koramangala, Bengaluru</p>
                      <p className="text-xs text-muted-foreground/70 mt-1 font-mono">Pan-India Remote Uplink</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Protocol info */}
              <div className="glass-card rounded-2xl p-6 border border-secondary/20 bg-secondary/5">
                <div className="flex items-center mb-4 text-secondary">
                  <Terminal size={16} className="mr-2" />
                  <h3 className="text-xs font-mono uppercase tracking-widest font-semibold">Standard Protocol</h3>
                </div>
                <ul className="space-y-3 text-sm text-foreground font-mono">
                  <li className="flex items-center"><span className="text-secondary mr-3 text-xs">{'>'}</span> Initial brief analysis</li>
                  <li className="flex items-center"><span className="text-secondary mr-3 text-xs">{'>'}</span> Architecture proposal</li>
                  <li className="flex items-center"><span className="text-secondary mr-3 text-xs">{'>'}</span> Timeline estimation</li>
                  <li className="flex items-center"><span className="text-secondary mr-3 text-xs">{'>'}</span> Resource allocation</li>
                </ul>
              </div>
            </div>

            {/* Contact Form GUI */}
            <div className="lg:col-span-8 animate-slide-right">
              <div className="glass-card rounded-2xl p-8 sm:p-12 relative overflow-hidden h-full border border-primary/20 shadow-[0_0_30px_oklch(0.72_0.19_195/0.05)]">
                {/* Decorative UI elements */}
                <div className="absolute top-0 right-0 p-4 opacity-30 flex space-x-2">
                  <div className="w-1 h-8 bg-primary rounded-full" />
                  <div className="w-1 h-6 bg-primary/50 rounded-full mt-2" />
                  <div className="w-1 h-4 bg-primary/30 rounded-full mt-4" />
                </div>
                
                <h2 className="text-2xl font-bold font-mono tracking-tight text-foreground mb-2">Initialize Data Transfer</h2>
                <p className="text-muted-foreground text-sm mb-10 border-b border-border/50 pb-6">// Form attributes required for proper routing</p>

                {submitted ? (
                  <div className="absolute inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-12 text-center z-20 animate-fade-in text-primary border-2 border-primary/50 rounded-2xl m-2">
                    <CheckCircle size={64} className="mb-6 animate-glow-pulse" />
                    <h3 className="text-2xl font-bold font-mono mb-4 uppercase tracking-widest">Transmission Successful</h3>
                    <p className="text-muted-foreground font-mono text-sm max-w-sm">
                      Payload received. Target nodes have been notified. Awaiting human verification within standard operational cycles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary mr-2 rounded-full"/> Alpha ID
                        </label>
                        <Input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 font-mono text-sm h-12 rounded-lg transition-colors placeholder:text-muted-foreground/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary mr-2 rounded-full"/> Beta ID
                        </label>
                        <Input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 font-mono text-sm h-12 rounded-lg transition-colors placeholder:text-muted-foreground/30"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-secondary mr-2 rounded-full"/> Comms Vector
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@domain.com"
                        required
                        className="bg-background/50 border-border/50 focus:border-secondary/50 font-mono text-sm h-12 rounded-lg transition-colors placeholder:text-muted-foreground/30"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary mr-2 rounded-full"/> Organization
                        </label>
                        <Input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Entity Name"
                          required
                          className="bg-background/50 border-border/50 focus:border-primary/50 font-mono text-sm h-12 rounded-lg transition-colors placeholder:text-muted-foreground/30"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center">
                          <span className="w-1 h-1 bg-primary mr-2 rounded-full"/> Sector Class
                        </label>
                        <div className="relative">
                          <select
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            required
                            className="w-full h-12 px-4 rounded-lg bg-background/50 border border-border/50 text-foreground text-sm font-mono focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 appearance-none cursor-pointer"
                          >
                            <option value="" disabled className="bg-background text-muted-foreground">Select Vector</option>
                            <option value="tech" className="bg-background">Technology/SaaS</option>
                            <option value="fnb" className="bg-background">F&B / Hospitality</option>
                            <option value="retail" className="bg-background">D2C / E-Commerce</option>
                            <option value="health" className="bg-background">Healthcare/Wellness</option>
                            <option value="other" className="bg-background">Null Class (Other)</option>
                          </select>
                          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-muted-foreground opacity-50">▼</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground flex items-center">
                        <span className="w-1 h-1 bg-primary mr-2 rounded-full"/> Payload Data
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="// Enter project specifications, stack requirements, or general telemetry..."
                        rows={5}
                        required
                        className="w-full px-4 py-4 rounded-lg bg-background/50 border border-border/50 text-foreground font-mono text-sm placeholder:text-muted-foreground/30 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-primary to-secondary/80 hover:to-secondary text-primary-foreground py-6 text-sm font-mono tracking-widest uppercase font-bold relative overflow-hidden group shadow-[0_0_20px_oklch(0.72_0.19_195/0.2)] hover:shadow-[0_0_30px_oklch(0.72_0.19_195/0.4)] transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
                      <span className="relative z-10 flex items-center justify-center">
                        {loading ? 'Transmitting...' : 'Execute Upload Sequence'}
                        {!loading && <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                      </span>
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Database Queries FAQ */}
      <section className="py-24 bg-muted/10 border-t border-border/30 relative">
        <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-xs font-mono text-secondary uppercase tracking-widest mb-3 border-b border-border/50 inline-block pb-2">Archived Queries</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
              Standard Interrogations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'What is the base resource allocation?',
                a: 'Core architectural deployments begin at ₹15,000 for foundational builds. Scaled enterprise nodes require custom SLA evaluations based on API throughput.',
              },
              {
                q: 'Estimated deployment cycle time?',
                a: 'Standard nodes reach beta within 4-6 weeks. Complex integrations requiring custom microservices operate on an 8-12 week release cycle.',
              },
              {
                q: 'Do you provide post-launch maintenance?',
                a: 'Affirmative. We offer stringent SLAs covering AWS/Vercel upkeep, automated chron jobs, package vulnerability patching, and code refactoring.',
              },
              {
                q: 'Is SEO telemetry included?',
                a: "Base nodes include structural DOM optimization. Advanced rank domination requires our Growth Telemetry protocol integration (billed separately).",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card border-border/50 rounded-xl p-8 hover:border-primary/40 transition-colors group">
                <h3 className="font-bold font-mono text-sm tracking-tight text-foreground mb-4 group-hover:text-primary transition-colors flex items-start">
                  <span className="text-secondary mr-2">{'>'}</span> {faq.q}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed border-l border-border/50 pl-4 ml-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
