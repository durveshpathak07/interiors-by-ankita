import { SEO } from '../components/SEO';
import { Section, FadeIn } from '../components/ui';
import { testimonials } from '../lib/data';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <>
      <SEO title="Client Testimonials | Interiors By Ankita Shinde" description="Read what our clients have to say about working with Interiors By Ankita Shinde." />
      
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeIn>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Client Words</h1>
             <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
               The true measure of our success is the satisfaction of our clients. Read about their experiences collaborating with our studio.
             </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {testimonials.map((testimonial, i) => (
             <FadeIn key={testimonial.id} delay={i * 0.1}>
                <div className="bg-stone-50 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 lg:gap-16 items-center shadow-sm border border-stone-200">
                   <div className="w-full md:w-1/3 flex flex-col text-center md:text-left">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0 mb-6" 
                      />
                      <h4 className="font-serif text-2xl text-stone-900 mb-1">{testimonial.name}</h4>
                      <p className="text-xs text-stone-500 uppercase tracking-widest">{testimonial.project}</p>
                      <div className="flex text-yellow-500 mt-4 justify-center md:justify-start">
                         {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                   </div>
                   <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-stone-200 pt-8 md:pt-0 md:pl-8 lg:pl-16 relative">
                      <span className="text-7xl font-serif text-stone-300 absolute top-0 md:-top-4 left-0 md:left-8 opacity-50 z-0">"</span>
                      <p className="text-stone-600 text-xl lg:text-2xl italic leading-relaxed relative z-10">
                        {testimonial.review}
                      </p>
                   </div>
                </div>
             </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
