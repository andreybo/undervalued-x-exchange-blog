import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const MotivatedSellersPage = () => {
  return (
    <Layout>
      <Seo 
        title="Motivated Seller Leads" 
        description="Connect with motivated property sellers ready to close deals quickly. Access pre-qualified leads with verified contact information." 
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Motivated Seller Leads</h1>
          
          <section className="mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Access high-quality motivated seller leads that are pre-screened and ready to do business. 
              Our leads come from distressed situations, life changes, and urgent needs to sell quickly.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">What Makes a Seller "Motivated"?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Financial Distress</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Behind on mortgage payments</li>
                  <li>• Facing foreclosure</li>
                  <li>• Tax liens or judgments</li>
                  <li>• Bankruptcy situations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Life Changes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Divorce or separation</li>
                  <li>• Job relocation</li>
                  <li>• Inherited property</li>
                  <li>• Health issues</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Property Condition</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Deferred maintenance</li>
                  <li>• Fire or water damage</li>
                  <li>• Code violations</li>
                  <li>• Hoarder situations</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Time Constraints</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Quick relocation needed</li>
                  <li>• Avoiding foreclosure</li>
                  <li>• Estate settlements</li>
                  <li>• Business liquidation</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Lead Quality Features</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Verified Contact Information</h3>
                  <p className="text-gray-700">Multiple phone numbers, email addresses, and mailing addresses verified for accuracy.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Property Details</h3>
                  <p className="text-gray-700">Complete property information including bedrooms, bathrooms, square footage, and estimated value.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Motivation Scoring</h3>
                  <p className="text-gray-700">Each lead is scored based on urgency factors to help you prioritize your outreach.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Real-Time Delivery</h3>
                  <p className="text-gray-700">Leads are delivered instantly to your dashboard or CRM so you can act fast.</p>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg">Exclusive Opportunities</h3>
                  <p className="text-gray-700">Many of our leads are not available on public listing sites, giving you a competitive edge.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Success Stories</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-gray-700 italic mb-2">
                "I closed 3 deals in my first month using UndervaluedX leads. The quality is unmatched - 
                these sellers are truly motivated and ready to do business."
              </p>
              <p className="font-semibold">- Mike R., Real Estate Investor</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 italic mb-2">
                "The motivation scoring feature helps me prioritize which leads to call first. 
                It's saved me countless hours and helped me close better deals faster."
              </p>
              <p className="font-semibold">- Sarah L., Wholesaler</p>
            </div>
          </section>

          <section className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Start Connecting with Motivated Sellers Today</h2>
            <p className="text-lg mb-6">
              Get access to pre-qualified motivated seller leads and start closing more deals.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent text-primary px-8 py-3 rounded-md font-semibold hover:bg-accent-glow transition-colors"
            >
              Get Started Now
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default MotivatedSellersPage;
