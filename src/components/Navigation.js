import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-brand-cream border-b border-brand-lavender/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-purple to-brand-wine flex items-center justify-center text-white text-xl font-bold shadow-soft">
              R
            </div>
            <span className="font-sans font-bold text-2xl text-brand-plum">
              Rita AI Ventures
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-brand-plum hover:text-brand-wine font-sans font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-wine transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="https://smartspoon.rita-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-wine hover:bg-brand-plum text-white px-6 py-3 rounded-full font-sans font-medium transition-all shadow-soft hover:shadow-strong flex items-center gap-2"
            >
              SmartSpoon
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-purple-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-cream border-t border-brand-lavender/30">
          <div className="px-2 pt-4 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-3 text-brand-purple-dark hover:text-brand-wine hover:bg-brand-lavender/20 rounded-xl font-body font-medium transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://smartspoon.rita-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-3 bg-brand-wine text-white rounded-xl font-body font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              Visit SmartSpoon →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;