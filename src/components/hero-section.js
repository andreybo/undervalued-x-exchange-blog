import React, { useState } from 'react';
import '../styles/tailwind.css';

const HeroSection = ({ categories = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Real Estate Investment Blog
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
              Expert insights, proven strategies, and market analysis to help you succeed in real estate investing and maximize your returns.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <a
                href="/latest"
                className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors bg-primary !text-white hover:opacity-90 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-transparent text-gray-500 border border-gray-300 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory('all')}
              >
                All Articles
              </a>

              {categories && categories.length > 0 && categories.map((category, index) => (
                <a
                  key={index}
                  href={category.uri}
                  className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.slug
                      ? 'bg-blue-900 text-white shadow-md'
                      : 'bg-transparent text-gray-500 border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category.slug)}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
