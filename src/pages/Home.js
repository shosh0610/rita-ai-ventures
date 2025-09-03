import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Brain, Lightbulb, Rocket, ArrowRight, Users, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-brand-cream via-brand-lavender/30 to-brand-purple/20">
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-brand-purple/30 to-brand-lavender/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-r from-brand-wine/20 to-brand-plum/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-sans font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-brand-plum via-brand-wine to-brand-plum bg-clip-text text-transparent">
                Rita AI Ventures
              </span>
            </h1>
            <p className="text-2xl md:text-3xl font-sans font-medium text-brand-plum mb-6 max-w-3xl mx-auto">
              Investing in AI-native Solutions
            </p>
            <p className="text-lg font-sans text-primary-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              We build the next generation of intelligent applications that think, learn, and adapt alongside their users. 
              Creating AI-native experiences that feel intuitive rather than artificial—from our flagship SmartSpoon 
              recipe companion to enterprise solutions that transform how businesses operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/products"
                className="bg-gradient-to-r from-brand-wine to-brand-plum hover:from-brand-plum hover:to-brand-wine text-white px-10 py-4 rounded-full font-sans font-semibold hover:shadow-strong transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 shadow-soft"
              >
                Explore Our Products
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="bg-white/90 backdrop-blur text-brand-wine px-10 py-4 rounded-full font-sans font-semibold border-2 border-brand-lavender hover:bg-brand-lavender hover:text-brand-plum transition-all shadow-soft flex items-center justify-center gap-3"
              >
                Learn More
                <Sparkles size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-plum mb-6">Our Focus</h2>
            <p className="text-xl font-sans text-primary-700 max-w-4xl mx-auto leading-relaxed">
              Our focus is on developing and investing in technologies that put artificial intelligence at the core of user experience, 
              not as an afterthought. We seek opportunities where AI isn't just a tool, but the foundation that enables 
              entirely new categories of user interaction and business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-8 bg-gradient-to-br from-brand-cream to-brand-lavender/20 rounded-3xl shadow-soft hover:shadow-strong transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-wine rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-soft">
                <Brain size={36} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-4 text-brand-plum">AI Innovation</h3>
              <p className="font-sans text-primary-700 leading-relaxed">
                Leveraging cutting-edge artificial intelligence to solve real-world problems through intelligent design
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-brand-lavender/30 to-brand-cream rounded-3xl shadow-soft hover:shadow-strong transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-wine to-brand-plum rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-soft">
                <Users size={36} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-4 text-brand-plum">User-Centric Design</h3>
              <p className="font-sans text-primary-700 leading-relaxed">
                Creating AI-native experiences that feel intuitive rather than artificial, putting people first
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-brand-cream to-brand-purple/20 rounded-3xl shadow-soft hover:shadow-strong transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-purple to-brand-plum rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-soft">
                <Target size={36} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-4 text-brand-plum">Practical Solutions</h3>
              <p className="font-sans text-primary-700 leading-relaxed">
                Building products that make a real difference in everyday life through intelligent applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-24 bg-gradient-to-br from-brand-cream to-brand-lavender/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-plum mb-6">Featured Product</h2>
            <p className="text-xl font-sans text-primary-700">Our comprehensive AI-powered cooking platform</p>
          </div>

          <div className="bg-white rounded-3xl shadow-strong overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-16">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-wine flex items-center justify-center text-white text-3xl shadow-soft">
                    🍽️
                  </div>
                  <h3 className="text-4xl font-heading font-bold text-brand-plum">SmartSpoon</h3>
                </div>
                <p className="font-body text-brand-purple mb-8 text-lg leading-relaxed">
                  A comprehensive cooking platform that demonstrates how artificial intelligence can enhance daily experiences 
                  through personalized recommendations, adaptive interfaces, and predictive capabilities. SmartSpoon makes 
                  meal planning effortless with intelligent suggestions and automated meal management.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <Sparkles className="text-brand-wine flex-shrink-0" size={24} />
                    <span className="font-body text-brand-purple">AI-powered recipe recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Lightbulb className="text-brand-burgundy flex-shrink-0" size={24} />
                    <span className="font-body text-brand-purple">Smart meal planning & scheduling</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Rocket className="text-brand-wine flex-shrink-0" size={24} />
                    <span className="font-body text-brand-purple">Automated shopping lists</span>
                  </li>
                </ul>
                <a
                  href="https://smartspoon.rita-ai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand-plum hover:bg-brand-wine text-white px-8 py-4 rounded-full font-sans font-semibold hover:shadow-strong transition-all transform hover:-translate-y-1 shadow-strong border-2 border-white/20"
                >
                  Visit SmartSpoon
                  <ArrowRight size={20} />
                </a>
              </div>
              <div className="md:w-1/2 bg-gradient-to-br from-brand-lavender/20 to-brand-purple/10 p-10 md:p-16 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6">🍳</div>
                  <p className="text-2xl font-heading font-semibold text-brand-plum mb-2">Coming Soon to iOS</p>
                  <p className="font-body text-brand-purple">Join the waitlist for early access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;