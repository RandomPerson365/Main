import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/app/data/caseStudies';

export const metadata = {
  title: 'Success Stories | SiteGrow India',
  description: 'Case studies from cafes, restaurants, and hotels that grew with better websites.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 sm:py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Success Stories</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real hospitality businesses in India that improved bookings, orders, and monthly revenue.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {[
            { label: 'Businesses served', value: '50+' },
            { label: 'Average direct booking growth', value: '+80%' },
            { label: 'Average monthly order uplift', value: '+65%' },
            { label: 'Support response', value: '<4 hrs' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-lg border border-border bg-card p-5">
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
