import { useParams, Navigate, Link } from 'react-router-dom';
import { projects } from '../lib/data';
import { SEO } from '../components/SEO';
import { Section, FadeIn, Button } from '../components/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <>
      <SEO title={`${project.title} | Interiors By Ankita Shinde`} description={project.overview} />
      
      {/* Hero Image */}
      <section className="pt-8 mb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
           <Link to="/projects" className="inline-flex items-center text-sm tracking-widest uppercase text-stone-500 hover:text-stone-900 mb-8 transition-colors">
             <ArrowLeft size={16} className="mr-2" /> Back to Projects
           </Link>
           <FadeIn>
             <div className="relative aspect-[21/9] w-full overflow-hidden mb-12">
               <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             </div>
           </FadeIn>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
              <FadeIn className="md:col-span-2">
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 mb-6">{project.title}</h1>
                 <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-wrap">{project.overview}</p>
                 <div className="mt-12">
                   <h3 className="font-serif text-2xl text-stone-900 mb-6">The Gallery</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {project.gallery.map((img, i) => (
                        <div key={i} className="aspect-[4/5] bg-stone-100 overflow-hidden">
                           <img src={img} alt={`${project.title} Detail ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                      ))}
                   </div>
                 </div>
              </FadeIn>

              {/* Sidebar Info */}
              <FadeIn delay={0.2} className="md:col-span-1">
                 <div className="bg-stone-50 p-8 border border-stone-200">
                    <h3 className="text-sm tracking-[0.2em] text-stone-400 uppercase mb-8">Project Details</h3>
                    <div className="space-y-6">
                       <div>
                          <p className="text-xs tracking-widest text-stone-500 uppercase mb-1">Location</p>
                          <p className="text-stone-900 font-medium">{project.location}</p>
                       </div>
                       <hr className="border-stone-200" />
                       <div>
                          <p className="text-xs tracking-widest text-stone-500 uppercase mb-1">Category</p>
                          <p className="text-stone-900 font-medium">{project.category}</p>
                       </div>
                       <hr className="border-stone-200" />
                       <div>
                          <p className="text-xs tracking-widest text-stone-500 uppercase mb-1">Design Style</p>
                          <p className="text-stone-900 font-medium">{project.designStyle}</p>
                       </div>
                       <hr className="border-stone-200" />
                       <div>
                          <p className="text-xs tracking-widest text-stone-500 uppercase mb-1">Area</p>
                          <p className="text-stone-900 font-medium">{project.area}</p>
                       </div>
                    </div>
                    
                    <div className="mt-12 pt-8 border-t border-stone-200">
                       <p className="font-serif text-xl italic text-stone-900 mb-6">Inspired by this project?</p>
                       <Button to="/contact" variant="primary" className="w-full">Book Consultation</Button>
                    </div>
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* Related Projects */}
      <Section className="bg-stone-100">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900">More Projects</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rp, index) => (
              <FadeIn key={rp.id} delay={index * 0.1}>
                <Link to={`/projects/${rp.slug}`} className="group block h-full">
                  <div className="relative aspect-[16/9] overflow-hidden mb-4 bg-stone-200">
                    <img 
                      src={rp.image} 
                      alt={rp.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-serif text-stone-900 mb-1">{rp.title}</h4>
                      <p className="text-stone-500 text-sm">{rp.category}</p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
         </div>
      </Section>
    </>
  );
}
