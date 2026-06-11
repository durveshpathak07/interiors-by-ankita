import { SEO } from '../components/SEO';
import { Section, FadeIn } from '../components/ui';
import { services } from '../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  return (
    <>
      <SEO title="Our Services | The Cosy Canvas" description="Comprehensive luxury interior design services including residential, commercial, renovation and styling." />
      
      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeIn>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Our Expertise</h1>
             <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
               We offer end-to-end luxury interior design solutions, transforming your vision into reality with impeccable taste and precise execution.
             </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className="flex flex-col md:flex-row gap-12 lg:gap-24 items-center group">
              <FadeIn className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                 <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                   <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                   />
                 </div>
              </FadeIn>
              <FadeIn className="w-full md:w-1/2 space-y-6" delay={0.2}>
                 <span className="text-sm tracking-[0.2em] text-stone-400 uppercase">0{index + 1}</span>
                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900">{service.title}</h2>
                 <p className="text-stone-600 text-lg leading-relaxed">{service.shortDescription}</p>
                 <ul className="space-y-3 text-stone-500 py-4">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start">
                         <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-stone-300 rounded-full shrink-0"></span>
                         {benefit}
                      </li>
                    ))}
                 </ul>
                 <Link 
                    to={`/services/${service.slug}`} 
                    className="inline-flex items-center tracking-widest text-sm uppercase font-medium text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 transition-colors"
                 >
                    Explore Service <ArrowRight size={16} className="ml-2" />
                 </Link>
              </FadeIn>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
