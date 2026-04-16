import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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
    title: 'The Cozy Cup - Digital Transformation',
    category: 'Cafe',
    client: 'The Cozy Cup Cafe',
    challenge:
      'The Cozy Cup was a beloved local cafe with loyal customers, but they were struggling to compete with larger chains that had strong online presences. They had no website, no online ordering system, and were missing out on customers who wanted to check their menu and hours online. Their word-of-mouth marketing was no longer enough.',
    solution:
      'We created a modern, mobile-friendly website showcasing their menu, atmosphere, and story. We integrated an online ordering system that connects to their point-of-sale, allowing customers to order and pay online for pickup. We also set up a reservation system for their seating area and integrated their Instagram feed to showcase the cafe vibrancy.',
    results: [
      {
        label: '+185%',
        value: '+185%',
        description: 'Increase in online orders within the first 3 months',
      },
      {
        label: '+$8,500',
        value: '+$8,500',
        description: 'Average monthly revenue increase from online orders',
      },
      {
        label: '95%',
        value: '95%',
        description: 'Mobile traffic from their website',
      },
      {
        label: '2,100',
        value: '2,100',
        description: 'New followers gained on social media',
      },
    ],
    services: ['Website Design', 'E-commerce Integration', 'Mobile Optimization', 'Social Media Setup'],
    testimonial: {
      text: 'PixelForge completely transformed our business. Having an online presence has been game-changing. Our customers love the convenience, and we love the increased revenue. The team was responsive and really understood what we needed.',
      author: 'Maria Santos',
      role: 'Owner, The Cozy Cup Cafe',
    },
    fullDescription: `The Cozy Cup is a charming independent cafe in the heart of downtown. With excellent coffee, pastries, and a warm atmosphere, they had built a loyal following through word-of-mouth. However, as the competitive landscape shifted and more customers expected businesses to have an online presence, The Cozy Cup was falling behind.

They came to us with a clear goal: establish a strong online presence that would help them attract new customers while better serving their existing ones.

## The Challenge

The Cozy Cup faced several challenges:
- No website or online visibility
- No way for customers to order ahead
- Unable to showcase their menu and special offerings
- Missing out on customers searching for cafes online
- Unable to capitalize on their social media presence

## Our Approach

We developed a comprehensive digital strategy that included:

1. **Website Design** - A beautiful, modern website that captures the warmth and character of the cafe while being fully optimized for mobile.

2. **Online Ordering System** - Integration with their point-of-sale system to allow customers to order and pay online for pickup, reducing wait times and improving efficiency.

3. **Reservation System** - A booking system for their seating area, perfect for groups or customers wanting to ensure they have a table.

4. **Social Media Integration** - Automatic Instagram feed display on the website, keeping content fresh and encouraging social media engagement.

5. **Menu Management** - Easy-to-update menu system so they can quickly showcase new items and daily specials.

## The Results

The impact was immediate and significant:
- Online orders started coming in within the first week
- By month 3, online orders represented 25% of their daily revenue
- Website traffic grew to 2,000+ monthly visitors
- Social media engagement increased dramatically
- Customer base expanded beyond their immediate neighborhood

The website has become not just a sales tool, but an essential part of their brand presence. It's helped them stay competitive while maintaining their independent, personal touch.`,
  },
  'hotel-booking': {
    title: 'Sunset Haven Hotel - Booking Revolution',
    category: 'Hotel',
    client: 'Sunset Haven Hotel',
    challenge:
      'A beautiful boutique hotel with premium accommodations was losing bookings because their outdated website didn&apos;t reflect the quality of their property. Customers preferred booking through third-party platforms like Booking.com and Airbnb, where they had to pay significant commissions.',
    solution:
      'We designed and built a stunning hotel website with an integrated booking engine. The site showcases each room with high-quality photos and detailed descriptions. The booking system connects directly to their property management system, allowing real-time availability updates and direct bookings.',
    results: [
      {
        label: '+220%',
        value: '+220%',
        description: 'Increase in direct bookings (excluding third-party platforms)',
      },
      {
        label: '89%',
        value: '89%',
        description: 'Average occupancy rate (up from 62%)',
      },
      {
        label: '$24,000',
        value: '$24,000',
        description: 'Commission savings per month',
      },
      {
        label: '4.9/5',
        value: '4.9/5',
        description: 'Average guest review rating',
      },
    ],
    services: ['Hotel Website Design', 'Booking Engine Integration', 'Payment Processing', 'Property Management Integration'],
    testimonial: {
      text: 'The new website has transformed our business. Direct bookings have skyrocketed, and we&apos;re no longer overly dependent on third-party platforms. The booking system is seamless for our guests and has reduced our administrative work significantly.',
      author: 'James Mitchell',
      role: 'Manager, Sunset Haven Hotel',
    },
    fullDescription: `Sunset Haven Hotel is a 25-room luxury boutique hotel located in a scenic coastal area. Despite having beautiful accommodations and excellent service, they were struggling with their online presence and booking strategy.

## The Challenge

Hotel guests today expect to be able to:
- See high-quality photos of rooms before booking
- Read detailed room descriptions and amenities
- Book directly with confidence
- Check real-time availability

Sunset Haven's old website lacked all of this, so guests were booking through third-party platforms like Booking.com. While this increased visibility, the hotel was paying 15-18% in commissions per booking.

## Our Solution

We created a complete hotel digital ecosystem:

1. **Professional Website** - A gorgeous website that showcases the hotel's unique character and each room type with professional photography and detailed descriptions.

2. **Direct Booking Engine** - Integration of a powerful booking system that updates in real-time with their property management system.

3. **Mobile Optimization** - 70% of bookings come from mobile devices, so we optimized every aspect for smartphones and tablets.

4. **Guest Reviews** - Built-in system for collecting and displaying guest reviews, building trust with potential guests.

5. **Special Packages** - Ability to create and promote special packages and seasonal rates directly on the website.

## The Impact

The direct booking strategy has been highly successful:
- Direct bookings increased by 220% in the first year
- Monthly commission savings exceed $24,000
- Occupancy rate improved from 62% to 89%
- Guest satisfaction scores increased
- Staff efficiency improved with automated booking confirmations

The hotel has reduced its dependence on third-party platforms while improving both revenue and guest satisfaction.`,
  },
  'restaurant-launch': {
    title: 'Bistro Rouge - Brand Launch',
    category: 'Restaurant',
    client: 'Bistro Rouge',
    challenge:
      'A new upscale French restaurant was launching in a competitive market with limited brand awareness. They needed to establish a professional presence, generate buzz, and secure reservations before opening day.',
    solution:
      'We developed a complete brand identity and digital presence. This included a sophisticated website with reservation integration, logo design, social media strategy, and a pre-launch marketing campaign that built anticipation among the target audience.',
    results: [
      {
        label: '45+',
        value: '45+',
        description: 'Reservation requests on opening day',
      },
      {
        label: '2,400',
        value: '2,400',
        description: 'Social media followers before opening',
      },
      {
        label: '300%',
        value: '300%',
        description: 'Website traffic growth in first month',
      },
      {
        label: '4.8/5',
        value: '4.8/5',
        description: 'Average rating on Google and Yelp',
      },
    ],
    services: ['Branding', 'Website Design', 'Reservation System', 'Social Media Strategy'],
    testimonial: {
      text: 'From concept to opening day, PixelForge handled everything. Their design made our restaurant look premium and prestigious. We had a waiting list on opening night thanks to their marketing strategy. Best investment we made.',
      author: 'Sophie Laurent',
      role: 'Chef & Owner, Bistro Rouge',
    },
    fullDescription: `Bistro Rouge is an upscale French restaurant launched by Chef Sophie Laurent, a classically trained chef with experience in Parisian fine dining establishments.

## The Challenge

Opening a new restaurant is challenging:
- Need to build brand awareness in a crowded market
- Need to establish credibility and positioning
- Need to generate reservations before opening
- Need a strong online presence to compete with established restaurants

Bistro Rouge had limited marketing budget and needed to be strategic about every dollar spent.

## Our Strategy

We created a cohesive brand and digital presence:

1. **Brand Development** - Logo, color palette, brand guidelines that communicate luxury and French elegance.

2. **Website Design** - A sophisticated website that reflects the upscale nature of the restaurant. Integrated OpenTable reservation system for easy booking.

3. **Pre-Launch Campaign** - Social media strategy and content calendar that built anticipation before opening.

4. **Grand Opening** - Coordinated launch campaign with media outreach and special promotions.

5. **Ongoing Social Media** - Monthly content strategy showcasing dishes, chef highlights, and special events.

## The Results

The coordinated approach was highly effective:
- Pre-launch social media campaign reached 15,000+ people
- Website traffic exceeded expectations
- Opening day had 45+ reservations and a waiting list
- Strong Google and Yelp reviews from day one
- Social media community continues to grow

The restaurant has become the go-to fine dining destination in the area.`,
  },
};

