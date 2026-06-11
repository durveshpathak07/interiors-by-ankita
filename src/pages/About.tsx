import { SEO } from '../components/SEO';
import { Section, FadeIn, Button } from '../components/ui';

export default function About() {
  return (
    <>
      <SEO title="About Us | The Cosy Canvas" description="Learn about our luxury interior design studio and our design philosophy." />
      
      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeIn>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Our Story</h1>
             <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
               We believe that the best spaces are those that reflect the people who live in them. We are a studio dedicated to the art of living well.
             </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           <FadeIn>
             <div className="relative aspect-[4/5] overflow-hidden bg-stone-100 mb-8">
               <img src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=1200" alt="Lead Designer" className="w-full h-full object-cover" />
             </div>
             <p className="text-sm tracking-[0.2em] uppercase text-stone-400 font-semibold mb-2">The Founder</p>
             <h2 className="text-3xl font-serif text-stone-900">Our Studio Head</h2>
           </FadeIn>
           <FadeIn delay={0.2} className="lg:pt-24 space-y-8">
              <p className="text-xl md:text-2xl font-serif text-stone-900 italic leading-relaxed text-stone-800">
                "My approach is rooted in the belief that your home is your ultimate sanctuary. It should not only look effortless but feel profoundly comfortable."
              </p>
              <div className="space-y-6 text-stone-600 leading-relaxed">
                 <p>
                   Founded in 2018, The Cosy Canvas emerged from a singular vision: to bring a sense of curated, understated luxury to residential and commercial spaces. What started as a passion for spatial geometry and textural balance has evolved into a full-service design studio recognized for its sophisticated and timeless aesthetic.
                 </p>
                 <p>
                   Our background intricately blends architectural discipline with a nuanced understanding of decorative arts. This duality allows the studio to manage everything from complex structural renovations to the final placement of a vintage vase.
                 </p>
                 <p>
                   Our team is small by design, ensuring that every project receives personal oversight and our collective undivided attention. We pride ourselves on forging deep relationships with our clients, understanding their routines, their tastes, and how they want to feel in their space.
                 </p>
              </div>
           </FadeIn>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-stone-900 text-stone-50">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-800">
            <FadeIn className="pt-8 md:pt-0 md:px-8">
               <h3 className="text-2xl font-serif mb-4">Timeless Elegance</h3>
               <p className="text-stone-400 leading-relaxed font-light">We eschew fleeting trends in favor of classic proportions and enduring materials that gracefully stand the test of time.</p>
            </FadeIn>
            <FadeIn delay={0.1} className="pt-12 md:pt-0 md:px-8">
               <h3 className="text-2xl font-serif mb-4">Obsessive Detail</h3>
               <p className="text-stone-400 leading-relaxed font-light">From the alignment of floorboards to the concealed hinges on custom joinery, we believe perfection lives in the minutiae.</p>
            </FadeIn>
            <FadeIn delay={0.2} className="pt-12 md:pt-0 md:px-8">
               <h3 className="text-2xl font-serif mb-4">Client Centric</h3>
               <p className="text-stone-400 leading-relaxed font-light">Your lifestyle dictates our design. We listen intently and translate your needs into highly functional, beautiful environments.</p>
            </FadeIn>
         </div>
      </Section>

      {/* Studio Gallery */}
      <Section>
        <div className="text-center mb-16">
          <FadeIn>
             <h2 className="text-sm tracking-[0.2em] text-stone-500 uppercase mb-4">Behind the Scenes</h2>
             <h3 className="text-4xl font-serif text-stone-900">Life at the Studio</h3>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
             "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800",
             "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
             "https://images.unsplash.com/photo-1556761175-5973dc0f32f7?auto=format&fit=crop&q=80&w=800"
           ].map((img, i) => (
             <FadeIn key={i} delay={i * 0.1}>
                <div className="aspect-square overflow-hidden bg-stone-100">
                   <img src={img} alt="Studio Life" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
             </FadeIn>
           ))}
        </div>
        <div className="mt-16 text-center">
           <FadeIn delay={0.4}>
              <h3 className="font-serif text-2xl text-stone-900 mb-6">Want to create something beautiful together?</h3>
              <Button to="/contact" variant="primary">Let's Talk</Button>
           </FadeIn>
        </div>
      </Section>
    </>
  );
}
