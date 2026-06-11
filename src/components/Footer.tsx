import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <Link to="/" className="block">
              <span className="text-2xl font-serif tracking-tight text-white block uppercase">The Cosy Canvas</span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Creating Beautiful Homes That Reflect Your Lifestyle. Premium luxury residential and commercial interior design studio based in Kolhapur.
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Studio</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Featured Projects</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Client Testimonials</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">Contact</h3>
            <ul className="space-y-4 text-sm text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Rajarampuri<br />Kolhapur, Maharashtra 416008</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="shrink-0" />
                <a href="mailto:hello@thecosycanvas.com" className="hover:text-white transition-colors">hello@thecosycanvas.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-white mb-6 font-semibold">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-stone-800 hover:text-white transition-colors" aria-label="WhatsApp">
                <Phone size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-stone-500 uppercase">
          <p>© {new Date().getFullYear()} The Cosy Canvas. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-stone-300 transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-stone-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
