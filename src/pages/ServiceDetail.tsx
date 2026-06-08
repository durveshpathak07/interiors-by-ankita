import { useParams, Navigate, Link } from 'react-router-dom';
import { services } from '../lib/data';
import { SEO } from '../components/SEO';
import { Section, FadeIn, Button } from '../components/ui';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <SEO title={`${service.title} | Interiors By Ankita Shinde`} description={service.shortDescription} />
      
      {/* Hero */}
      <section className="pt-8 mb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
           <Link to="/services" className="inline-flex items-center text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 mb-8 transition-colors">
             <ArrowLeft size={16} className="mr-2" /> All Services
           </Link>
           <FadeIn>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div>
                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6">{service.title}</h1>
                   <p className="text-stone-600 text-lg leading-relaxed mb-8">{service.description}</p>
                   <Button to="/contact" variant="primary">Inquire About This Service</Button>
                </div>
                <div className="relative aspect-square overflow-hidden bg-stone-100">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
             </div>
           </FadeIn>
        </div>
      </section>

      <Section className="bg-stone-100">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
               <h2 className="text-3xl font-serif text-stone-900 mb-8">What exactly is included?</h2>
               <ul className="space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start text-stone-600 bg-stone-50 p-4 border border-stone-200">
                       <CheckCircle2 size={24} className="mr-4 text-stone-400 shrink-0" />
                       <span className="mt-0.5">{benefit}</span>
                    </li>
                  ))}
               </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
               <h2 className="text-3xl font-serif text-stone-900 mb-8">Our Design Process</h2>
               <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-stone-300">
                  {service.designProcess.map((step, i) => (
                    <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                       <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-stone-100 bg-stone-900 text-stone-50 text-xs font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
                          {step.step}
                       </div>
                       <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-stone-50 p-6 border border-stone-200 shadow-sm">
                          <h4 className="font-serif text-lg text-stone-900 mb-2">{step.title}</h4>
                          <p className="text-stone-600 text-sm">{step.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </FadeIn>
         </div>
      </Section>
    </>
  );
}
