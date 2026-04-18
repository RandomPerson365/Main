import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Servestack</h3>
            <p className="text-sm text-muted-foreground">
              We help cafes, restaurants, and hotels grow online with practical websites that bring real bookings and orders.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/websites" className="hover:text-foreground">Professional Websites</Link></li>
              <li><Link href="/ordering" className="hover:text-foreground">Online Ordering</Link></li>
              <li><Link href="/bookings" className="hover:text-foreground">Booking System</Link></li>
              <li><Link href="/support" className="hover:text-foreground">Support & Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-foreground">Success Stories</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Get in touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Akshay12345Singh@gmail.com</p>
              <p>+91 9545244572</p>
              <p>Bengaluru, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-sm text-muted-foreground flex flex-col md:flex-row md:justify-between gap-2">
          <p>&copy; {currentYear} Servestack. All rights reserved.</p>
          <p>Built for Indian hospitality businesses.</p>
        </div>
      </div>
    </footer>
  );
}
