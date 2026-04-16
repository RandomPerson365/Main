import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group glass-card rounded-xl p-6 relative overflow-hidden">
      {/* Glow background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex p-3 bg-background border border-border/50 shadow-inner rounded-xl group-hover:border-primary/50 group-hover:shadow-[0_0_15px_oklch(0.72_0.19_195/0.3)] transition-all duration-300">
          <div className="text-secondary group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 pb-4 border-b border-border/30">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="text-sm text-foreground flex items-center group/item hover:text-primary transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3 group-hover/item:bg-primary group-hover/item:shadow-[0_0_8px_oklch(0.72_0.19_195)] transition-all" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
