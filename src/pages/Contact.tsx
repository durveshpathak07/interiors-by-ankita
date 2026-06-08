import { SEO } from '../components/SEO';
import { Section, FadeIn, Button } from '../components/ui';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <SEO title="Contact Us | Interiors By Ankita Shinde" description="Get in touch to book a consultation for your luxury interior design project." />
      
      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeIn>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Let's Connect</h1>
             <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
               We’d love to hear about your project. Please fill out the form below or reach out directly to schedule a design consultation.
             </p>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
           {/* Contact Info */}
           <FadeIn>
              <div className="bg-stone-900 text-stone-50 p-12 lg:p-16 h-full flex flex-col justify-between">
                 <div>
                    <h3 className="text-2xl font-serif mb-12">Studio Details</h3>
                    <ul className="space-y-8 font-light">
                      <li className="flex items-start gap-4">
                        <MapPin size={24} className="shrink-0 mt-1 text-stone-400" />
                        <div>
                           <p className="text-sm tracking-widest uppercase text-stone-400 font-semibold mb-2">Visit Us</p>
                           <p className="leading-relaxed">123 Luxury Avenue,<br />Gangapur Road,<br />Nashik, Maharashtra 422005</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Phone size={24} className="shrink-0 mt-1 text-stone-400" />
                        <div>
                           <p className="text-sm tracking-widest uppercase text-stone-400 font-semibold mb-2">Call Us</p>
                           <a href="tel:+919876543210" className="hover:text-stone-300 transition-colors">+91 98765 43210</a>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <Mail size={24} className="shrink-0 mt-1 text-stone-400" />
                        <div>
                           <p className="text-sm tracking-widest uppercase text-stone-400 font-semibold mb-2">Email Us</p>
                           <a href="mailto:hello@ankitashinde.com" className="hover:text-stone-300 transition-colors">hello@ankitashinde.com</a>
                        </div>
                      </li>
                    </ul>
                 </div>
                 
                 <div className="mt-16 pt-8 border-t border-stone-800">
                    <p className="text-sm tracking-widest uppercase text-stone-400 font-semibold mb-4">Follow Along</p>
                    <div className="flex gap-4">
                      <a href="#" className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-50 hover:text-stone-900 transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
                 </div>
              </div>
           </FadeIn>

           {/* Form */}
           <FadeIn delay={0.2}>
             <form className="space-y-8 bg-stone-50 p-8 md:p-12 border border-stone-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <h3 className="text-2xl font-serif text-stone-900 mb-8">Project Inquiry</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label htmlFor="name" className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Full Name *</label>
                     <input type="text" id="name" required className="w-full border-b border-stone-300 py-2 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900" />
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="phone" className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Phone Number *</label>
                     <input type="tel" id="phone" required className="w-full border-b border-stone-300 py-2 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="email" className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Email Address *</label>
                   <input type="email" id="email" required className="w-full border-b border-stone-300 py-2 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label htmlFor="type" className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Project Type</label>
                     <select id="type" className="w-full border-b border-stone-300 py-2 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900 appearance-none rounded-none">
                       <option value="">Select...</option>
                       <option value="residential">Residential</option>
                       <option value="commercial">Commercial</option>
                       <option value="renovation">Renovation</option>
                       <option value="styling">Styling & Decor</option>
                     </select>
                   </div>
                   <div className="space-y-2">
                     <label htmlFor="budget" className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Estimated Budget</label>
                     <select id="budget" className="w-full border-b border-stone-300 py-2 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900 appearance-none rounded-none">
                       <option value="">Select...</option>
                       <option value="5-15L">₹5L - ₹15L</option>
                       <option value="15-30L">₹15L - ₹30L</option>
                       <option value="30L-50L">₹30L - ₹50L</option>
                       <option value="50L+">₹50L+</option>
                     </select>
                   </div>
                </div>

                <div className="space-y-2">
                   <label htmlFor="message" className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Project Details *</label>
                   <textarea id="message" rows={4} required placeholder="Tell us about your timeline, location, and vision..." className="w-full border-b border-stone-300 py-2 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900 resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-stone-900 text-stone-50 py-4 uppercase text-sm tracking-widest font-medium hover:bg-stone-800 transition-colors">
                  Submit Inquiry
                </button>
             </form>
           </FadeIn>
        </div>
      </Section>
    </>
  );
}
