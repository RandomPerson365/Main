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
    title: 'The Cozy Cup - Digital Transformation',
    category: 'Cafe',
    description: 'Local favorite cafe needed an online presence to compete with chains.',
    result: 'Implemented online ordering system and reservation platform.',
    image: '☕',
    metrics: [
      { label: 'Order Increase', value: '+185%' },
      { label: 'Monthly Revenue', value: '+$8,500' },
    ],
  },
  {
    id: 'hotel-booking',
    title: 'Sunset Haven Hotel - Booking Revolution',
    category: 'Hotel',
    description: 'Boutique hotel struggling with manual booking processes and outdated website.',
    result: 'Built custom booking system with payment integration.',
    image: '🏨',
    metrics: [
      { label: 'Direct Bookings', value: '+220%' },
      { label: 'Occupancy Rate', value: '89%' },
    ],
  },
  {
    id: 'restaurant-launch',
    title: 'Bistro Rouge - Brand Launch',
    category: 'Restaurant',
    description: 'New restaurant needed complete digital presence before opening.',
    result: 'Created brand identity, website, and social media management strategy.',
    image: '🍽️',
    metrics: [
      { label: 'Day 1 Reservations', value: '45' },
      { label: 'Social Following', value: '2,400' },
    ],
  },
  {
    id: 'bakery-ecommerce',
    title: 'Artisan Bakery - E-commerce Platform',
    category: 'Food Business',
    description: 'Traditional bakery wanted to expand with online orders and delivery.',
    result: 'Built e-commerce platform with inventory management.',
    image: '🥐',
    metrics: [
      { label: 'Online Orders', value: '+340%' },
      { label: 'New Customers', value: '+650' },
    ],
  },
  {
    id: 'spa-wellness',
    title: 'Serenity Spa - Online Presence',
    category: 'Wellness',
    description: 'Spa needed better appointment booking and customer management.',
    result: 'Implemented online booking with email reminders and loyalty program.',
    image: '💆',
    metrics: [
      { label: 'Bookings Online', value: '65%' },
      { label: 'Customer Retention', value: '+42%' },
    ],
  },
  {
    id: 'retail-shop',
    title: 'Boutique Threads - E-commerce Launch',
    category: 'Retail',
    description: 'Independent clothing store needed e-commerce to reach beyond locals.',
    result: 'Created fully functional online store with inventory sync.',
    image: '👗',
    metrics: [
      { label: 'Online Revenue', value: '$15,000/mo' },
      { label: 'Geographic Reach', value: '5 Countries' },
    ],
  },
];

const testimonials = [
  {
    name: 'Maria Santos',
    role: 'Owner, The Cozy Cup Cafe',
    testimonial:
      "Serverstack transformed our online presence completely. The website is beautiful and the ordering system tripled our online sales. Highly recommend!",
    avatar: '👩‍💼',
  },
  {
    name: 'James Mitchell',
    role: 'Manager, Sunset Haven Hotel',
    testimonial:
      'Professional, responsive, and talented team. They understood our needs and delivered beyond expectations. Our booking system is flawless.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sophie Laurent',
    role: 'Chef & Owner, Bistro Rouge',
    testimonial:
      'From concept to launch, Serverstack handled everything. Their design made our restaurant look premium and attracted customers immediately.',
    avatar: '👩‍🍳',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center justify-center space-x-2 mb-6">
              <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <p className="text-sm font-semibold text-primary">
                  ✨ Trusted by 50+ Businesses
                </p>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Beautiful Websites that{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Drive Results
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
              Professional web design and management for cafes, hotels, and growing businesses. We
              help you establish a powerful online presence that converts visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a successful online presence, tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<PenTool size={24} />}
              title="Website Design"
              description="Custom, beautiful websites that reflect your brand and engage visitors."
              features={[
                'Responsive design',
                'Modern aesthetics',
                'User-focused layouts',
                'Mobile optimized',
              ]}
            />
            <ServiceCard
              icon={<Zap size={24} />}
              title="Development"
              description="Powerful, fast websites built with modern technology."
              features={[
                'Custom functionality',
                'Payment integration',
                'Booking systems',
                'Fast performance',
              ]}
            />
            <ServiceCard
              icon={<Wrench size={24} />}
              title="Maintenance"
              description="Keep your website secure, updated, and running smoothly."
              features={[
                'Regular updates',
                'Security monitoring',
                'Performance optimization',
                '24/7 support',
              ]}
            />
            <ServiceCard
              icon={<TrendingUp size={24} />}
              title="SEO & Growth"
              description="Help customers find you with smart SEO and marketing strategies."
              features={[
                'SEO optimization',
                'Local rankings',
                'Content strategy',
                'Performance tracking',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses just like yours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/portfolio" className="flex items-center">
                View All Projects <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Hear from business owners who've transformed their online presence with Serverstack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 rounded-lg p-8"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="fill-current" />
                  ))}
                </div>
                <p className="mb-6 text-primary-foreground/90">&ldquo;{testimonial.testimonial}&rdquo;</p>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm opacity-80">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Let&apos;s create something amazing together. Contact us for a free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
          >
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
