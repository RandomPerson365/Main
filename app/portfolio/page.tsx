import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CaseStudyCard } from '@/components/CaseStudyCard';

const allCaseStudies = [
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
  {
    id: 'coffee-roastery',
    title: 'Mountain Brew Roastery - B2B Website',
    category: 'Cafe',
    description: 'Coffee roaster needed professional B2B site to showcase products to wholesale buyers.',
    result: 'Created B2B portal with product catalog and ordering system.',
    image: '☕',
    metrics: [
      { label: 'New Clients', value: '+28' },
      { label: 'Monthly Orders', value: '+150%' },
    ],
  },
  {
    id: 'bed-breakfast',
    title: 'Heritage Inn B&B - Booking Website',
    category: 'Hotel',
    description: 'Historic B&B wanted to increase direct bookings and reduce dependency on marketplaces.',
    result: 'Built custom booking engine with calendar management.',
    image: '🏨',
    metrics: [
      { label: 'Direct Bookings', value: '72%' },
      { label: 'Cost Savings', value: '$3,200/mo' },
    ],
  },
  {
    id: 'fine-dining',
    title: 'Le Petit Restaurant - Premium Dining',
    category: 'Restaurant',
    description: 'Fine dining restaurant needed elegant online presence and reservation system.',
    result: 'Designed luxury website with integrated OpenTable booking.',
    image: '🍽️',
    metrics: [
      { label: 'Table Reservations', value: '+98%' },
      { label: 'Website Traffic', value: '+450%' },
    ],
  },
];

export const metadata = {
  title: 'Portfolio | Serverstack - Web Design Projects',
  description: 'View our case studies and successful projects for cafes, hotels, restaurants, and businesses.',
};

export default function Portfolio() {
  const categories = ['All', ...new Set(allCaseStudies.map((cs) => cs.category))];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Our Latest{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real businesses. See how we&apos;ve helped companies just like yours
            succeed online.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Section */}
          <div className="mb-12 flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Study Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCaseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Successful Projects', value: '50+' },
              { label: 'Happy Clients', value: '45+' },
              { label: 'Average Growth', value: '+250%' },
              { label: 'Years Experience', value: '8+' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl sm:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process to ensure your project succeeds at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: '🎯', title: 'Discovery', desc: 'Understand your goals and vision' },
              { icon: '🎨', title: 'Design', desc: 'Create beautiful mockups' },
              { icon: '⚙️', title: 'Build', desc: 'Develop and implement' },
              { icon: '✅', title: 'Test', desc: 'Quality assurance' },
              { icon: '🚀', title: 'Launch', desc: 'Go live and support' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your business grow online. Contact us for a free
            consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/contact" className="flex items-center">
              Start Your Project <ArrowRight size={20} className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
