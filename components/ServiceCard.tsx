import Link from 'next/link';
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export function ServiceCard({ icon, title, description, features, href }: ServiceCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 h-full flex flex-col">
      <div className="mb-4 inline-flex p-3 rounded-lg bg-muted text-primary">{icon}</div>

      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      <ul className="space-y-2 mb-6 flex-grow">
        {features.map((feature) => (
          <li key={feature} className="text-sm text-foreground flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      <Link href={href} className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80">
        View service details <ArrowRight size={16} className="ml-1" />
      </Link>
    </div>
  );
}
