import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const LeadGenerationPage = () => {
  return (
    <Layout>
      <Seo 
        title="Lead Generation Services" 
        description="Professional real estate lead generation services to help investors find motivated sellers and profitable deals." 
      />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Real Estate Lead Generation</h1>
          
          <section className="mb-12">
            <p className="text-xl text-gray-700 mb-6">
              Our premium lead generation services help real estate investors discover motivated sellers 
              and profitable investment opportunities through advanced data analytics and targeted marketing campaigns.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">1. Define Your Criteria</h3>
                <p className="text-gray-700">
                  Tell us your target markets, property types, and investment goals. We'll customize 
                  our lead generation strategy to match your specific requirements.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">2. Advanced Data Mining</h3>
                <p className="text-gray-700">
                  Our proprietary algorithms scan millions of records to identify motivated sellers 
                  including pre-foreclosures, distressed properties, and off-market opportunities.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">3. Verification & Enrichment</h3>
                <p className="text-gray-700">
                  Every lead is verified for accuracy and enriched with valuable data including 
                  property details, contact information, and motivation indicators.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">4. Real-Time Delivery</h3>
                <p className="text-gray-700">
                  Receive qualified leads directly to your dashboard or CRM in real-time, giving you 
                  first-mover advantage over your competition.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Lead Types We Generate</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="bg-primary text-white p-4 rounded-lg">
                <strong>Motivated Sellers</strong>
                <p className="text-sm mt-2">Property owners actively looking to sell quickly</p>
              </li>
              <li className="bg-primary text-white p-4 rounded-lg">
                <strong>Pre-Foreclosures</strong>
                <p className="text-sm mt-2">Properties in early stages of foreclosure process</p>
              </li>
              <li className="bg-primary text-white p-4 rounded-lg">
                <strong>Absentee Owners</strong>
                <p className="text-sm mt-2">Out-of-state owners with potential investment properties</p>
              </li>
              <li className="bg-primary text-white p-4 rounded-lg">
                <strong>Distressed Properties</strong>
                <p className="text-sm mt-2">Properties requiring repairs or renovation</p>
              </li>
              <li className="bg-primary text-white p-4 rounded-lg">
                <strong>Expired Listings</strong>
                <p className="text-sm mt-2">Properties that failed to sell on the open market</p>
              </li>
              <li className="bg-primary text-white p-4 rounded-lg">
                <strong>High Equity Owners</strong>
                <p className="text-sm mt-2">Properties with significant equity for wholesale deals</p>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <p className="text-3xl font-bold text-primary mb-4">$297/mo</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 50 leads per month</li>
                  <li>✓ Single market</li>
                  <li>✓ Basic verification</li>
                  <li>✓ Email support</li>
                </ul>
              </div>

              <div className="border-2 border-accent p-6 rounded-lg bg-accent/5">
                <div className="bg-accent text-primary text-xs font-bold px-2 py-1 rounded inline-block mb-2">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-3xl font-bold text-primary mb-4">$597/mo</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ 150 leads per month</li>
                  <li>✓ Up to 3 markets</li>
                  <li>✓ Advanced verification</li>
                  <li>✓ Priority support</li>
                  <li>✓ CRM integration</li>
                </ul>
              </div>

              <div className="border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-primary mb-4">Custom</p>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Unlimited leads</li>
                  <li>✓ Nationwide coverage</li>
                  <li>✓ White-glove service</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ Custom integrations</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-6">
              Join hundreds of successful real estate investors who are closing more deals with our leads.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-accent text-primary px-8 py-3 rounded-md font-semibold hover:bg-accent-glow transition-colors"
            >
              Start Your Free Trial
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default LeadGenerationPage;
