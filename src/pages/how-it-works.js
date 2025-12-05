import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Data Collection",
      description: "We aggregate property and owner data from multiple sources including public records, market indicators, and proprietary signals."
    },
    {
      number: "02",
      title: "Verification & Scoring",
      description: "Each lead is verified for accuracy and scored based on motivation level, property details, and likelihood to sell."
    },
    {
      number: "03",
      title: "Lead Delivery",
      description: "Qualified leads are delivered to you in real-time with complete contact information and property details."
    },
    {
      number: "04",
      title: "Close Deals",
      description: "Connect with motivated sellers, negotiate terms, and close deals faster with our high-quality, exclusive leads."
    }
  ];

  return (
    <Layout>
      <Seo 
        title="How It Works – Our Verified Real Estate Lead Generation Process" 
        description="Learn how UndervaluedX delivers verified, exclusive real estate leads to investors and agents. Our proven process ensures high-quality motivated seller connections."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">How It Works</h1>
            <p className="text-xl text-gray-700">
              Our proven process ensures high-quality, verified leads delivered straight to your inbox
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {steps.map((step) => (
              <div key={step.number} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="text-4xl font-bold text-primary mb-3">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded">
            <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
            <p className="text-gray-700 mb-6">
              Join hundreds of successful real estate investors and agents who are already using UndervaluedX to find their next deal.
            </p>
            <a href="/marketplace" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Explore Our Leads
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorks;
