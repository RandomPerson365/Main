import Link from 'next/link';
import { CheckCircle, ArrowRight, Code, PenTool, Wrench, TrendingUp, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';

const fullServices = [
  {
    icon: <PenTool size={24} />,
    title: 'Website Design & Development',
    id: 'design',
    description: 'Custom-built websites that showcase your business beautifully.',
    details: [
      'Responsive mobile-first design',
      'Custom branding implementation',
      'Fast loading speeds',
      'SEO-friendly structure',
      'User experience optimization',
      'Modern design trends',
    ],
    process: [
      'Discovery & Strategy',
      'Design & Mockups',
      'Development',
      'Testing & Launch',
      'Post-Launch Support',
    ],
  },
  {
    icon: <Code size={24} />,
    title: 'Advanced Features',
    id: 'development',
    description: 'Powerful functionality tailored to your business needs.',
    details: [
      'E-commerce platforms',
      'Online booking systems',
      'Payment integration',
      'Customer management',
      'Email automation',
      'Integration with tools you use',
    ],
    process: [
      'Requirements Analysis',
      'Technical Architecture',
      'Custom Development',
      'Quality Assurance',
      'Deployment',
    ],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Maintenance & Support',
    id: 'maintenance',
    description: 'Keep your website running smoothly with ongoing support.',
    details: [
      'Regular security updates',
      'Performance monitoring',
      'Backup management',
      'Content updates',
      'Bug fixes & improvements',
      'Priority support',
    ],
    process: [
      'Monthly Health Checks',
      'Security Updates',
      'Performance Optimization',
      'Content Management',
      '24/7 Emergency Support',
    ],
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'SEO & Growth',
    id: 'seo',
    description: 'Help customers find you with strategic SEO and marketing.',
    details: [
      'Local SEO optimization',
      'Keyword research',
      'Content strategy',
      'Analytics setup',
      'Conversion optimization',
      'Monthly reporting',
    ],
    process: [
      'SEO Audit',
      'Strategy Development',
      'On-Page Optimization',
      'Content Creation',
      'Performance Tracking',
    ],
  },
];

const industries = [
  {
    icon: '☕',
    name: 'Cafes & Coffee Shops',
    benefits: [
      'Online menu showcase',
      'Loyalty programs',
      'Order management',
      'Social media integration',
    ],
  },
  {
    icon: '🏨',
    name: 'Hotels & Accommodations',
    benefits: [
      'Booking system integration',
      'Room showcase galleries',
      'Guest management',
      'Review management',
    ],
  },
  {
    icon: '🍽️',
    name: 'Restaurants',
    benefits: [
      'Online reservations',
      'Menu management',
      'Delivery integration',
      'Chef profiles & specials',
    ],
  },
  {
    icon: '🏪',
    name: 'Retail Shops',
    benefits: [
      'E-commerce platform',
      'Inventory management',
      'Product showcase',
      'Customer reviews',
    ],
  },
  {
    icon: '💆',
    name: 'Salons & Spas',
    benefits: [
      'Appointment booking',
      'Staff profiles',
      'Service catalogs',
      'Reminder systems',
    ],
  },
  {
    icon: '🎨',
    name: 'Startups & New Businesses',
    benefits: [
      'Brand establishment',
      'Lead generation',
      'Professional presence',
      'Growth tracking',
    ],
  },
];

export const metadata = {
  title: 'Services | PixelForge - Web Design & Development',
  description: 'Professional web design, development, maintenance, and SEO services for cafes, hotels, and businesses.',
};

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Complete Web Solutions{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              For Your Business
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial design to ongoing support, we handle everything you need for a successful
            online presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {fullServices.map((service, index) => (
              <div key={index} id={service.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-block p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-6">
                      <div className="text-primary">{service.icon}</div>
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                    <div className="mb-8">
                      <h3 className="font-semibold text-foreground mb-4">What You Get:</h3>
                      <ul className="space-y-3">
                        {service.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Process */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-8 border border-border">
                      <h3 className="font-semibold text-foreground mb-6">Our Process</h3>
                      <div className="space-y-4">
                        {service.process.map((step, i) => (
                          <div key={i} className="flex items-start">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm flex-shrink-0">
                              {i + 1}
                            </div>
                            <div className="ml-4">
                              <p className="font-semibold text-foreground">{step}</p>
                            </div>
                            {i < service.process.length - 1 && (
                              <div className="absolute left-4 top-12 w-0.5 h-8 bg-gradient-to-b from-primary to-secondary opacity-50" />
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
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              We Work With Everyone
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized solutions for diverse industries. Whatever your business, we understand
              your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-4">{industry.name}</h3>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start text-sm text-muted-foreground">
                      <span className="text-primary mr-2">→</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. We&apos;ll provide a custom quote based on your specific needs during
              your consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '$2,500+',
                description: 'Perfect for new businesses',
                features: [
                  'Professional website',
                  'Mobile responsive',
                  'Basic SEO',
                  '3 months support',
                ],
              },
              {
                name: 'Professional',
                price: '$5,000+',
                description: 'Best for growing businesses',
                features: [
                  'Custom features',
                  'Booking/E-commerce',
                  'Advanced SEO',
                  '6 months support',
                ],
                featured: true,
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                description: 'For larger operations',
                features: [
                  'Fully custom solutions',
                  'Complex integrations',
                  'Dedicated support',
                  'Ongoing maintenance',
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-lg p-8 border transition-all ${
                  plan.featured
                    ? 'border-primary bg-gradient-to-br from-primary/5 to-secondary/5 relative scale-105'
                    : 'border-border bg-card hover:border-primary'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center text-sm text-foreground">
                      <CheckCircle size={16} className="text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={plan.featured ? 'default' : 'outline'}
                  className={`w-full ${
                    plan.featured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : ''
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project and create a plan that works for your budget and
            timeline.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact" className="flex items-center">
              Schedule Your Consultation <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
