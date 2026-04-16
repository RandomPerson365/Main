import Link from 'next/link';
import { CheckCircle, ArrowRight, Code, PenTool, Wrench, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';

const fullServices = [
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Architecture',
    id: 'design',
    description: 'Precision-crafted interfaces optimized for high-conversion user pathways.',
    details: [
      'Responsive mobile-first builds',
      'Dynamic typography scaling',
      'Glassmorphic & neo-brutalist trends',
      'Lighthouse 90+ optimization',
      'Micro-interaction design',
      'Accessibility compliance',
    ],
    process: [
      'Telemetry Analysis',
      'Wireframing Nodes',
      'Component Library Deploy',
      'Beta Testing',
      'Final Rollout',
    ],
  },
  {
    icon: <Code size={24} />,
    title: 'Core Backend Logic',
    id: 'development',
    description: 'Robust server-side engineering tailored for the Indian market scale.',
    details: [
      'UPI & Razorpay Integrations',
      'High-throughput datastores',
      'Serverless function deployment',
      'Graph-based querying',
      'Automated SMS/WhatsApp triggers',
      'Legacy system APIs',
    ],
    process: [
      'System Architecture Map',
      'Database Modeling',
      'Sprint Execution',
      'Load Testing Simulation',
      'Production Deploy',
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: 'System Ops & Sec',
    id: 'maintenance',
    description: '24/7 monitoring, security patching, and core updates.',
    details: [
      'Zero-day vulnerability scans',
      'Cloudflare DDoS shielding',
      'Automated DB snapshots',
      'CDN packet routing',
      'Memory leak resolving',
      'SLA-backed uptime',
    ],
    process: [
      'Threat Vector Analysis',
      'Automated Patch Cycle',
      'Latency Optimization',
      'Content Sync',
      'Red Alert Support',
    ],
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Growth Telemetry',
    id: 'seo',
    description: 'Algorithmic tuning to dominate search engine indices.',
    details: [
      'Hyper-local SEO (Pan-India)',
      'Schema markup injection',
      'Backlink network building',
      'Core Web Vitals tuning',
      'A/B split routing',
      'Monthly data viz reports',
    ],
    process: [
      'Index Deep Scan',
      'Keyword Vectoring',
      'On-Page DOM Tuning',
      'Content Generation API',
      'Rank Tracking',
    ],
  },
];

const industries = [
  {
    icon: '☕',
    name: 'QSRs & Cloud Kitchens',
    benefits: [
      'Zomato/Swiggy API hooks',
      'QR automated menus',
      'Waitlist algorithms',
      'Loyalty point ledgers',
    ],
  },
  {
    icon: '🏢',
    name: 'Tech Parks & Real Estate',
    benefits: [
      'Lead gen funnels',
      '3D tour rendering',
      'Inventory databases',
      'CRM sync pipelines',
    ],
  },
  {
    icon: '🏥',
    name: 'MedTech & Clinics',
    benefits: [
      'Secure appointment tech',
      'Tele-consult gateways',
      'Patient record portals',
      'Prescription APIs',
    ],
  },
  {
    icon: '🏪',
    name: 'D2C Retail Brands',
    benefits: [
      'Headless commerce',
      'Delhivery/Shiprocket sync',
      'Cart recovery AI',
      'Flash sale architectures',
    ],
  },
  {
    icon: '🏋️',
    name: 'Fitness Networks',
    benefits: [
      'Member portal logins',
      'Trainer scheduling',
      'Subscription billing engine',
      'Progress tracking dashboards',
    ],
  },
  {
    icon: '🚀',
    name: 'SaaS Startups',
    benefits: [
      'Product-led growth loops',
      'Waitlist mechanics',
      'Documentation hubs',
      'Investor data rooms',
    ],
  },
];

export const metadata = {
  title: 'Services | Serverstack - Web Engineering',
  description: 'Next-gen web development, system architecture, and tech ops for ambitious Indian companies.',
};

export default function Services() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
        <div className="absolute -top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex mb-6 animate-fade-in-up">
            <span className="px-3 py-1 text-xs font-mono tracking-widest text-secondary border border-secondary/30 rounded-full bg-secondary/5">SERVICE PROTOCOLS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 text-balance tracking-tight animate-fade-in-up delay-100">
            Digital Engineering <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer drop-shadow-sm">
              Capabilities
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-mono text-sm sm:text-base animate-fade-in-up delay-200">
            // Full-stack solutions designed for extreme scalability, zero-downtime, and maximum conversion metrics in the Indian market.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32 relative border-t border-border/30 bg-muted/20">
        <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-32">
            {fullServices.map((service, index) => (
              <div key={index} id={service.id} className="scroll-mt-32 group/section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Content */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="inline-block p-4 glass-card rounded-xl mb-6 shadow-[0_0_15px_oklch(0.72_0.19_195/0.1)] group-hover/section:shadow-[0_0_25px_oklch(0.72_0.19_195/0.3)] transition-all duration-500">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-mono tracking-tight">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed">{service.description}</p>

                    <div>
                      <h3 className="text-xs font-mono tracking-widest uppercase text-secondary mb-6 border-l-2 border-secondary pl-3">Technical Outputs</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start bg-background/50 p-3 rounded-lg border border-border/50 hover:border-primary/40 transition-colors">
                            <CheckCircle size={18} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Process */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="glass-card rounded-2xl p-8 border-t-2 border-t-primary/50 relative overflow-hidden group-hover/section:translate-y-[-5px] transition-transform duration-500">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] pointer-events-none" />
                      
                      <h3 className="text-xs font-mono tracking-widest uppercase text-foreground mb-8 text-center bg-background/50 inline-block px-4 py-1 rounded-full border border-border">Execution Pipeline</h3>
                      
                      <div className="space-y-6 relative">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-start relative z-10 group/step">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary/40 text-primary font-mono text-sm font-bold shadow-[0_0_10px_oklch(0.72_0.19_195/0.2)] group-hover/step:bg-primary group-hover/step:text-primary-foreground group-hover/step:shadow-[0_0_15px_oklch(0.72_0.19_195/0.5)] transition-all duration-300 mt-0.5">
                              0{i + 1}
                            </div>
                            <div className="ml-5">
                              <p className="font-semibold text-foreground tracking-wide group-hover/step:text-primary transition-colors">{step}</p>
                            </div>
                            {i < service.process.length - 1 && (
                              <div className="absolute left-4 top-10 w-[1px] h-[calc(100%+8px)] bg-gradient-to-b from-primary/50 to-transparent -z-10" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-xs font-mono text-secondary uppercase tracking-widest mb-3">Target Sectors</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Configured for Industry Networks
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-8 hover:border-primary/50 hover:shadow-[0_0_20px_oklch(0.72_0.19_195/0.15)] transition-all duration-300 group"
              >
                <div className="text-4xl mb-6 bg-background/50 inline-flex p-4 rounded-xl border border-border group-hover:scale-110 transition-transform duration-300 shadow-inner">{industry.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-6 font-mono tracking-tight group-hover:text-primary transition-colors">{industry.name}</h3>
                <ul className="space-y-3">
                  {industry.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center text-sm text-muted-foreground border-b border-border/30 pb-2 last:border-0 last:pb-0">
                      <span className="text-secondary font-mono mr-3 text-xs w-3 overflow-hidden opacity-70">{'>'}</span>
                      <span className="group-hover:text-foreground transition-colors">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 relative border-t border-border/30 bg-muted/10">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-xs font-mono text-secondary uppercase tracking-widest mb-3">Resource Allocation</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Transparent Architectures
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pricing designed for growing Indian enterprises. Custom SLAs quoted during data-room sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Bootstrapper Node',
                price: '₹15,000+',
                description: 'Pre-seed tech stack deployment',
                features: [
                  'Next.js/React frontend',
                  'Mobile-first responsive',
                  'Technical SEO baseline',
                  '30-day bug warranty',
                ],
              },
              {
                name: 'Series A Core',
                price: '₹45,000+',
                description: 'High-availability infrastructure',
                features: [
                  'Custom backend APIs',
                  'Payment gateway (UPI+CC)',
                  'Analytics dashboard',
                  '90-day SLA support',
                ],
                featured: true,
              },
              {
                name: 'Enterprise Grid',
                price: 'Custom',
                description: 'Bespoke microservice architecture',
                features: [
                  'Unlimited scale nodes',
                  'Legacy system bridges',
                  'Dedicated DevOps engineer',
                  '24/7 Red Alert SLA',
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 transition-all duration-500 relative flex flex-col ${
                  plan.featured
                    ? 'border border-primary bg-primary/5 relative scale-105 shadow-[0_0_40px_oklch(0.72_0.19_195/0.15)] z-10'
                    : 'glass-card hover:border-primary/40'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-xs font-mono font-bold tracking-widest uppercase rounded-full shadow-[0_0_15px_oklch(0.72_0.19_195/0.4)] whitespace-nowrap">
                    Optimal Value
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6 pb-6 border-b border-border/50">{plan.description}</p>
                <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-8">{plan.price}</p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 mt-1.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  asChild
                  variant={plan.featured ? 'default' : 'outline'}
                  className={`w-full py-6 font-semibold tracking-wide ${
                    plan.featured ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_oklch(0.72_0.19_195/0.3)]' : 'glass-card border-border hover:border-primary/50'
                  }`}
                >
                  <Link href="/contact">Request Initialization</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden border-t border-border/30">
        <div className="absolute inset-0 bg-radial-glow opacity-60 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-card p-12 rounded-2xl border-primary/20 backdrop-blur-3xl">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Begin Upload Sequence
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto font-mono text-sm">
              // Sync with our technical architects to scope your roadmap and define sprint cycles.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group shadow-[0_0_20px_oklch(0.72_0.19_195/0.4)] hover:shadow-[0_0_30px_oklch(0.72_0.19_195/0.6)] transition-all duration-300"
            >
              <Link href="/contact" className="flex items-center font-bold tracking-wide">
                Establish Comms Link <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
