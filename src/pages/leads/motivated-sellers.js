import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import HeroSection from "../../components/hero-section";
import "../../styles/hero-overlay.scss";

const MotivatedSellerLeadsPage = () => {
  const otherLeadTypes = [
    {
      title: "Distressed Seller Leads",
      description: "Find homeowners in financial distress who need to sell quickly. Ideal for cash buyers and investors.",
      link: "/leads/distressed"
    },
    {
      title: "Pre-Foreclosure Leads",
      description: "Target homeowners facing pre-foreclosure for high-intent opportunities. Connect before the bank intervenes.",
      link: "/leads/pre-foreclosure"
    },
    {
      title: "Probate Leads",
      description: "Connect with heirs ready to sell inherited property. High-intent leads with actionable potential.",
      link: "/leads"
    },
    {
      title: "Expired Listing Leads",
      description: "Target homeowners whose listings didn't sell. Turn expired listings into motivated seller opportunities.",
      link: "/leads"
    },
    {
      title: "FSBO Leads",
      description: "Reach homeowners selling without an agent. Minimize competition and connect directly with sellers.",
      link: "/leads"
    },
    {
      title: "Absentee Owner Leads",
      description: "Target property owners who don't live in their homes. Ideal for investors looking for rental or resale opportunities.",
      link: "/leads"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Real Sellers, Not Scraped Data",
      content: "Every lead comes from a homeowner who's submitted their details for a home offer. We never use scraped or recycled data, so you only get genuine sellers who've shown real intent to sell."
    },
    {
      title: "Verified and Filtered for Motivation",
      content: "Our multi-layer verification process confirms property ownership, identity, and selling motivation. Leads that don't meet our standards are removed, leaving you with only qualified, motivated sellers."
    },
    {
      title: "Delivered Instantly and Exclusively",
      content: "Once approved, leads are delivered to your inbox or CRM in real time. Each one is sold once and never shared, so you own the contact — and the advantage."
    },
    {
      title: "Complete Seller Details",
      content: "Every lead includes verified phone numbers, email addresses, and property information. You'll have everything you need to start outreach immediately through any channel."
    },
    {
      title: "Flexible, No-Contract Model",
      content: "Buy leads when you need them and pause anytime. There are no long-term commitments, minimums, or hidden lock-ins — full control stays with you."
    }
  ];

  const faqItems = [
    {
      question: "Are your motivated seller leads exclusive?",
      answer: "Yes, 100% exclusive. Once a lead is sold, it's yours alone. No duplicates. No shared data. No competition."
    },
    {
      question: "How fresh are your leads?",
      answer: "Leads are verified and updated daily — you get sellers who are active right now, not weeks-old data."
    },
    {
      question: "What information do I get with each lead?",
      answer: "Each lead includes verified phone numbers, email addresses, and detailed property information. You'll have everything you need to start outreach immediately."
    },
    {
      question: "Is there a minimum order or long-term contract?",
      answer: "No. You can buy as many or as few leads as you want, whenever you need them. There are no commitments or monthly quotas."
    },
    {
      question: "What if I'm not satisfied with my leads?",
      answer: "We offer a 30-day money-back guarantee. If you're not happy with your purchase, you'll get a full refund, no questions asked."
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Motivated Seller Leads – Buy Verified Real Estate Leads for Investors"
        description="Buy high-quality motivated seller leads for real estate investors, agents, and wholesalers. Get exclusive, verified seller leads ready to sell now."
        keywords="motivated seller leads, real estate leads, investor leads"
        canonical="https://blog.undervaluedx.com/leads/motivated-sellers"
      />

      <HeroSection
        title="Motivated Seller Leads"
        subtitle="Get exclusive, verified leads from real homeowners who need to sell now. Connect instantly with sellers who are serious, responsive, and ready for a deal."
        gradientColors="rgba(20, 52, 48, 0.92) 0%, rgba(28, 65, 60, 0.88) 100%"
      />

      {/* What Are Motivated Sellers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              What Are Motivated Sellers?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Motivated sellers are homeowners facing financial or personal pressure to sell fast.
                Foreclosure, relocation, divorce, or inherited property often drive their urgency.
              </p>
              <p>
                For real estate investors, agents, and wholesalers, these are the most valuable leads in the market. 
                Motivated sellers are ready to talk, willing to negotiate, and actively looking for a solution.
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
              We built our system to identify real homeowners ready to sell and deliver their verified details directly to you, 
              before your competitors ever reach them. No recycled lists. No guesswork. Just exclusive, high-intent, motivated 
              seller leads that turn into real opportunities.
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
              Want more ways to find motivated sellers? Explore other types of off-market leads to reach homeowners 
              ready to make a move. Each one helps you discover new opportunities and stay ahead of the competition.
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
                Didn't find what you were looking for?
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
              Motivated Seller Leads FAQ
            </h2>

            <div className="space-y-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="pb-8 border-b border-gray-200 last:border-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {index + 1}. {faq.question}
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
              Act Fast. Motivated Sellers Don't Wait.
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Every hour counts when homeowners are under pressure to sell. Get your exclusive leads now and 
              close more deals before competitors reach them.
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

export default MotivatedSellerLeadsPage;
