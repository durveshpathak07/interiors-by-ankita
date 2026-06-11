import { SEO } from '../components/SEO';
import { Section, FadeIn, Button } from '../components/ui';
import { services, projects, testimonials } from '../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-8 z-10">
              <FadeIn>
                <p className="text-stone-500 uppercase tracking-[0.2em] text-sm font-semibold">
                  The Cosy Canvas
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] text-stone-900">
                  Designing Spaces That <span className="italic">Inspire Living.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-stone-600 text-lg md:text-xl max-w-lg leading-relaxed">
                  We create timeless luxury interiors that blend aesthetics with functionality, reflecting your unique lifestyle and personality.
                </p>
              </FadeIn>
              <FadeIn delay={0.3} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button to="/projects" variant="primary">Explore Projects</Button>
                <Button to="/contact" variant="outline">Book Consultation</Button>
              </FadeIn>
            </div>
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.4}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="Luxury Interior Living Room" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 border border-stone-900/10 m-4 sm:m-8 pointer-events-none"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-stone-900 text-stone-100 py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-stone-800/50">
            <FadeIn delay={0.1}>
              <div className="text-5xl md:text-6xl font-serif mb-2 text-stone-200">100+</div>
              <div className="text-stone-400 text-sm tracking-widest uppercase">Projects Completed</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-5xl md:text-6xl font-serif mb-2 text-stone-200">300+</div>
              <div className="text-stone-400 text-sm tracking-widest uppercase">Happy Clients</div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-5xl md:text-6xl font-serif mb-2 text-stone-200">5+</div>
              <div className="text-stone-400 text-sm tracking-widest uppercase">Years Experience</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-5xl md:text-6xl font-serif mb-2 text-stone-200">4.9/5</div>
              <div className="text-stone-400 text-sm tracking-widest uppercase">Client Satisfaction</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Section className="bg-stone-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn className="max-w-xl">
            <h2 className="text-sm tracking-[0.2em] text-stone-500 uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900">Tailored Designs. Timeless Spaces.</h3>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/services" className="group hidden md:inline-flex items-center text-sm tracking-widest uppercase font-medium text-stone-800 hover:text-stone-900 transition-colors">
              View All Services
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Link to={`/services/${service.slug}`} className="group block h-full bg-stone-50 p-6 md:p-8 hover:bg-white transition-all shadow-sm hover:shadow-md border border-stone-200 border-opacity-50">
                <h4 className="text-xl font-serif text-stone-900 mb-3">{service.title}</h4>
                <p className="text-stone-600 text-sm mb-6 line-clamp-2">{service.shortDescription}</p>
                <span className="inline-flex items-center text-xs tracking-widest uppercase text-stone-900 font-semibold group-hover:text-stone-600 transition-colors">
                  Discover More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <div className="mt-8 md:hidden text-center">
          <Button to="/services" variant="outline" className="w-full">View All Services</Button>
        </div>
      </Section>

      {/* Projects Preview */}
      <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <FadeIn className="max-w-xl">
            <h2 className="text-sm tracking-[0.2em] text-stone-500 uppercase mb-4">Featured Projects</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900">Crafted with Passion. Designed for Life.</h3>
          </FadeIn>
          <FadeIn delay={0.2}>
             <Button to="/projects" variant="link" icon>View Portfolio</Button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.slice(0, 4).map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <Link to={`/projects/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-stone-200">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 text-xs tracking-widest uppercase font-medium">
                    {project.category}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-serif text-stone-900 mb-2 truncate group-hover:text-stone-600 transition-colors">{project.title}</h4>
                    <p className="text-stone-500 text-sm tracking-wide">{project.location}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors shrink-0">
                     <ArrowRight size={18} className="transition-transform group-hover:-rotate-45" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* About Preview */}
      <Section className="bg-stone-900 text-stone-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
               <img 
                  src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Ankita Shinde - Founder" 
                  className="w-full h-full object-cover"
               />
               <div className="absolute -bottom-8 -right-8 bg-stone-100 p-8 hidden md:block">
                  <p className="font-serif text-2xl text-stone-900 italic">"Design is not just what it looks like, it's how it feels."</p>
               </div>
            </div>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-sm tracking-[0.2em] text-stone-400 uppercase">The Studio</h2>
              <h3 className="text-4xl md:text-5xl font-serif mt-4 mb-6">Welcome to our Studio.</h3>
              <div className="space-y-4 text-stone-300 leading-relaxed font-light">
                <p>
                  Founded on a passion for creating spaces that resonate with personal stories, The Cosy Canvas has grown into a premier luxury design studio serving clients across Maharashtra and beyond.
                </p>
                <p>
                  We believe that a well-designed space has the power to transform lives. Our approach marries meticulous space planning with an intuitive sense of aesthetics, resulting in homes that are not only visual masterpieces but also deeply comfortable havens.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link to="/about" className="inline-flex items-center bg-stone-50 text-stone-900 px-8 py-4 uppercase text-sm tracking-widest hover:bg-stone-300 transition-colors">
                Read Our Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-stone-50">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <FadeIn>
             <h2 className="text-sm tracking-[0.2em] text-stone-500 uppercase mb-4">Client Words</h2>
             <h3 className="text-4xl font-serif text-stone-900">Enduring Relationships.</h3>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
             <FadeIn key={testimonial.id} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-10 h-full flex flex-col shadow-sm border border-stone-100">
                   <div className="flex text-yellow-500 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                   </div>
                   <p className="text-stone-600 italic mb-8 flex-grow leading-relaxed">"{testimonial.review}"</p>
                   <div className="flex items-center gap-4 mt-auto">
                      <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                         <h5 className="font-serif text-stone-900">{testimonial.name}</h5>
                         <p className="text-xs text-stone-500 uppercase tracking-widest">{testimonial.project}</p>
                      </div>
                   </div>
                </div>
             </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="relative py-32 overflow-hidden">
         <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" alt="Contact Background" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm"></div>
         </div>
         <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <FadeIn>
               <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Ready to transform your space?</h2>
               <p className="text-stone-300 text-lg mb-10 max-w-xl mx-auto">
                  Let's collaborate to bring your vision to life. Schedule a complimentary consultation with our design team.
               </p>
               <Button to="/contact" variant="primary" className="bg-white text-stone-900 hover:bg-stone-200">
                 Start Your Project
               </Button>
            </FadeIn>
         </div>
      </section>
    </>
  );
}
