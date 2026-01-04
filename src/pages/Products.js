import React from 'react';
import { ExternalLink, Check, Clock, Sparkles, ChefHat, ShoppingCart, Calendar, Heart, BarChart, Youtube, Facebook, Play, Smile, Wand2 } from 'lucide-react';

const Products = () => {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-brand-plum to-brand-wine text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-sans font-bold mb-6">Our Products</h1>
            <p className="text-xl font-sans text-brand-lavender/90 max-w-3xl mx-auto leading-relaxed">
              Discover our suite of AI-native applications designed to simplify and enhance your daily life
            </p>
          </div>
        </div>
      </section>

      {/* Aria's Adventureland Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 backdrop-blur flex items-center justify-center">
                    <img src="/images/aria.png" alt="Aria" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-sans font-bold">Aria's Adventureland</h2>
                    <p className="text-purple-100 font-sans">Where Ordinary Becomes Extraordinary</p>
                  </div>
                </div>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-sans font-semibold">
                  Live Now
                </span>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-600 mb-8">
                Welcome to Aria's Adventure! This channel is all about stepping into the whimsical world of Aria—a place
                where the ordinary becomes extraordinary! Join Aria as she explores all sorts of fun and quirky adventures,
                from slicing into cakes that might just be something else entirely, to encountering giant rubber ducks on
                the beach, and diving into all kinds of unique, adventurous scenarios.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
                  <div className="flex items-start gap-3">
                    <Play className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Creative Adventures</h4>
                      <p className="text-sm text-gray-600">Unique and quirky scenarios that turn everyday moments into magic</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smile className="text-pink-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Humor & Fun</h4>
                      <p className="text-sm text-gray-600">A delightful blend of creativity with a sprinkle of humor</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Wand2 className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Unexpected Moments</h4>
                      <p className="text-sm text-gray-600">You never know what Aria might do next!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="text-pink-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Whimsical World</h4>
                      <p className="text-sm text-gray-600">Step into a world where imagination knows no bounds</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Subscribe?</h3>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Fresh Content</h4>
                      <p className="text-sm text-gray-600">Regular uploads of creative and entertaining adventures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Family-Friendly</h4>
                      <p className="text-sm text-gray-600">Wholesome entertainment for viewers of all ages</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Unique Perspective</h4>
                      <p className="text-sm text-gray-600">Experience the world through Aria's creative lens</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Community</h4>
                      <p className="text-sm text-gray-600">Join a growing community of adventure enthusiasts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.youtube.com/@AriasAdventureland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:bg-red-700"
                    >
                      <Youtube size={20} />
                      Watch on YouTube
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61584747545181"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all hover:bg-blue-700"
                    >
                      <Facebook size={20} />
                      Follow on Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SmartSpoon Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-brand-wine to-brand-plum p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl">
                    🍽️
                  </div>
                  <div>
                    <h2 className="text-3xl font-sans font-bold">SmartSpoon</h2>
                    <p className="text-brand-lavender/90 font-sans">Your AI-Powered Personal Chef</p>
                  </div>
                </div>
                <span className="bg-brand-lavender text-brand-plum px-3 py-1 rounded-full text-sm font-sans font-semibold">
                  Launching Soon
                </span>
              </div>
            </div>

            <div className="p-8">
              <p className="text-lg text-gray-600 mb-8">
                SmartSpoon revolutionizes meal planning with AI-powered recipe recommendations,
                smart grocery lists, and personalized nutrition tracking. Whether you're a cooking
                novice or a culinary enthusiast, SmartSpoon makes every meal an adventure.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <div className="flex items-start gap-3">
                    <ChefHat className="text-indigo-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Thousands of Recipes</h4>
                      <p className="text-sm text-gray-600">Access a vast library of curated recipes from around the world</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">AI Recommendations</h4>
                      <p className="text-sm text-gray-600">Get personalized meal suggestions based on your preferences</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShoppingCart className="text-indigo-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Smart Shopping Lists</h4>
                      <p className="text-sm text-gray-600">Automatically generate grocery lists from your meal plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="text-purple-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Meal Planning</h4>
                      <p className="text-sm text-gray-600">Plan your week with intelligent scheduling and prep time estimates</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Save Time</h4>
                      <p className="text-sm text-gray-600">Reduce meal planning from hours to minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Eat Healthier</h4>
                      <p className="text-sm text-gray-600">Track nutrition and discover balanced meal options</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Reduce Food Waste</h4>
                      <p className="text-sm text-gray-600">Buy only what you need with precise ingredient lists</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Explore New Cuisines</h4>
                      <p className="text-sm text-gray-600">Discover recipes from different cultures and dietary styles</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={20} />
                    <span>iOS App Coming Soon</span>
                  </div>
                  <a
                    href="https://smartspoon.rita-ai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all"
                  >
                    Visit SmartSpoon Website
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">More Products Coming Soon</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly innovating and developing new AI-powered solutions. 
              Stay tuned for exciting announcements about our upcoming products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-dashed border-indigo-200">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
              <p className="text-gray-600">
                AI-powered health tracking and personalized wellness recommendations
              </p>
              <span className="inline-block mt-4 text-sm text-indigo-600 font-medium">In Development</span>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-dashed border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Productivity Suite</h3>
              <p className="text-gray-600">
                Smart task management and AI-assisted productivity tools
              </p>
              <span className="inline-block mt-4 text-sm text-purple-600 font-medium">Coming 2025</span>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border-2 border-dashed border-indigo-200">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-600">
                Your personal AI companion for daily tasks and decision making
              </p>
              <span className="inline-block mt-4 text-sm text-indigo-600 font-medium">Conceptual</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;