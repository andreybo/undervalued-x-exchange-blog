import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import HeroSection from "../../components/hero-section";
import "../../styles/hero-overlay.scss";

const DistressedSellerLeadsPage = () => {
  const otherLeadTypes = [
    {
      title: "Motivated Seller Leads",
      description: "Connect with homeowners who are eager to sell fast and open to fair cash offers.",
      link: "/leads/motivated-sellers"
    },
    {
      title: "Pre-Foreclosure Leads",
      description: "Reach homeowners before their properties enter foreclosure. Ideal for early, high-intent deals.",
      link: "/leads/pre-foreclosure"
    },
    {
      title: "Absentee Owner Leads",
      description: "Find property owners who live elsewhere and are ready to sell their investment homes.",
      link: "/leads"
    },
    {
      title: "Probate Leads",
      description: "Contact heirs handling inherited homes who prefer to sell quickly rather than manage the property.",
      link: "/leads"
    },
    {
      title: "FSBO Leads",
      description: "Connect directly with homeowners selling without an agent. Skip the middleman and negotiate directly.",
      link: "/leads"
    },
    {
      title: "Off-Market Leads",
      description: "Target homeowners under financial pressure who need a fast, reliable buyer.",
      link: "/leads/off-market"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Verified Homeowners",
      content: "Every lead is confirmed for ownership, contact accuracy, and distress indicators. No fake data. No wasted calls. Just real homeowners who want to sell today."
    },
    {
      title: "Fresh Data, Updated Daily",
      content: "Our lists refresh every 24 hours, so you're never working with old information. You'll always be first in line to contact sellers ready to deal."
    },
    {
      title: "Instant Delivery and Easy Setup",
      content: "Receive leads in real time, sent directly to your CRM, inbox, or phone. You can start outreach the moment a lead is verified."
    },
    {
      title: "Motivation Scoring for Smarter Outreach",
      content: "Each seller is ranked by urgency, helping you focus on the most promising opportunities first. Less guessing, more closing."
    },
    {
      title: "Transparent and Traceable Sources",
      content: "We show where every lead comes from. You'll always know the data is legitimate, verified, and exclusive to you."
    }
  ];

  const faqItems = [
    {
      question: "Are these leads truly exclusive?",
      answer: "Yes. Once you buy a lead, it's yours alone. We never resell or share your contacts, giving you a real edge against competitors."
    },
    {
      question: "How fresh is the data?",
      answer: "We update our lists every day using verified data sources. You'll only receive leads that reflect the latest homeowner situations."
    },
    {
      question: "What info will I get per lead?",
      answer: "Each lead includes verified contact details, property address, distress indicators, and seller motivation level. Everything you need to start a real conversation."
    },
    {
      question: "How do I get the leads?",
      answer: "Choose how you want them delivered: directly into your CRM, your inbox, or SMS. Delivery is instant once leads are verified."
    },
    {
      question: "Is there a minimum order?",
      answer: "No. Start small and scale as you go. You can test a few leads before committing to larger volumes."
    },
    {
      question: "What if a lead isn't accurate?",
      answer: "We stand behind our data. If a lead doesn't meet our verification standards, we'll replace it."
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Distressed Seller Leads – Buy Motivated Property Owner Leads for Investors"
        description="Connect with distressed property owners facing financial challenges. High-motivation leads perfect for investors seeking below-market opportunities."
        keywords="distressed seller leads, distressed properties, motivated sellers"
        canonical="https://blog.undervaluedx.com/leads/distressed"
      />

      <HeroSection
        title="Distressed Seller Leads"
        subtitle="Find homeowners under pressure to sell now. Our distressed seller leads connect you with real people who need fast, serious offers. Every lead is verified, exclusive, and ready for your next deal."
        gradientColors="rgba(80, 110, 150, 0.92) 0%, rgba(90, 120, 160, 0.88) 100%"
      />

      {/* What Are Distressed Seller Leads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              What Are Distressed Seller Leads?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Distressed seller leads are homeowners in tough financial or property situations who need to sell fast. They might be behind on payments or dealing with costly maintenance issues, which makes them motivated and open to fair, quick offers.
              </p>
              <p>
                For investors, agents, and wholesalers, these are goldmine opportunities. You can reach sellers before their homes hit the open market, giving you a head start on profitable, low-competition deals.
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
              When speed and accuracy matter, UndervaluedX delivers. Our team sources real, verified, and high-intent distressed sellers, so every lead has genuine selling motivation behind it. We don't send recycled data or cold prospects. We send active opportunities that help you close faster and smarter.
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
              Looking to expand your deal flow? These off-market lead types connect you with motivated homeowners in different situations. Each one gives you a new way to find undervalued properties and close more profitable deals.
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
                Explore all lead types and find the ones that match your investment strategy.
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
              Distressed Seller Leads FAQ
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
              Access Exclusive Distressed Seller Leads Now
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Distressed homeowners need quick solutions, and timing is everything. Each day you wait, another investor could close the deal first. Get verified leads before they're gone and turn distress into opportunity.
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

export default DistressedSellerLeadsPage;
