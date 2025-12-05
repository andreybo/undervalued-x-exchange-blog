import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const SuccessStories = () => {
  const stories = [
    {
      name: "Marcus Williams",
      role: "Real Estate Investor",
      location: "Atlanta, GA",
      result: "Closed 15 deals in 6 months",
      quote: "UndervaluedX has completely transformed my business. The quality of leads is exceptional, and I'm closing more deals than ever before.",
      deals: "15",
      roi: "340%",
      saved: "$125K"
    },
    {
      name: "Sarah Chen",
      role: "Wholesaler",
      location: "Phoenix, AZ",
      result: "Generated $250K in assignment fees",
      quote: "The off-market leads are pure gold. I'm consistently finding properties before anyone else and building a strong pipeline.",
      deals: "23",
      roi: "420%",
      saved: "$200K"
    },
    {
      name: "David Rodriguez",
      role: "Fix & Flip Investor",
      location: "Dallas, TX",
      result: "10 properties renovated and sold",
      quote: "These motivated seller leads save me countless hours of cold calling. I can focus on what I do best - renovating properties.",
      deals: "10",
      roi: "285%",
      saved: "$85K"
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Success Stories – Real Estate Investors Closing More Deals"
        description="Read inspiring success stories from real estate investors and agents who increased their deal flow using UndervaluedX verified leads."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl text-gray-700">
              Join hundreds of investors already finding and closing deals with UndervaluedX
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-12 mb-16">
            {stories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <p className="text-gray-600 text-sm font-medium">{story.location}</p>
                  <h3 className="text-2xl font-bold">{story.name}</h3>
                  <p className="text-primary font-medium">{story.role}</p>
                </div>

                <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                  "{story.quote}"
                </p>

                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="font-bold text-primary mb-2">{story.result}</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Deals Closed</p>
                      <p className="text-2xl font-bold text-primary">{story.deals}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">ROI</p>
                      <p className="text-2xl font-bold text-primary">{story.roi}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time Saved</p>
                      <p className="text-2xl font-bold text-primary">{story.saved}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded text-center">
            <h3 className="text-2xl font-bold mb-3">Be Our Next Success Story</h3>
            <p className="text-gray-700 mb-6">
              Start accessing high-quality, verified real estate leads today and grow your investment business.
            </p>
            <a href="/marketplace" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessStories;
