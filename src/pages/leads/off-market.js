import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import HeroSection from "../../components/hero-section";
import "../../styles/hero-overlay.scss";

const OffMarketLeadsPage = () => {
  const otherLeadTypes = [
    {
      title: "Motivated Seller Leads",
      description: "Connect with homeowners eager to sell fast. Perfect for quick closings and strong ROI.",
      link: "/leads/motivated-sellers"
    },
    {
      title: "Distressed Seller Leads",
      description: "Find homeowners in financial distress who need to sell quickly. Great for investors and cash buyers.",
      link: "/leads/distressed"
    },
    {
      title: "Probate Leads",
      description: "Reach heirs or executors managing inherited homes who are ready to sell.",
      link: "/leads"
    },
    {
      title: "Expired Listing Leads",
      description: "Reignite opportunities with owners whose listings didn't sell.",
      link: "/leads"
    },
    {
      title: "Foreclosure Leads",
      description: "Contact homeowners before their properties are repossessed.",
      link: "/leads"
    },
    {
      title: "FSBO Leads",
      description: "Engage directly with homeowners selling without an agent and open to fair offers.",
      link: "/leads"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Verified and Seller-Ready",
      content: "Every lead is confirmed for ownership and selling intent. You'll only speak with homeowners who are actually open to offers, not random property owners or old data."
    },
    {
      title: "Always Fresh and Updated",
      content: "Our system updates daily to remove outdated or sold properties. You'll always get the newest off-market opportunities before they appear anywhere else."
    },
    {
      title: "Instant Delivery. Instant Outreach.",
      content: "Get your leads in real time. We'll send them straight to your CRM, email, or SMS so you can contact sellers the moment they're verified."
    },
    {
      title: "Smart Filters That Match Your Strategy",
      content: "Choose your market, property type, equity range, or motivation level. Our custom filters help you find the right sellers faster and close more deals with less effort."
    },
    {
      title: "Transparent Data You Can Trust",
      content: "Every lead includes clear sourcing and timestamps so you know exactly where it came from and how fresh it is. No guesswork. Just verified data you can rely on."
    }
  ];

  const faqItems = [
    {
      question: "What makes off-market leads so valuable?",
      answer: "They're exclusive. You get access to sellers before anyone else, giving you a head start on deals competitors never see."
    },
    {
      question: "Where does UndervaluedX get these leads?",
      answer: "From verified data sources, property records, and private homeowner outreach. Every lead is checked and validated for accuracy."
    },
    {
      question: "Can I choose which types of properties I receive?",
      answer: "Yes. You can target by ZIP code, property type, price, equity, and more to match your exact buying strategy."
    },
    {
      question: "Are off-market leads shared with multiple buyers?",
      answer: "No. Leads are limited and exclusive, so you're not competing with dozens of other investors."
    },
    {
      question: "How fast can I start contacting sellers?",
      answer: "Immediately. Once your leads are verified, they're delivered directly to your CRM, inbox, or SMS for instant outreach."
    },
    {
      question: "What if a lead is invalid?",
      answer: "We stand behind our data. If a lead doesn't check out, we'll replace it with no questions asked."
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Off-Market Leads – Buy Exclusive Real Estate Seller Leads"
        description="Access exclusive off-market property leads before they hit MLS. Connect directly with property owners and secure deals with less competition."
        keywords="off-market leads, exclusive real estate leads, pre-mls properties"
        canonical="https://blog.undervaluedx.com/leads/off-market"
      />

      <HeroSection
        title="Off-Market Leads"
        subtitle="Find hidden real estate deals before anyone else. Off-market leads connect you with homeowners who haven't listed publicly but are ready to sell. These are exclusive, high-intent opportunities that help you close faster, negotiate stronger, and stay ahead of the competition."
        gradientColors="rgba(88, 41, 47, 0.92) 0%, rgba(105, 49, 56, 0.88) 100%"
      />

      {/* What Are Off-Market Leads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              What Are Off-Market Leads?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Off-market leads are property owners looking to sell without listing on the MLS or public sites. They often want privacy, speed, or flexibility, and they're open to direct offers from serious buyers.
              </p>
              <p>
                No listings. No bidding wars. Just private conversations with real sellers who are open to deals that work for both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UndervaluedX Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Why Real Estate Professionals Choose UndervaluedX
            </h2>
            <p className="text-xl text-gray-700 mb-16 text-center max-w-4xl mx-auto leading-relaxed">
              Top investors and agents trust UndervaluedX because we do more than deliver names. We deliver real opportunities. Our data is constantly verified, refreshed, and filtered to make sure every lead you get is worth your time.
            </p>

            <div className="space-y-12">
              {whyChooseReasons.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/contact" 
                className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium text-lg hover:bg-primary/90 transition-colors"
              >
                Get Exclusive Access →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Lead Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Explore Other Off-Market Opportunities
            </h2>
            <p className="text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto leading-relaxed">
              Looking to grow your real estate business? Explore other exclusive seller lead types that help you find properties others overlook. Each one gives you a unique way to uncover high-motivation homeowners.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {otherLeadTypes.map((lead, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {lead.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {lead.description}
                  </p>
                  <Link 
                    to={lead.link}
                    className="inline-block px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Expand your reach and find your next deal today.
              </p>
              <Link 
                to="/leads"
                className="inline-block px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Explore All Off-Market Leads →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-16 text-center">
              Off-Market Leads FAQ
            </h2>

            <div className="space-y-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="pb-8 border-b border-gray-200 last:border-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Off-Market Leads Before Anyone Else
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Off-market opportunities move fast. These sellers want privacy and quick solutions, not endless negotiations. The best deals go to those who act first. Don't let your next profitable deal slip away.
            </p>
            <Link 
              to="/contact"
              className="inline-block px-10 py-5 bg-primary text-white rounded-lg font-medium text-xl hover:bg-primary/90 transition-colors"
            >
              Get Verified Leads Today →
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OffMarketLeadsPage;