export default function CaseStudyDetail({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id];

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-8">The case study you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-primary hover:text-secondary mb-6">
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
              {caseStudy.category}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            {caseStudy.title}
          </h1>
          <p className="text-lg text-muted-foreground">Client: {caseStudy.client}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Solution</h2>
              <p className="text-muted-foreground">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {caseStudy.results.map((result, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-border">
                  <p className="text-3xl font-bold text-primary mb-2">{result.value}</p>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="prose prose-invert max-w-none mb-16">
            <div className="text-foreground space-y-6">
              {caseStudy.fullDescription.split('\n\n').map((paragraph, i) => (
                <div key={i}>
                  {paragraph.startsWith('##') ? (
                    <h3 className="text-xl font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h3>
                  ) : paragraph.includes('-') && paragraph.split('\n').length > 1 ? (
                    <ul className="space-y-2">
                      {paragraph.split('\n').map((item, j) => (
                        <li key={j} className="flex items-start text-muted-foreground">
                          <span className="text-primary mr-3">•</span>
                          <span>{item.replace('- ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">{paragraph}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Services Provided</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.services.map((service, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-lg p-8 mb-16">
            <blockquote className="text-lg mb-6">
              &ldquo;{caseStudy.testimonial.text}&rdquo;
            </blockquote>
            <footer>
              <p className="font-semibold">{caseStudy.testimonial.author}</p>
              <p className="text-sm opacity-90">{caseStudy.testimonial.role}</p>
            </footer>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let&apos;s create your success story. Schedule a free consultation with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90"
            >
              <Link href="/contact" className="flex items-center justify-center">
                Start Your Project <ArrowRight size={20} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              <Link href="/portfolio">View More Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
