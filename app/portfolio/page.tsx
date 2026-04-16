import Link from 'next/link';
import { ArrowLeft, ArrowRight, Activity, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CaseStudyCard } from '@/components/CaseStudyCard';

const allCaseStudies = [
  {
    id: 'cafe-modernization',
    title: 'CyberChai - Digital Transformation',
    category: 'Cafe',
    description: 'Local tech-park cafe needed a zero-latency mobile ordering portal to eliminate physical queues.',
    result: 'Deployed hyper-speed PWA ordering system & backend queue algorithm.',
    image: '☕',
    metrics: [
      { label: 'Mobile Orders', value: '+185%' },
      { label: 'MoM Rev Delta', value: '+₹7.5L' },
    ],
  },
  {
    id: 'hotel-booking',
    title: 'Neon Oasis Resort - Booking Platform',
    category: 'Hotel',
    description: 'Boutique luxury resort required a high-conversion, OTA-bypassing booking engine.',
    result: 'Built real-time PMS-synced gateway with immersive digital twin previews.',
    image: '🏨',
    metrics: [
      { label: 'OTA Bypass', value: '+220%' },
      { label: 'Margin Saved', value: '₹18L/mo' },
    ],
  },
  {
    id: 'restaurant-launch',
    title: 'Spice Circuit - Brand Launch',
    category: 'Restaurant',
    description: 'Fusion dining concept needed massive pre-launch hype and waitlist infrastructure.',
    result: 'Launched viral waitlist engine with dynamic table reservation APIs.',
    image: '🍽️',
    metrics: [
      { label: 'Day 1 Locks', value: '450+' },
      { label: 'Waitlist DB', value: '25K+' },
    ],
  },
  {
    id: 'bakery-ecommerce',
    title: 'Quantum Bakes - Delivery Grid',
    category: 'Logistics',
    description: 'Legacy bakery scaling up to dark-store hyper-local delivery grid.',
    result: 'Developed central D2C core with Dunzo/Shadowfax API routing.',
    image: '🥐',
    metrics: [
      { label: 'D2C Volume', value: '+340%' },
      { label: 'Fulfillment', value: '22 mins' },
    ],
  },
  {
    id: 'spa-wellness',
    title: 'Zenica Wellness - Scheduler',
    category: 'Wellness',
    description: 'Premium spa chain required unified cross-branch scheduling architecture.',
    result: 'Implemented automated booking matrix with predictive staff allocation.',
    image: '💆',
    metrics: [
      { label: 'Digital Booking', value: '65%' },
      { label: 'No-Shows', value: '-82%' },
    ],
  },
  {
    id: 'retail-shop',
    title: 'Threads.io - Commerce Core',
    category: 'Retail',
    description: 'Offline fashion outlet pivoting to digital-first national sales model.',
    result: 'Engineered headless storefront synced with physical POS ledgers.',
    image: '👗',
    metrics: [
      { label: 'GMV Base', value: '₹45L/mo' },
      { label: 'Pincodes', value: '14,000+' },
    ],
  },
  {
    id: 'b2b-portal',
    title: 'Aero Components - B2B Hub',
    category: 'Enterprise',
    description: 'Manufacturing firm needed secure B2B procurement portal for automotive clients.',
    result: 'Created isolated authenticated terminal with ERP database bridging.',
    image: '🏭',
    metrics: [
      { label: 'PO Processing', value: '-48 hrs' },
      { label: 'Vendor Auth', value: '100% Digital' },
    ],
  },
  {
    id: 'fintech-dash',
    title: 'Kuber Analytics - Dashboard UI',
    category: 'Fintech',
    description: 'Wealth management startup required a high-density, low-latency client dashboard.',
    result: 'Built React-based data viz terminal with WebSocket market feeds.',
    image: '📈',
    metrics: [
      { label: 'Render MS', value: '<200ms' },
      { label: 'User Session', value: '+45 mins' },
    ],
  },
  {
    id: 'edtech-lms',
    title: 'Vidhya.ai - Learning Matrix',
    category: 'EdTech',
    description: 'Coaching institute needing scalable livestream and VOD delivery platform.',
    result: 'Deployed secure video streaming architecture with anti-piracy DRM.',
    image: '📚',
    metrics: [
      { label: 'CCU Peak', value: '10,000+' },
      { label: 'Bandwidth Saved', value: '45 TB/yr' },
    ],
  },
];

export const metadata = {
  title: 'Database | Serverstack - Operations',
  description: 'Unclassified operational data and impact telemetry from our Indian deployment history.',
};

export default function Portfolio() {
  const categories = ['ALL SYSTEMS', ...new Set(allCaseStudies.map((cs) => cs.category.toUpperCase()))];

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32 border-b border-border/30">
        <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full pointer-events-none animate-glow-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-secondary uppercase">Secure Database Connection Established</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Deployment <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Archives</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono text-sm animate-fade-in-up delay-200">
            // Accessing unclassified mission logs. Review impact metrics and architectural overviews from past client operations.
          </p>
        </div>
      </section>

      {/* Case Studies Base */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-radial-glow opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Filter GUI */}
          <div className="mb-16 flex flex-col items-center animate-fade-in-up">
            <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest border-b border-border/50 pb-2">Filter Network Nodes</p>
            <div className="flex flex-wrap gap-3 justify-center max-w-3xl">
              {categories.map((category, i) => (
                <button
                  key={category}
                  className={`px-5 py-2 text-xs font-mono tracking-wider rounded-md border transition-all duration-300 ${
                    i === 0 
                      ? 'bg-primary/20 border-primary text-primary shadow-[0_0_10px_oklch(0.72_0.19_195/0.2)]' 
                      : 'bg-background/50 border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Render */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCaseStudies.map((study, i) => (
              <div key={study.id} className={`animate-fade-in-up delay-${Math.min((i + 1) * 100, 800)}`}>
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Terminal */}
      <section className="py-24 relative overflow-hidden bg-background border-y border-border/30">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="absolute left-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-secondary to-transparent animate-scan-line" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Deployed Nodes', value: '50+' },
              { label: 'Network Uptime', value: '99.9%' },
              { label: 'Client ROI Avg', value: '+320%' },
              { label: 'Code Commits', value: '1.2M+' },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-8 border-t-2 border-t-primary/30 hover:border-t-primary transition-all text-center group">
                <p className="text-4xl sm:text-5xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50 mb-4 group-hover:scale-110 transition-transform">{stat.value}</p>
                <div className="w-12 h-[1px] bg-border mx-auto mb-4 group-hover:bg-secondary transition-colors" />
                <p className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
