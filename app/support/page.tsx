import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Support & Maintenance | SiteGrow India',
  description: 'Website support and maintenance plans for cafes and hotels.',
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Support & Maintenance</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Keep your site secure, updated, and running smoothly so you never lose business due to website issues.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {[
              'Regular content and offer updates',
              'Monthly technical checks and backups',
              'Speed and uptime monitoring',
              'Quick fixes for forms or booking issues',
              'Support over call, email, and WhatsApp',
              'Priority turnaround options',
            ].map((item) => (
              <div key={item} className="rounded-lg border border-border bg-card p-5 flex items-start">
                <CheckCircle size={18} className="text-primary mr-3 mt-1" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">Why owners choose this</h2>
            <p className="text-muted-foreground">Your team stays focused on operations while we handle website upkeep, updates, and fixes.</p>
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
