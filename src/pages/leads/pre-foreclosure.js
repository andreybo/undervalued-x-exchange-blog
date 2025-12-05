import React from "react";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import HeroSection from "../../components/hero-section";
import "../../styles/hero-overlay.scss";

const PreForeclosureLeadsPage = () => {
  const otherLeadTypes = [
    {
      title: "Motivated Seller Leads",
      description: "Find homeowners ready to sell fast for personal or financial reasons.",
      link: "/leads/motivated-sellers"
    },
    {
      title: "Distressed Seller Leads",
      description: "Reach property owners who need to offload homes they can't maintain or afford.",
      link: "/leads/distressed"
    },
    {
      title: "Probate Leads",
      description: "Connect with heirs managing inherited properties that need to be sold quickly.",
      link: "/leads"
    },
    {
      title: "Expired Listing Leads",
      description: "Revisit listings that didn't sell and are ready for new offers.",
      link: "/leads"
    },
    {
      title: "Foreclosure Leads",
      description: "Target properties officially in foreclosure for unique buy-and-flip opportunities.",
      link: "/leads"
    },
    {
      title: "FSBO Leads",
      description: "Contact owners selling their homes without an agent who are open to quick deals.",
      link: "/leads"
    }
  ];

  const whyChooseReasons = [
    {
      title: "Get There Before Everyone Else",
      content: "Timing is everything. We update leads daily from verified court filings and public data, so you reach homeowners before your competitors even see the notice."
    },
    {
      title: "Connect With Real Homeowners",
      content: "No dead numbers or fake emails. Every record includes verified contact info, so your outreach actually reaches the person who can make the deal happen."
    },
    {
      title: "Target the Markets That Matter",
      content: "Search any area in the U.S. Filter by state, county, or zip code. Whether you work locally or expand across multiple markets, you'll always have new opportunities ready."
    },
    {
      title: "Focus on Profitable Deals",
      content: "Use our smart filters to zero in on properties that match your buying strategy. Target by equity, estimated value, or property type to find the best fits fast."
    },
    {
      title: "Leads Delivered Instantly",
      content: "The second a lead is verified, it's yours. We'll send it straight to your CRM, inbox, or phone so you can start contacting sellers right away."
    }
  ];

  const faqItems = [
    {
      question: "Why are pre-foreclosure leads so valuable?",
      answer: "Because these sellers are under pressure to act. They're motivated, responsive, and more open to offers that help them move fast."
    },
    {
      question: "How current is your data?",
      answer: "Our data updates every 24 hours from verified public sources. You'll only see fresh, active leads ready for contact."
    },
    {
      question: "Do you include homeowner contact details?",
      answer: "Yes. Every lead includes a verified phone number, email, and property address. You'll never waste time chasing outdated records."
    },
    {
      question: "Can I choose specific areas?",
      answer: "Of course. You can target by county, city, zip code, or state to match your investment strategy."
    },
    {
      question: "How do I receive the leads?",
      answer: "Instantly. Leads are delivered to your CRM, email, or SMS as soon as they're verified."
    }
  ];

  return (
    <Layout>
      <Seo 
        title="Pre-Foreclosure Leads – Distressed Property Leads for Investors"
        description="Get early access to properties entering foreclosure. Help homeowners while securing investment opportunities with our pre-foreclosure lead service."
        keywords="pre-foreclosure leads, foreclosure leads, distressed properties"
        canonical="https://blog.undervaluedx.com/leads/pre-foreclosure"
      />

      <HeroSection
        title="Pre-Foreclosure Leads"
        subtitle="Unlock early access to highly motivated sellers before their homes hit the market. Pre-foreclosure leads connect you with homeowners under time pressure to sell fast. Get in front of them first, build trust, and close deals before anyone else even knows they're available."
        gradientColors="rgba(119, 78, 36, 0.92) 0%, rgba(129, 88, 46, 0.88) 100%"
      />

      {/* What Are Pre-Foreclosure Leads Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
              What Are Pre-Foreclosure Leads?
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Pre-foreclosure leads are homeowners who've missed several mortgage payments and received a notice of default. Their lenders haven't taken the property yet, but the clock is ticking.
              </p>
              <p>
                That urgency makes them open to quick, fair offers. You help them avoid foreclosure. You secure a profitable off-market deal. Everyone wins.
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
              Thousands of investors, agents, and wholesalers rely on UndervaluedX for fresh, verified pre-foreclosure data they can trust. We deliver real homeowner contacts the moment they're available, so you never miss your next opportunity.
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
              Want to fill your pipeline with even more high-intent sellers? Explore other off-market lead types that help you find deals before they go public. Each one targets a different seller situation, so you can focus where you'll get the best returns.
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
                Want to see everything we offer?
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
              Pre-Foreclosure Leads FAQ
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
              Secure Deals Before Foreclosure Hits
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Pre-foreclosure windows close fast. Once a property enters full foreclosure, you lose the chance to deal directly with the homeowner. Stay ahead of the market. Secure profitable deals before anyone else even sees them.
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

export default PreForeclosureLeadsPage;
