import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { InteractiveCardWrapper } from '@/components/InteractiveCardWrapper';

interface CaseStudyCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
  metrics: Array<{ label: string; value: string }>;
}

export function CaseStudyCard({ id, title, category, description, result, image, metrics }: CaseStudyCardProps) {
  return (
    <Link
      href={`/portfolio/${id}`}
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <InteractiveCardWrapper className="card-lift h-full rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition-colors">
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl transition-transform duration-200 group-hover:scale-110" aria-hidden="true">
            {image}
          </span>
          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">{category}</span>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-md bg-muted/50 p-3">
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className="text-lg font-semibold text-foreground">{metric.value}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-foreground mb-4"><span className="font-semibold">Result:</span> {result}</p>
        <span className="inline-flex items-center text-sm font-semibold text-primary">
          Read full story <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </InteractiveCardWrapper>
    </Link>
  );
}
