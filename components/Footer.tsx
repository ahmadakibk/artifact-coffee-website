import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-cream-dark pt-16 pb-8 border-t-8 border-amber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Address */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6 text-cream">Artifact Coffee</h3>
            <div className="space-y-4 text-stone-300">
              <p className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-amber" size={18} />
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  1500 Union Ave,<br />Baltimore, MD 21211
                </a>
              </p>
              <div className="flex items-center">
                <Mail className="mr-2 text-amber" size={18} />
                <a href="mailto:askus@artifactcoffee.com" className="hover:text-white transition-colors">askus@artifactcoffee.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 text-amber" size={18} />
                <span className="hover:text-white cursor-pointer">410-555-0199</span>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber hover:text-espresso transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-amber hover:text-espresso transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-amber">Hours</h4>
            <ul className="space-y-3 text-stone-300">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Weekdays</span>
                <span className="font-medium text-cream">8:00am – 3:00pm</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Weekends</span>
                <span className="font-medium text-cream">8:00am – 4:00pm</span>
              </li>
              <li className="pt-2 text-sm italic">
                Kitchen closes 30 mins before close.
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-amber">Explore</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <NavLink to={link.path} className="text-stone-300 hover:text-amber hover:translate-x-1 transition-all inline-block">
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href="https://toasttab.com" target="_blank" rel="noreferrer" className="text-stone-300 hover:text-amber hover:translate-x-1 transition-all inline-flex items-center">
                  Order Online <ArrowUpRight size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-amber">Join the Table</h4>
            <p className="text-stone-300 mb-4 text-sm">
              Receive seasonal updates, event invites, and stories from our local partners.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-cream placeholder-stone-500 focus:outline-none focus:border-amber transition-colors"
              />
              <button className="w-full bg-amber text-espresso font-bold uppercase text-xs tracking-widest py-3 hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Artifact Coffee. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
            <a href="#" className="hover:text-stone-300">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;