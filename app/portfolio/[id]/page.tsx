import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { caseStudies, getCaseStudyById } from '@/app/data/caseStudies';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ id: study.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudyById(id);

  return {
    title: `${study?.title ?? 'Success Story'} | Servestack`,
    description: study?.description ?? 'Hospitality business growth story',
  };
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const study = getCaseStudyById(id);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 sm:py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/portfolio" className="inline-flex items-center text-sm text-primary hover:text-primary/80 mb-6">
            <ArrowLeft size={16} className="mr-2" /> Back to Success Stories
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">{study.title}</h1>
          <p className="text-muted-foreground text-lg">{study.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Business challenge</h2>
              <p className="text-muted-foreground">{study.challenge}</p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-foreground mb-2">Our solution</h2>
              <p className="text-muted-foreground">{study.solution}</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.detailedResults.map((result) => (
                <div key={result.label} className="rounded-lg border border-border bg-muted/30 p-4">
                  <p className="text-2xl font-bold text-primary">{result.value}</p>
                  <p className="text-sm font-semibold text-foreground mb-1">{result.label}</p>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-semibold text-foreground mb-3">Client testimonial</h2>
            <blockquote className="text-foreground italic mb-3">&ldquo;{study.testimonial.text}&rdquo;</blockquote>
            <p className="text-sm text-muted-foreground">{study.testimonial.author} • {study.testimonial.role}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
