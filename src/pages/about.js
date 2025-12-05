import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About Us" description="Learn more about UndervaluedX Realty Exchange and our mission to connect real estate investors with high-quality, motivated seller leads." />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About UndervaluedX Realty Exchange</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              UndervaluedX Realty Exchange is dedicated to revolutionizing the way real estate investors find and connect with motivated sellers. We leverage advanced data analytics and market intelligence to identify undervalued properties and connect investors with sellers ready to make a deal.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>High-quality, pre-screened leads from verified sources</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Exclusive off-market opportunities not found on public listings</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Advanced targeting based on motivation levels and property characteristics</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Real-time lead delivery with complete contact information</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">✓</span>
                <span>Expert support team to help you succeed</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-gray-700">
              Our team consists of experienced real estate professionals, data scientists, and market analysts who are passionate about helping investors succeed. We combine industry expertise with cutting-edge technology to deliver the best results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-4">
              Have questions? We'd love to hear from you. Get in touch with our team to learn more about how UndervaluedX can help you find your next deal.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Contact Us Today
            </a>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
