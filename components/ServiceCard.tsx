import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
      <div className="mb-4 inline-block p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
        <div className="text-primary group-hover:text-secondary transition-colors">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-foreground flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
