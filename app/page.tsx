import Link from 'next/link';
import { ArrowRight, Zap, PenTool, Wrench, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';

const caseStudies = [
  {
    id: 'cafe-modernization',
    title: 'CyberChai - Digital Transformation',
    category: 'Cafe',
    description: 'Local favorite cafe needed a futuristic online ordering portal.',
    result: 'Deployed hyper-speed ordering system & AR menu integration.',
    image: '☕',
    metrics: [
      { label: 'Order Volume', value: '+185%' },
      { label: 'Monthly Rev', value: '+₹7,50,000' },
    ],
  },
  {
    id: 'hotel-booking',
    title: 'Neon Oasis Resort - Booking Platform',
    category: 'Hotel',
    description: 'Boutique resort required a high-conversion booking engine.',
    result: 'Built real-time booking gateway with holographic tour previews.',
    image: '🏨',
    metrics: [
      { label: 'Direct Bookings', value: '+220%' },
      { label: 'Occupancy', value: '89%' },
    ],
  },
  {
    id: 'restaurant-launch',
    title: 'Spice Circuit - Brand Launch',
    category: 'Restaurant',
    description: 'New dining concept needed complete digital brand deployment.',
    result: 'Launched omnichannel presence with AI-driven reservation management.',
    image: '🍽️',
    metrics: [
      { label: 'Day 1 Traffic', value: '450+' },
      { label: 'Social Reach', value: '25K+' },
    ],
  },
  {
    id: 'bakery-ecommerce',
    title: 'Quantum Bakes - E-Commerce',
    category: 'Delivery',
    description: 'Traditional bakery scaling to city-wide drone delivery.',
    result: 'Developed scalable e-commerce core with real-time tracking.',
    image: '🥐',
    metrics: [
      { label: 'Online Sales', value: '+340%' },
      { label: 'New Nodes', value: '+650' },
    ],
  },
  {
    id: 'spa-wellness',
    title: 'Zenica Spa - Appointment System',
    category: 'Wellness',
    description: 'Wellness center required seamless scheduling architecture.',
    result: 'Implemented automated booking with predictive availability.',
    image: '💆',
    metrics: [
      { label: 'Online Bookings', value: '65%' },
      { label: 'Retention', value: '+42%' },
    ],
  },
  {
    id: 'retail-shop',
    title: 'Threads.io - E-Store Launch',
    category: 'Retail',
    description: 'Fashion outlet transitioning to digital-first sales model.',
    result: 'Engineered high-performance storefront with automated inventory sync.',
    image: '👗',
    metrics: [
      { label: 'Revenue Base', value: '₹12L/mo' },
      { label: 'Market Reach', value: 'Pan-India' },
    ],
  },
];

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, CyberChai',
    testimonial:
      "Serverstack executed our digital transition flawlessly. The interface is stunning and the backend handles our peak load effortlessly. Outstanding tech.",
    avatar: '👨‍💻',
  },
  {
    name: 'Priya Patel',
    role: 'Director, Neon Oasis Resort',
    testimonial:
      "Precision engineering and visionary design. They didn't just build a website; they constructed our primary revenue engine. Incredible ROI.",
    avatar: '👩‍💼',
  },
  {
    name: 'Rahul Verma',
    role: 'Head Chef, Spice Circuit',
    testimonial:
      "From zero to full digital presence in record time. The analytics dashboard they built gives us real-time insights into customer preferences.",
    avatar: '👨‍🍳',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-32">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none animate-glow-pulse" />
        
        {/* Animated particles/nodes background could go here */}
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-8 animate-fade-in-up">
              <div className="px-4 py-1.5 glass-card rounded-full border-primary/30 shadow-[0_0_15px_oklch(0.72_0.19_195/0.2)]">
                <p className="text-xs tracking-widest font-mono text-primary uppercase">
                  <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse mr-2" />
                  System Online // Verified Partners
                </p>
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance leading-tight tracking-tight animate-fade-in-up delay-100">
              Next-Gen Digital <br className="hidden sm:block" />
              <span className="text-gradient drop-shadow-sm">Infrastructure</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in-up delay-200">
              Architecting high-performance web platforms and digital ecosystems for ambitious Indian enterprises. We turn complex requirements into elegant code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="bg-primary/20 border border-primary/50 text-foreground hover:bg-primary/30 hover:shadow-[0_0_20px_oklch(0.72_0.19_195/0.4)] transition-all duration-300 relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10 font-semibold tracking-wide flex items-center">
                    Initialize Project <Zap size={18} className="ml-2 group-hover:text-secondary transition-colors" />
                  </span>
                  <div className="absolute inset-0 w-1/4 h-full bg-white/10 -skew-x-[30deg] -translate-x-[200%] group-hover:animate-[shimmer_1.5s_infinite]" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="glass-card hover:border-secondary/50 text-foreground transition-all duration-300 group"
              >
                <Link href="/portfolio">
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                    Access Case Files
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative scanning line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm tracking-widest font-mono text-secondary uppercase mb-3">Core Modules</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Capabilities
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="animate-fade-in-up delay-100">
              <ServiceCard
                icon={<PenTool size={24} />}
                title="UI/UX Engineering"
                description="Precision-crafted interfaces optimized for user flow and conversion rates."
                features={[
                  'Responsive architecture',
                  'Component libraries',
                  'Interaction design',
                  'State management',
                ]}
              />
            </div>
            <div className="animate-fade-in-up delay-200">
              <ServiceCard
                icon={<Zap size={24} />}
                title="System Development"
                description="Robust, scalable backend architectures and API integrations."
                features={[
                  'Microservices',
                  'Database design',
                  'Payment gateways',
                  'Low-latency APIs',
                ]}
              />
            </div>
            <div className="animate-fade-in-up delay-300">
              <ServiceCard
                icon={<Wrench size={24} />}
                title="DevOps & Security"
                description="Continuous deployment, server monitoring, and vulnerability patching."
                features={[
                  'CI/CD pipelines',
                  'DDoS protection',
                  'Load balancing',
                  'Automated backups',
                ]}
              />
            </div>
            <div className="animate-fade-in-up delay-400">
              <ServiceCard
                icon={<TrendingUp size={24} />}
                title="Growth Tech"
                description="Data-driven SEO infrastructures and analytics telemetry."
                features={[
                  'Technical SEO',
                  'Event tracking',
                  'A/B testing protocols',
                  'Performance audits',
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-background relative overflow-hidden border-y border-border/30">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-fade-in-up">
            <div className="max-w-2xl">
              <h2 className="text-sm tracking-widest font-mono text-secondary uppercase mb-3">Deployment Logs</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Recent Operations
              </h3>
              <p className="text-lg text-muted-foreground">
                Verified impact metrics from our latest successful deployments.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="mt-6 md:mt-0 glass-card text-primary hover:border-primary/50 group"
            >
              <Link href="/portfolio" className="flex items-center">
                Query All Databanks <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, i) => (
              <div key={study.id} className={`animate-fade-in-up delay-${(i + 1) * 100}`}>
                <CaseStudyCard {...study} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-sm tracking-widest font-mono text-secondary uppercase mb-3">Client Telemetry</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Network Feedback</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`glass-card rounded-xl p-8 animate-fade-in-up delay-${(i + 1) * 100} relative group hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="absolute top-0 right-8 -translate-y-1/2 opacity-20 text-6xl font-serif text-primary">"</div>
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-secondary fill-secondary mr-1" />
                  ))}
                </div>
                <p className="mb-8 text-muted-foreground leading-relaxed italic relative z-10">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="flex items-center border-t border-border/30 pt-6">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xl mr-4 border border-primary/30">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm tracking-wide">{testimonial.name}</p>
                    <p className="text-xs text-secondary font-mono tracking-wider uppercase mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden border-t border-border/30">
        <div className="absolute inset-0 bg-radial-glow opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card rounded-2xl p-12 md:p-16 border-primary/30 hover:border-primary/60 transition-colors duration-500 shadow-[0_0_30px_oklch(0.72_0.19_195/0.1)]">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6">
              Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sequence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-balance font-mono">
              // CONNECT TO SECURE COMMS CHANNEL FOR PROJECT EVALUATION
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white border-0 hover:opacity-90 hover:shadow-[0_0_25px_oklch(0.72_0.19_195/0.5)] transition-all duration-300 px-8 py-6 text-lg group"
            >
              <Link href="/contact" className="flex items-center">
                Establish Connection 
                <span className="ml-3 w-2 h-2 rounded-full bg-white animate-pulse" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
