import { SEO } from '../components/SEO';
import { Section, FadeIn } from '../components/ui';
import { projects, categories } from '../lib/data';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'motion/react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO title="Portfolio | Interiors By Ankita Shinde" description="Explore our portfolio of luxury residential and commercial interior design projects." />
      
      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <FadeIn>
             <h1 className="text-5xl md:text-7xl font-serif text-stone-900 mb-6">Our Portfolio</h1>
             <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
               A curated selection of our finest interior design work, showcasing our commitment to detail, luxury, and personalized aesthetics.
             </p>
          </FadeIn>
        </div>
      </section>

      <Section className="pt-10">
        {/* Filters and Search */}
        <FadeIn delay={0.1} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
           <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-5 py-2 text-sm tracking-widest uppercase transition-colors border",
                    activeCategory === category 
                      ? "bg-stone-900 text-stone-50 border-stone-900" 
                      : "bg-transparent text-stone-600 border-stone-300 hover:border-stone-900 hover:text-stone-900"
                  )}
                >
                  {category}
                </button>
              ))}
           </div>
           
           <div className="relative w-full md:w-72">
              <input 
                type="text" 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border-b border-stone-300 py-2 pl-8 pr-4 bg-transparent outline-none focus:border-stone-900 transition-colors text-stone-900 placeholder:text-stone-400"
              />
              <Search size={18} className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" />
           </div>
        </FadeIn>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 min-h-[50vh]">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={`/projects/${project.slug}`} className="group block h-full">
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
                      <p className="text-stone-500 text-sm tracking-wide">{project.designStyle} • {project.location}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors shrink-0">
                       <ArrowRight size={18} className="transition-transform group-hover:-rotate-45" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center text-stone-500">
              No projects found matching your criteria.
            </div>
          )}
        </div>
      </Section>
    </>
  );
}
