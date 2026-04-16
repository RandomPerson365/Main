import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Pricing | SiteGrow India',
  description: 'Pricing comparison for website, ordering, booking, and support services.',
};

const plans = [
  {
    name: 'Starter',
    price: '₹25,000',
    bestFor: 'New cafe or small property',
    includes: ['Professional website', 'Mobile optimized pages', 'Contact and inquiry form', 'Basic local SEO setup'],
  },
  {
    name: 'Growth',
    price: '₹55,000',
    bestFor: 'Growing cafe or restaurant',
    includes: ['Everything in Starter', 'Online ordering OR reservations', 'Payment link integration', 'Basic staff dashboard'],
  },
  {
    name: 'Business Plus',
    price: '₹85,000',
    bestFor: 'Hotels and established brands',
    includes: ['Everything in Growth', 'Ordering + bookings together', 'Priority support', 'Monthly optimization review'],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Pricing comparison</h1>
            <p className="text-lg text-muted-foreground">Simple plans with clear deliverables and no hidden setup costs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-xl border border-border bg-card p-6 flex flex-col">
                <h2 className="text-xl font-semibold text-foreground mb-1">{plan.name}</h2>
                <p className="text-3xl font-bold text-primary mb-2">{plan.price}</p>
                <p className="text-sm text-muted-foreground mb-5">Best for: {plan.bestFor}</p>
                <ul className="space-y-2 text-sm text-foreground flex-grow">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />{item}</li>
                  ))}
                </ul>
                <Button asChild className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">Choose {plan.name}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
