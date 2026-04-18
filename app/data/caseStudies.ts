export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
  detailedResults: Array<{ label: string; value: string; description: string }>;
  testimonial: { text: string; author: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'cafe-online-orders',
    title: 'The Daily Brew Cafe, Lucknow',
    category: 'Cafe',
    description: 'Independent cafe needed online ordering and better local visibility.',
    challenge: 'The cafe relied only on walk-ins and calls. Peak hour phone calls were missed and repeat customers had no easy way to reorder.',
    solution: 'We built a fast mobile website with menu, WhatsApp ordering, and prepaid pickup flow linked to Google Maps.',
    result: 'Online orders became a consistent revenue channel within 8 weeks.',
    image: '☕',
    metrics: [
      { label: 'Online orders', value: '+172%' },
      { label: 'Monthly revenue', value: '+₹4.8L' },
    ],
    detailedResults: [
      { label: 'Online orders', value: '+172%', description: 'Order volume increased through direct website orders' },
      { label: 'Monthly revenue', value: '+₹4.8L', description: 'Average monthly revenue growth after launch' },
      { label: 'Repeat orders', value: '41%', description: 'Customers who ordered again within 30 days' },
      { label: 'Call load', value: '-58%', description: 'Reduction in manual phone-order handling' },
    ],
    testimonial: {
      text: 'Now customers find us, check the menu, and order quickly. We are less busy on calls and more focused on service.',
      author: 'Nidhi Rao',
      role: 'Owner, The Daily Brew Cafe',
    },
  },
  {
    id: 'hotel-direct-bookings',
    title: 'Lakeview Stay, Udaipur',
    category: 'Hotel',
    description: 'Boutique hotel wanted more direct bookings and fewer OTA commissions.',
    challenge: 'Most bookings came from aggregator apps, reducing margins and limiting guest communication before arrival.',
    solution: 'We launched a clean room showcase site with instant booking requests, payment links, and automated confirmation emails.',
    result: 'Direct booking share doubled in one quarter.',
    image: '🏨',
    metrics: [
      { label: 'Direct bookings', value: '+109%' },
      { label: 'Commission saved', value: '₹3.2L/quarter' },
    ],
    detailedResults: [
      { label: 'Direct bookings', value: '+109%', description: 'Growth in bookings from the hotel website' },
      { label: 'Commission saved', value: '₹3.2L/quarter', description: 'Reduced OTA fees with more direct reservations' },
      { label: 'Occupancy', value: '88%', description: 'Average occupancy in peak season' },
      { label: 'Booking response time', value: '<10 min', description: 'Average time to confirm inquiries' },
    ],
    testimonial: {
      text: 'Our website finally looks premium and guests trust booking direct. This has improved both occupancy and margins.',
      author: 'Arjun Mehta',
      role: 'General Manager, Lakeview Stay',
    },
  },
  {
    id: 'restaurant-reservations',
    title: 'Spice Court, Mumbai',
    category: 'Restaurant',
    description: 'Busy family restaurant needed reservations and weekend crowd control.',
    challenge: 'Hosts managed bookings manually on paper and WhatsApp, causing missed bookings and overbooking.',
    solution: 'We set up table booking slots, auto-confirmations, and a simple staff dashboard for daily reservation management.',
    result: 'Weekend table utilization increased while reducing no-shows.',
    image: '🍽️',
    metrics: [
      { label: 'Reserved tables', value: '+96%' },
      { label: 'No-shows', value: '-34%' },
    ],
    detailedResults: [
      { label: 'Reserved tables', value: '+96%', description: 'More tables booked in advance' },
      { label: 'No-shows', value: '-34%', description: 'Drop in no-shows with reminders' },
      { label: 'Weekend covers', value: '+27%', description: 'More guests served on high-demand days' },
      { label: 'Staff time saved', value: '11 hrs/week', description: 'Less manual booking coordination work' },
    ],
    testimonial: {
      text: 'The booking system has made weekends smoother. Our team is less stressed and guests get faster confirmations.',
      author: 'Sana Khan',
      role: 'Operations Manager, Spice Court',
    },
  },
];

export function getCaseStudyById(id: string) {
  return caseStudies.find((study) => study.id === id);
}
