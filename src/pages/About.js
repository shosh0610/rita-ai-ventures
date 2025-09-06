import React from 'react';
import { Heart, Zap, Shield, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-brand-plum to-brand-burgundy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">About Rita AI Ventures</h1>
            <p className="text-xl font-sans text-white/95 max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of AI-native applications with a focus on intelligent design 
              that puts artificial intelligence at the core of user experience, not as an afterthought
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-center mb-12 text-brand-plum">Get to Know Us</h2>
          <div className="prose prose-lg mx-auto text-gray-700 font-sans">
            <p className="mb-6">
              Rita AI Ventures specializes in developing and investing in AI-native applications that solve 
              real-world problems through intelligent design. Our portfolio begins with SmartSpoon, a comprehensive 
              cooking platform that demonstrates how artificial intelligence can enhance daily experiences through 
              personalized recommendations, adaptive interfaces, and predictive capabilities.
            </p>
            <p className="mb-6">
              We seek opportunities where AI isn't just a tool, but the foundation that enables entirely new 
              categories of user interaction and business value. From our flagship SmartSpoon recipe companion 
              to enterprise solutions that transform how businesses operate, our focus is on developing and 
              investing in technologies that put artificial intelligence at the core of user experience, not 
              as an afterthought.
            </p>
            <p className="mb-6">
              Founded by leaders with diverse backgrounds spanning technology product development and large-scale 
              project management, Rita AI Ventures leverages cross-industry insights to build robust AI applications. 
              Our team's combined experience includes leading product strategy at major tech companies and managing 
              complex, multi-million dollar infrastructure projects.
            </p>
            <p>
              This intersection of digital innovation and operational rigor shapes our approach to developing 
              AI solutions that are both cutting-edge and execution-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-sans font-bold text-center mb-12 text-brand-plum">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-brand-plum">User First</h3>
              <p className="text-gray-700 font-sans">
                Every decision we make starts with how it will benefit our users. 
                We prioritize intuitive design and practical functionality.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-brand-plum">Innovation</h3>
              <p className="text-gray-700 font-sans">
                We push the boundaries of what's possible with AI, constantly exploring 
                new ways to solve everyday problems.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-brand-plum">Privacy & Security</h3>
              <p className="text-gray-700 font-sans">
                We take data privacy seriously, implementing robust security measures 
                to protect our users' information.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-brand-plum">Excellence</h3>
              <p className="text-gray-700 font-sans">
                We maintain the highest standards in everything we do, from product 
                development to customer service.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-brand-plum">Community</h3>
              <p className="text-gray-700 font-sans">
                We believe in building a community around our products, listening to 
                feedback and growing together.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-2 text-brand-plum">Accessibility</h3>
              <p className="text-gray-700 font-sans">
                We strive to make AI technology accessible to everyone, regardless of 
                technical expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-sans font-bold mb-8 text-brand-plum">Looking Ahead</h2>
          <p className="text-xl text-gray-700 font-sans mb-6">
            As we continue to grow, our vision remains clear: to be the leading provider of 
            consumer AI applications that genuinely improve people's lives. We're excited about 
            the future and the endless possibilities that AI brings to everyday experiences.
          </p>
          <p className="text-lg text-gray-700 font-sans">
            Join us on this journey as we transform the way people interact with technology, 
            one innovative product at a time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;