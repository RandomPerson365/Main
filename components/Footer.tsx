import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border overflow-hidden mt-20">
      {/* Background Grid and Glow */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 glass-card mx-4 rounded-t-2xl border-b-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow-pulse group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-xl font-bold text-gradient">Serverstack</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building next-generation digital experiences for Indian businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 border-b border-border/50 pb-2 inline-block">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/services#design" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services#development" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 border-b border-border/50 pb-2 inline-block">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors flex items-center group">
                  <span className="w-0 h-[1px] bg-primary mr-0 group-hover:w-3 group-hover:mr-2 transition-all" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 border-b border-border/50 pb-2 inline-block">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:hello@serverstack.co"
                className="flex items-center space-x-2 hover:text-primary transition-colors group"
              >
                <Mail size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                <span>hello@serverstack.co</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="p-2 border border-border/50 hover:border-primary text-muted-foreground hover:text-primary rounded-lg hover:shadow-[0_0_15px_oklch(0.72_0.19_195/0.2)] transition-all bg-background/50"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 border border-border/50 hover:border-primary text-muted-foreground hover:text-primary rounded-lg hover:shadow-[0_0_15px_oklch(0.72_0.19_195/0.2)] transition-all bg-background/50"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>
            &copy; {currentYear} Serverstack. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
