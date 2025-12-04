import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Coffee } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <div className="bg-espresso text-cream p-2 rounded-full transition-transform group-hover:scale-105">
              <Coffee size={24} />
            </div>
            <span className={`font-serif font-bold text-xl tracking-wide ${scrolled || isOpen ? 'text-espresso' : 'text-espresso md:text-espresso'}`}>
              ARTIFACT <span className="text-warmbrown">COFFEE</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide uppercase hover:text-warmbrown transition-colors ${
                    isActive ? 'text-warmbrown border-b-2 border-warmbrown' : 'text-espresso'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="https://toasttab.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-espresso text-cream px-5 py-2 rounded-sm text-sm font-bold uppercase tracking-wider hover:bg-warmbrown transition-colors shadow-sm"
            >
              Order Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-espresso hover:text-warmbrown focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-cream z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '64px' }}
      >
        <div className="flex flex-col p-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-2xl font-serif font-bold ${isActive ? 'text-warmbrown' : 'text-espresso'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-8 border-t border-stone/30">
            <a 
              href="https://toasttab.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-espresso text-cream py-4 text-lg font-bold uppercase tracking-wider hover:bg-warmbrown"
            >
              Order on Toast
            </a>
          </div>
          <div className="text-stone text-sm pt-4">
            <p>1500 Union Ave</p>
            <p>Baltimore, MD 21211</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;