import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const MarketplacePage = () => {
  return (
    <Layout>
      <Seo 
        title="Marketplace – Browse Real Estate Leads"
        description="Explore our real estate leads marketplace with verified properties and motivated sellers. Find your next investment opportunity."
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
          <p className="text-xl text-gray-700 mb-8">
            Browse our collection of high-quality real estate leads and investment opportunities
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-gray-700 mb-6">
              Our marketplace is currently being built to bring you the best real estate leads experience.
            </p>
            <p className="text-gray-600 mb-8">
              In the meantime, please contact us to learn about available leads and investment opportunities.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarketplacePage;
