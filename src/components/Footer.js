import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-wine text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-lavender to-brand-purple-light flex items-center justify-center text-brand-plum text-lg font-bold shadow-soft">
                R
              </div>
              <span className="font-heading font-bold text-xl">Rita AI Ventures LLC</span>
            </div>
            <p className="text-white/90 font-sans leading-relaxed">
              Building innovative AI-powered solutions to enhance everyday life through intelligent design.
            </p>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white font-sans transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white font-sans transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white/80 hover:text-white font-sans transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white font-sans transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-semibold text-lg mb-6 text-white">Our Products</h3>
            <a
              href="https://smartspoon.rita-ai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white font-sans transition-colors group"
            >
              <span>SmartSpoon - AI Recipe Assistant</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 font-sans">
            © {new Date().getFullYear()} Rita AI Ventures LLC. All rights reserved.
          </p>
          <p className="text-white/70 font-sans mt-4 md:mt-0">
            <a href="https://www.rita-ai.com" className="hover:text-white transition-colors">
              www.rita-ai.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;