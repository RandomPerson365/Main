import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
}

export function CaseStudyCard({
  id,
  title,
  category,
  description,
  result,
  image,
  metrics,
}: CaseStudyCardProps) {
  return (
    <Link href={`/portfolio/${id}`} className="block h-full outline-none group focus-visible:ring-2 focus-visible:ring-primary rounded-xl">
      <div className="glass-card rounded-xl overflow-hidden h-full flex flex-col relative group-hover:-translate-y-2 transition-transform duration-500">
        
        {/* Glow border overlay */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-500 pointer-events-none z-20" />
        
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-background border-b border-border/30">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div
            className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-700 relative z-10"
          >
            {/* Pulsing circle behind icon */}
            <div className="absolute inset-0 m-auto w-16 h-16 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 group-hover:animate-glow-pulse transition-colors duration-500" />
            <span className="relative z-10 drop-shadow-md">{image}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 bg-background/50 border border-primary/20 text-primary text-xs font-semibold rounded-full shadow-[0_0_10px_oklch(0.72_0.19_195/0.1)] group-hover:shadow-[0_0_15px_oklch(0.72_0.19_195/0.3)] transition-shadow">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-border/30 bg-background/30 rounded-lg px-2">
            {metrics.map((metric, i) => (
              <div key={i} className="text-center">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1 font-semibold">{metric.label}</p>
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Result */}
          <p className="text-xs text-muted-foreground mb-6 flex-grow border-l-2 border-secondary/50 pl-3">
            <span className="font-semibold text-foreground tracking-wide block mb-1">IMPACT VERIFIED:</span> 
            {result}
          </p>

          {/* CTA */}
          <div className="flex items-center justify-between text-primary font-semibold text-sm mt-auto pt-2">
            <span className="group-hover:text-secondary transition-colors">Access Datacore</span>
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:translate-x-1 transition-all duration-300">
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
