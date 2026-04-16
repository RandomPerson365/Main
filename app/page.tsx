import Link from 'next/link';
import { ArrowRight, Globe, ShoppingBag, CalendarDays, Headset, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { caseStudies } from '@/app/data/caseStudies';

const services = [
  {
    icon: <Globe size={22} />,
    title: 'Professional Website',
    description: 'A clean, mobile-first website that shows your menu, rooms, photos, and contact details clearly.',
    href: '/websites',
    features: ['Mobile friendly', 'Fast loading pages', 'Menu/room showcase', 'Google Maps & WhatsApp integration'],
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'Online Ordering',
    description: 'Let customers place food orders directly from your website without app dependence.',
    href: '/ordering',
    features: ['Direct order flow', 'Pickup & delivery options', 'Order notifications', 'Payment links'],
  },
  {
    icon: <CalendarDays size={22} />,
    title: 'Booking System',
    description: 'Accept room or table bookings online and reduce missed calls and double entries.',
    href: '/bookings',
    features: ['Live booking form', 'Auto confirmations', 'Reminder messages', 'Simple booking calendar'],
  },
  {
    icon: <Headset size={22} />,
    title: 'Support & Maintenance',
    description: 'We keep your website updated and available so you can focus on your customers.',
    href: '/support',
    features: ['Monthly updates', 'Content edits', 'Security checks', 'Phone and WhatsApp support'],
  },
];

const faqs = [
  {
    q: 'How quickly can we launch?',
    a: 'Most cafe and hotel websites go live in 7 to 14 days once we receive your photos, menu, and basic business details.',
  },
  {
    q: 'Will this work on customer phones?',
    a: 'Yes. Every page is built for mobile first, because most customers in India search and book from their phones.',
  },
  {
    q: 'Can my staff update prices or offers?',
    a: 'Yes. We provide a simple update process and ongoing support so your team can request changes quickly.',
  },
  {
    q: 'Do I need technical knowledge?',
    a: 'No. We handle setup, launch, and support. You only need to share your business content and approve the pages.',
  },
];

const testimonials = [
  {
    quote:
      'We started getting daily online orders within two weeks. The site is simple for customers and easy for my staff.',
    author: 'Nidhi Rao',
    role: 'Owner, The Daily Brew Cafe',
  },
  {
    quote:
      'Direct bookings improved quickly and guests now contact us from the website before arriving. That has improved conversion.',
    author: 'Arjun Mehta',
    role: 'General Manager, Lakeview Stay',
  },
  {
    quote:
      'Table bookings are now organized and we avoid manual mistakes on busy weekends. It has made operations much smoother.',
    author: 'Sana Khan',
    role: 'Operations Manager, Spice Court',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 selection:text-foreground">
      <Navbar />

      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
            Trusted by cafes, restaurants, and hotels across India
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            More Bookings. More Orders. <br className="hidden sm:block" /> Better Online Presence.
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
            We build simple, high-converting websites for hospitality businesses so customers can find you, trust you, and buy from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact" className="flex items-center">
                Get Started Now <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What you get</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each service has its own landing page with real deliverables and clear outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="success-stories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">Success Stories</h2>
              <p className="text-muted-foreground">Real hospitality businesses. Real numbers.</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/portfolio">View all stories</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Why choose us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'We focus only on cafe, restaurant, and hotel websites',
              'Every project is built for business outcomes, not vanity design',
              'You get clear pricing and practical recommendations',
              'Local market understanding for Indian hospitality buyers',
            ].map((point) => (
              <div key={point} className="rounded-lg border border-border bg-card p-5 flex items-start">
                <CheckCircle size={18} className="text-primary mr-3 mt-1" />
                <p className="text-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">What business owners say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-lg border border-border bg-card p-6">
                <p className="text-foreground mb-4">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-sm font-semibold text-foreground">{item.author}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Frequently asked questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-card p-5">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to grow your business online?</h2>
          <p className="mb-8 text-primary-foreground/90">
            Get a free consultation and a clear action plan for your cafe or hotel.
          </p>
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link href="/contact">Book a free call</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
