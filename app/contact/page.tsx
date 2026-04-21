import Link from 'next/link';
import { Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ContactFormWizard } from '@/components/ContactFormWizard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const metadata = {
  title: 'Contact | Servestack',
  description: 'Talk to us about your cafe, restaurant, or hotel website project.',
};

const faqs = [
  {
    q: 'What do you need from me to start?',
    a: 'Your business name, menu/room details, logo (if available), photos, and your preferred launch date.',
  },
  {
    q: 'Can you help if I already have a website?',
    a: 'Yes. We can improve your current website or rebuild it if needed without losing your business identity.',
  },
  {
    q: 'Do you offer post-launch support?',
    a: 'Yes. We offer support plans for updates, bug fixes, and performance checks.',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="section-reveal py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let’s discuss your business goals</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We keep this simple: tell us what you want to improve, and we will suggest the best website plan for your cafe or hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-lift rounded-xl border border-border bg-card p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Quick contact options</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-start">
                  <Phone size={18} className="text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Call us</p>
                    <Link
                      href="tel:+91-9545244572"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Call us at +91 9545244572"
                    >
                      +91 9545244572
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={18} className="text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">Akshay12345Singh@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle size={18} className="text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <Link
                      href="https://wa.me/919545244572"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Message us on WhatsApp at +91 9545244572 (opens in new tab)"
                    >
                      Message us on +91 9545244572
                    </Link>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock size={18} className="text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Working hours</p>
                    <p className="text-muted-foreground">Mon-Sat, 10:00 AM to 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactFormWizard />
          </div>
        </div>
      </section>

      <section className="section-reveal section-delay-2 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 text-center">Common questions from owners</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="card-lift rounded-lg border border-border bg-card px-5 border-b-current">
                <AccordionTrigger className="text-foreground hover:no-underline py-5">{item.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </main>
  );
}
