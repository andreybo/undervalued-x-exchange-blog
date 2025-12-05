import React, { useState, useEffect } from 'react';

const HeroSection = ({ categories = [] }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "seller"
  });

  const [activeUsers, setActiveUsers] = useState(847);
  const [recentDeals, setRecentDeals] = useState(23);

  useEffect(() => {
    // Simulate real-time activity
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 3));
      setRecentDeals(prev => prev + (Math.random() > 0.7 ? 1 : 0));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        data-section="dark"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[rgba(33,52,84,0.92)] to-[rgba(33,52,84,0.88)]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(33, 52, 84, 0.92), rgba(33, 52, 84, 0.88))`,
        }}
      >
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 text-white px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span className="text-sm font-medium">
                  Exclusive Professional Network
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Get Exclusive<br />
                <span className="text-yellow-400">Lead Generation</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                Join <strong className="text-yellow-400">{activeUsers} active investors</strong> who closed <strong className="text-yellow-400">${recentDeals}.2M this month</strong>{" "}
                using our exclusive real estate database. <span className="text-yellow-400 font-semibold">Premium access now available.</span>
              </p>

              {/* Real-time Activity */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-between text-sm text-white/80 mb-2">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Live Activity
                  </span>
                  <span>{activeUsers} investors online</span>
                </div>
                <div className="text-white/90 text-xs">
                  🔥 Sarah M. just closed a $340K deal in Austin (3 min ago)
                </div>
              </div>

              <div className="flex justify-center lg:justify-start mb-4">
                <button className="w-full max-w-md px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Secure My Spot Now
                </button>
              </div>
              <div className="text-center lg:text-left text-white/80 text-sm mb-12">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>100% Risk-Free • Cancel Anytime</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-bold text-2xl lg:text-3xl text-yellow-400 mb-1">{activeUsers}+</div>
                  <div className="text-white/70 text-xs">Active This Hour</div>
                </div>
                <div>
                  <div className="font-bold text-2xl lg:text-3xl text-yellow-400 mb-1">73%</div>
                  <div className="text-white/70 text-xs">Close in 30 Days</div>
                </div>
                <div>
                  <div className="font-bold text-2xl lg:text-3xl text-yellow-400 mb-1">${recentDeals}.2M</div>
                  <div className="text-white/70 text-xs">Closed This Month</div>
                </div>
              </div>
            </div>

            {/* Right Content - Lead Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="shadow-2xl bg-white rounded-lg border border-gray-200 overflow-hidden">
                  {/* Card Header */}
                  <div className="text-center pb-6 pt-8 px-8 border-b border-gray-200">
                    <h2 className="text-3xl font-bold text-primary mb-4">
                      Get Exclusive Access
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-green-600 text-sm font-semibold mb-3">
                      <span>Instant Access • Professional Network</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Join elite investors accessing premium opportunities daily
                    </p>
                  </div>
                  
                  {/* Card Content */}
                  <div className="pb-8 pt-6 px-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label className="font-semibold text-gray-900 mb-2 block text-sm">
                            Full Name
                          </label>
                          <input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            className="h-12 text-base bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full px-4"
                          />
                        </div>
                        
                        <div>
                          <label className="font-semibold text-gray-900 mb-2 block text-sm">
                            Email Address
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            className="h-12 text-base bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full px-4"
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-gray-900 mb-2 block text-sm">
                            Phone Number
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                            className="h-12 text-base bg-white border border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500 rounded-lg w-full px-4"
                          />
                        </div>

                        <div>
                          <label className="font-semibold text-gray-900 mb-2 block text-sm">
                            I am a
                          </label>
                          <select
                            name="propertyType"
                            value={formData.propertyType}
                            onChange={handleInputChange}
                            className="w-full h-12 px-4 text-base border border-gray-300 bg-white rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          >
                            <option value="seller">Property Seller</option>
                            <option value="investor">Real Estate Investor</option>
                            <option value="agent">Real Estate Agent</option>
                          </select>
                        </div>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full h-14 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg transition-colors"
                      >
                        Get Exclusive Access
                      </button>

                      {/* Trust Indicators */}
                      <div className="space-y-3 pt-4">
                        <div className="flex items-center justify-center gap-6 text-xs text-green-600">
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            SSL Secured
                          </span>
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Cancel Anytime
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 text-center leading-relaxed px-4">
                          By requesting access, you agree to receive exclusive opportunities from UndervaluedX Realty Exchange.
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Lead Generation Categories
              </h2>
              <p className="text-lg text-gray-600">
                Browse our available lead categories and find the perfect opportunities for your investment strategy
              </p>
            </div>

            {categories && categories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <a 
                    key={index}
                    href={category.uri}
                    className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {category.name}
                      </h3>
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white transition-colors">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Explore {category.count} {category.count === 1 ? 'listing' : 'listings'} in {category.name}
                    </p>
                    <span className="inline-flex items-center text-yellow-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                      Browse
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-600">
                <p>Categories will be displayed here</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
