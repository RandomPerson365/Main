import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Professional Websites | Servestack',
  description: 'Professional website service for cafes, restaurants, and hotels.',
};

export default function WebsitesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Professional Websites</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Build trust instantly with a clear, modern website that helps customers choose your cafe or hotel faster.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              'Custom homepage tailored to your business',
              'Menu pages, room pages, and gallery setup',
              'Google Maps, call, and WhatsApp buttons',
              'Fast mobile-first performance for Indian users',
              'Lead form for direct inquiries',
              'Basic SEO for local discovery',
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card p-5 flex items-start">
                <CheckCircle size={18} className="text-primary mr-3 mt-1" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">Typical timeline</h2>
            <p className="text-muted-foreground">7-14 days based on content readiness. We support launch and post-launch updates.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground"><Link href="/contact">Get Started Now</Link></Button>
            <Button asChild variant="outline"><Link href="/pricing">See pricing</Link></Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
