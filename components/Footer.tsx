import Link from 'next/link';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-sm">PF</span>
              </div>
              <span className="text-xl font-bold">PixelForge</span>
            </div>
            <p className="text-sm opacity-90">
              Building beautiful websites for cafes, hotels, and growing businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#design" className="opacity-90 hover:opacity-100 transition">
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services#development" className="opacity-90 hover:opacity-100 transition">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="opacity-90 hover:opacity-100 transition">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="opacity-90 hover:opacity-100 transition">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/portfolio" className="opacity-90 hover:opacity-100 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:hello@pixelforge.co"
                className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition"
              >
                <Mail size={16} />
                <span>hello@pixelforge.co</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="#"
                  className="opacity-90 hover:opacity-100 transition p-2 hover:bg-primary-foreground/10 rounded"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="opacity-90 hover:opacity-100 transition p-2 hover:bg-primary-foreground/10 rounded"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-90">
            &copy; {currentYear} PixelForge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="opacity-90 hover:opacity-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="opacity-90 hover:opacity-100 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
