import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LeadsPage = () => {
  const leadTypes = [
    {
      title: "Motivated Seller Leads",
      description: "Pre-qualified sellers ready to close deals quickly",
      features: [
        "Verified contact information",
        "Property details and value estimates",
        "Motivation scoring",
        "Real-time delivery"
      ]
    },
    {
      title: "Off-Market Leads",
      description: "Exclusive properties not listed publicly",
      features: [
        "First access to deals",
        "Hidden inventory opportunities",
        "Less competition",
        "Better negotiating power"
      ]
    },
    {
      title: "Distressed Seller Leads",
      description: "Time-sensitive opportunities for quick acquisitions",
      features: [
        "Fast-track deals",
        "Below-market pricing potential",
        "Urgent seller circumstances",
        "Quick close capability"
      ]
    },
    {
      title: "Pre-Foreclosure Leads",
      description: "Properties in early stages of foreclosure process",
      features: [
        "Early intervention opportunities",
        "Seller motivation indicators",
        "Foreclosure timeline data",
        "Contact information"
      ]
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Real Estate Leads – Motivated Seller, Off-Market & Distressed Properties"
        description="Access high-quality real estate leads including motivated sellers, off-market properties, distressed sellers, and pre-foreclosure opportunities."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Real Estate Leads</h1>
            <p className="text-xl text-gray-700">
              Access high-quality, pre-verified leads from multiple categories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {leadTypes.map((lead, index) => (
              <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-2">{lead.title}</h3>
                <p className="text-gray-600 mb-4">{lead.description}</p>
                <ul className="space-y-2">
                  {lead.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-12 rounded-lg border border-primary/20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Closing More Deals?</h2>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Browse our marketplace and connect with high-quality leads that match your investment criteria.
            </p>
            <a href="/marketplace" className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse Leads
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadsPage;
