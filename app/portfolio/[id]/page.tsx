import Link from 'next/link';
import { ArrowLeft, ArrowRight, Activity, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const caseStudies: Record<
  string,
  {
    title: string;
    category: string;
    client: string;
    challenge: string;
    solution: string;
    results: Array<{ label: string; value: string; description: string }>;
    services: string[];
    testimonial: { text: string; author: string; role: string };
    fullDescription: string;
  }
> = {
  'cafe-modernization': {
    title: 'CyberChai - Digital Transformation',
    category: 'Cafe',
    client: 'CyberChai Technologies',
    challenge:
      'CyberChai was a high-traffic tech-park cafe struggling with extreme peak-hour loads. Their physical queues were turning away developers on short breaks, and their existing POS could not handle mobile pre-orders efficiently.',
    solution:
      'We deployed a hyper-speed web progressive app (PWA) allowing zero-latency ordering. Integrated directly with a custom backend queueing algorithm that predicts wait times and syncs with their kitchen displays in real-time.',
    results: [
      {
        label: '+185%',
        value: '+185%',
        description: 'Increase in mobile pre-orders',
      },
      {
        label: '+₹7,50K',
        value: '+₹7.5L',
        description: 'Monthly revenue baseline increase',
      },
      {
        label: 'Sub-second',
        value: '<1s',
        description: 'API response times under peak load',
      },
      {
        label: '2,100',
        value: '2,100',
        description: 'Active users onboarded in week 1',
      },
    ],
    services: ['PWA Development', 'Real-time Queuing Backend', 'Payment Gateway Integration'],
    testimonial: {
      text: 'Serverstack executed our digital transition flawlessly. The interface is stunning and the backend handles our peak load effortlessly. Outstanding tech.',
      author: 'Aarav Sharma',
      role: 'Founder, CyberChai',
    },
    fullDescription: `CyberChai is a tech-focused modern cafe located in the heart of Bengaluru's prime IT corridor.
    
## Mission Parameters

The core objective was eliminating queue friction during peak hours (1 PM - 3 PM) without disrupting kitchen workflow.

## System Architecture

1. **Frontend**: Next.js deployed on Vercel edge networks for sub-100ms apparent load times.
2. **Backend Engine**: A custom Node.js queueing system that calculates dynamic prep times based on current load, updating users in real-time via WebSockets.
3. **Payment Integrity**: Deep integration with Razorpay for instant UPI authentication and auto-reconciliation.

## Deployment Outcome

The system went live with zero downtime. Order processing efficiency increased radically, shifting 70% of peak traffic to the mobile portal and dissolving physical queues entirely.`,
  },
  'hotel-booking': {
    title: 'Neon Oasis Resort - Booking Platform',
    category: 'Hotel',
    client: 'Neon Oasis Luxury Resorts',
    challenge:
      'A premium boutique resort losing 18% margins to aggregators (OTAs) due to an underperforming direct booking portal that lacked modern UX and speed.',
    solution:
      'Engineered a high-conversion booking engine with secure payment rails and a real-time availability sync algorithm to prevent double-bookings across networks.',
    results: [
      {
        label: '+220%',
        value: '+220%',
        description: 'Surge in direct booking ratios',
      },
      {
        label: '89%',
        value: '89%',
        description: 'Sustained occupancy rate',
      },
      {
        label: '₹18 Lakh',
        value: '₹18L',
        description: 'Monthly aggregator commission saved',
      },
      {
        label: '0 MS',
        value: 'Zero',
        description: 'Double-booking conflicts post-launch',
      },
    ],
    services: ['Booking Engine Arch', 'Secure Payment Rails', 'PMS API Sync'],
    testimonial: {
      text: "Precision engineering and visionary design. They didn't just build a website; they constructed our primary revenue engine. Incredible ROI.",
      author: 'Priya Patel',
      role: 'Director, Neon Oasis Resort',
    },
    fullDescription: `Neon Oasis is a flagship 40-key boutique lifestyle resort targeting high-net-worth tech millennials in Pune.

## Mission Parameters

Intercept traffic currently booking through OTAs by aggressively optimizing the direct booking UX and reliability.

## System Architecture

1. **Conversion-Optimized UX**: Glassmorphic interfaces focusing intense attention purely on availability and action buttons. 
2. **The Sync Engine**: A custom microservice constantly polling and locking inventory between their PMS and the web UI within milliseconds.
3. **Analytics Telemetry**: Deep funnel tracking to identify drop-off nodes and retarget via automated protocols.

## Deployment Outcome

Within 60 days of initialization, direct traffic converted at 3x the legacy rate, radically altering the resort's unit economics and margin structure.`,
  },
  'restaurant-launch': {
    title: 'Spice Circuit - Brand Launch',
    category: 'Restaurant',
    client: 'Spice Circuit Dining',
    challenge:
      'A highly anticipated fusion restaurant in Mumbai needed to generate massive waitlists pre-launch to guarantee capitalization upon opening.',
    solution:
      'Deployed an aggressive pre-launch digital infrastructure including a viral waitlist algorithm, dynamic table reservation system, and highly stylized landing sequence.',
    results: [
      {
        label: '450+',
        value: '450+',
        description: 'Reservation lock-ins pre-launch',
      },
      {
        label: '25K',
        value: '25,000',
        description: 'Captured leads in database',
      },
      {
        label: '100%',
        value: '100%',
        description: 'Server uptime during viral spikes',
      },
      {
        label: '₹22 Lakh',
        value: '₹22L',
        description: 'Opening week revenue processed',
      },
    ],
    services: ['Viral Waitlist Logic', 'Reservation API', 'Cloudflare Scale Arch'],
    testimonial: {
      text: 'From zero to full digital presence in record time. The analytics dashboard they built gives us real-time insights into customer preferences.',
      author: 'Rahul Verma',
      role: 'Head Chef, Spice Circuit',
    },
    fullDescription: `Spice Circuit combined molecular gastronomy with traditional Indian street food, demanding an equally disruptive digital launch.

## Mission Parameters

Capture maximum organic hype and convert it into locked reservations without server instability during viral influencer spikes.

## System Architecture

1. **Edge Caching**: Fully static, edge-cached frontend capable of absorbing massive sudden traffic surges without degrading load times.
2. **Reservation Core**: Custom API managing complex table turning logic, deposits, and dynamic pricing based on demand urgency.
3. **Viral Loop Protocol**: Built-in referral mechanics incentivizing users to share their reservation status for priority seating.

## Deployment Outcome

The servers flawlessly handled a 50x traffic spike when local influencers posted. Opening week was fully booked 14 days in advance.`,
  },
};

export default function CaseStudyDetail({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id];

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative">
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
          <div className="relative z-10 glass-card max-w-2xl mx-auto p-12 border-destructive/30">
            <h1 className="text-3xl font-bold font-mono text-destructive mb-4 tracking-widest uppercase animate-pulse">404 // File Not Found</h1>
            <p className="text-muted-foreground mb-8 text-sm font-mono">
              The requested data node does not exist in the current directory.
            </p>
            <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
              <Link href="/portfolio">Abort and Return to Portfolio</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 sm:py-32 border-b border-border/30 overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none animate-glow-pulse" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-xs font-mono text-primary hover:text-secondary mb-10 transition-colors uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-secondary/50">
            <ArrowLeft size={14} className="mr-3" />
            Return to Core Database
          </Link>
          
          <div className="mb-6 flex items-center space-x-4 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 glass-card border-secondary/30 text-secondary text-xs uppercase tracking-widest font-mono rounded-full font-semibold shadow-[0_0_15px_oklch(0.7 0.18 195 / 0.2)]">
              Class: {caseStudy.category}
            </span>
            <span className="flex items-center text-xs font-mono text-muted-foreground">
              <Activity size={14} className="mr-2 text-primary" /> System Online
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            {caseStudy.title}
          </h1>
          
          <div className="flex items-center space-x-4 animate-fade-in-up delay-200">
            <p className="text-lg text-muted-foreground border-l-2 border-primary pl-4">
              <span className="text-xs uppercase tracking-widest font-mono block mb-1">Entity Alias</span>
              <span className="font-semibold text-foreground">{caseStudy.client}</span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="glass-card p-8 rounded-2xl animate-slide-left">
              <h2 className="text-xs uppercase tracking-widest font-mono text-destructive mb-4 flex items-center">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse mr-3" />
                Identified Anomalies
              </h2>
              <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
            </div>
            <div className="glass-card border-primary/40 p-8 rounded-2xl shadow-[0_0_30px_oklch(0.72_0.19_195/0.1)] relative overflow-hidden animate-slide-right">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[40px] rounded-full" />
              <h2 className="text-xs uppercase tracking-widest font-mono text-primary mb-4 flex items-center relative z-10">
                <Cpu size={14} className="mr-3" />
                Deployed Resolution
              </h2>
              <p className="text-foreground leading-relaxed relative z-10">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Results Grid */}
          <div className="mb-24 animate-fade-in-up pt-12 border-t border-border/30 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            <h2 className="text-2xl font-bold text-foreground mb-10 tracking-tight font-mono text-center">Verified Impact Telemetry</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.map((result, i) => (
                <div key={i} className="glass-card rounded-2xl p-8 border-t-2 border-t-primary/50 text-center hover:-translate-y-2 transition-transform duration-300 group">
                  <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary mb-3">{result.value}</p>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Description Segmented */}
          <div className="mb-20 glass-card p-8 sm:p-12 rounded-3xl animate-fade-in-up">
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-mono prose-headings:tracking-tight prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
              {caseStudy.fullDescription.split('\n\n').map((paragraph, i) => (
                <div key={i} className="mb-6">
                  {paragraph.startsWith('##') ? (
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-12 mb-6 uppercase tracking-widest border-b border-border/50 pb-4 inline-block">
                      {paragraph.replace('## ', '')}
                    </h3>
                  ) : paragraph.includes('-') && paragraph.split('\n').length > 1 ? (
                    <ul className="space-y-4 pl-0 list-none mt-4">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j} className="flex items-start bg-background/30 p-4 rounded-lg border border-border/20">
                          <span className="text-secondary font-mono mr-4 mt-1 font-bold">&gt;</span>
                          <span className="text-foreground/90">{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="leading-relaxed">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services Array */}
          <div className="mb-24 text-center animate-fade-in-up">
            <h2 className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-8">Utilized Tech Stack & Modules</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {caseStudy.services.map((service, i) => (
                <span
                  key={i}
                  className="px-6 py-3 glass-card border-primary/20 text-foreground rounded-full text-sm font-mono tracking-wide shadow-[0_0_10px_oklch(0.72_0.19_195/0.1)] hover:border-primary/50 transition-colors cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Panel */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-primary via-primary/20 to-secondary animate-fade-in-up">
            <div className="bg-background/90 backdrop-blur-2xl rounded-3xl p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 text-9xl font-serif text-primary/10 rotate-12">"</div>
              
              <blockquote className="text-xl sm:text-2xl mb-10 text-foreground leading-relaxed italic relative z-10 font-light">
                &ldquo;{caseStudy.testimonial.text}&rdquo;
              </blockquote>
              
              <footer className="flex items-center relative z-10 border-t border-border/50 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-xl mr-5 border border-primary/40 text-primary">
                  {caseStudy.testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-foreground tracking-wide font-mono">{caseStudy.testimonial.author}</p>
                  <p className="text-xs text-secondary mt-1 font-mono tracking-widest uppercase">{caseStudy.testimonial.role}</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
