import Link from 'next/link';
import { Globe, ShoppingBag, CalendarDays, Headset, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Services | Servestack',
  description: 'Websites, ordering, bookings, and support services for cafes and hotels in India.',
};

const services = [
  {
    icon: <Globe size={22} />,
    title: 'Professional Websites',
    description: 'Modern, trustworthy website pages that help customers choose your business quickly.',
    href: '/websites',
    features: ['Homepage, menu/rooms, contact pages', 'Google Maps and call buttons', 'Fast mobile experience', 'Lead capture forms'],
  },
  {
    icon: <ShoppingBag size={22} />,
    title: 'Online Ordering System',
    description: 'Direct ordering flow to reduce dependency on third-party marketplaces.',
    href: '/ordering',
    features: ['Menu categories and modifiers', 'Pickup or delivery options', 'WhatsApp and email notifications', 'Payment collection support'],
  },
  {
    icon: <CalendarDays size={22} />,
    title: 'Reservation & Booking System',
    description: 'Accept online reservations for tables or rooms and avoid manual booking errors.',
    href: '/bookings',
    features: ['Real-time availability forms', 'Auto confirmation messages', 'Booking dashboard for staff', 'Reminder workflows'],
  },
  {
    icon: <Headset size={22} />,
    title: 'Support & Maintenance',
    description: 'Keep your website updated, secure, and running smoothly every month.',
    href: '/support',
    features: ['Monthly updates and backups', 'Bug fixes and content edits', 'Performance monitoring', 'Priority support plans'],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Services for hospitality businesses</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the services you need now and scale later. Every service has a dedicated page with clear deliverables.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Simple pricing options</h2>
            <p className="text-muted-foreground">Start with what you need today. Upgrade when your business grows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '₹12,000',
                details: 'Website setup for new cafes and small properties',
              },
              {
                name: 'Growth',
                price: '₹40,000',
                details: 'Website + ordering or booking tools for active businesses',
              },
              {
                name: 'Scale',
                price: 'Custom',
                details: 'Multi-location support, advanced workflows, dedicated help',
              },
            ].map((plan) => (
              <div key={plan.name} className="rounded-lg border border-border bg-card p-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.details}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/pricing" className="inline-flex items-center">
                View detailed pricing comparison <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
