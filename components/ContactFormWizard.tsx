'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

const formSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessType: z.string().min(2, 'Please specify your business type'),
  websiteUrl: z.string().optional(),
  needs: z.string().min(10, 'Please tell us a bit more about your needs'),
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactFormWizard() {
  const [step, setStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: '',
      businessType: '',
      websiteUrl: '',
      needs: '',
      name: '',
      email: '',
      phone: '',
    },
    mode: 'onTouched',
  });

  const generateSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (step === 1) {
      fieldsToValidate = ['businessName', 'businessType', 'websiteUrl'];
    } else if (step === 2) {
      fieldsToValidate = ['needs'];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setStep((s) => Math.min(s + 1, 3));
    }
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  if (isSuccess) {
    return (
      <div className="card-lift rounded-xl border border-border bg-card p-8 text-center section-reveal">
        <CheckCircle2 className="mx-auto h-16 w-16 text-primary mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Request Received!</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. We will review your details and contact you within 24 hours.
        </p>
        <Button onClick={() => {
          setIsSuccess(false);
          setStep(1);
          form.reset();
        }}>
          Start New Inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="card-lift rounded-xl border border-border bg-card p-6 sm:p-8 section-reveal section-delay-1 overflow-hidden relative">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold text-foreground">
            {step === 1 && 'Business Details'}
            {step === 2 && 'Project Needs'}
            {step === 3 && 'Contact Info'}
          </h2>
          <span className="text-sm font-medium text-muted-foreground">Step {step} of 3</span>
        </div>
        <Progress value={(step / 3) * 100} className="h-2" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(generateSubmit)} className="space-y-6">
          
          {/* Step 1: Business Details */}
          <div className={cn("space-y-4 transition-all duration-500", step === 1 ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-8')}>
            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. The Daily Brew Cafe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Cafe, Fine Dining, Boutique Hotel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="websiteUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Website (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Step 2: Project Needs */}
          <div className={cn("space-y-4 transition-all duration-500", step === 2 ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-8')}>
            <FormField
              control={form.control}
              name="needs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tell us about your requirements</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="I need a website with table booking, or I want to update my current digital menu..." 
                      className="min-h-[120px] resize-none"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Step 3: Contact Info */}
          <div className={cn("space-y-4 transition-all duration-500", step === 3 ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 translate-x-8')}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Arjun Mehta" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="arjun@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="flex justify-between pt-4 mt-6 border-t border-border">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Back
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit Request'}
                {!isSubmitting && <CheckCircle2 className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
}
