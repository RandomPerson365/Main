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
    <Link href={`/portfolio/${id}`}>
      <div className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-muted">
          <div
            className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors flex items-center justify-center text-2xl font-bold text-primary/50"
            style={{
              backgroundImage: `linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)`,
              opacity: 0.15,
            }}
          >
            {image}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full group-hover:bg-primary/20 transition-colors">
              {category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3 mb-4 py-4 border-t border-b border-border">
            {metrics.map((metric, i) => (
              <div key={i}>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-lg font-bold text-primary">{metric.value}</p>
              </div>
            ))}
          </div>

          {/* Result */}
          <p className="text-xs text-muted-foreground mb-4 flex-grow">
            <span className="font-semibold text-foreground">Result:</span> {result}
          </p>

          {/* CTA */}
          <div className="flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
            View Case Study <ArrowRight size={16} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
