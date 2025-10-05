import React from 'react';
import { Link } from 'gatsby';

const FooterNew = () => {
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-new__grid">
          {/* Company Info */}
          <div className="footer-new__column">
            <a href="https://www.undervalued-x-exchange.co" className="footer-new__logo">
              <img
                src="/svg/logo-w.svg"
                alt="UndervaluedX Realty Exchange"
                width="180"
                height="45"
              />
            </a>
            <p className="footer-new__description">
              Connecting motivated property sellers with qualified real estate investors 
              through premium lead generation services.
            </p>
            <div className="footer-new__contact">
              <div className="footer-new__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(555) 123-LEADS</span>
              </div>
              <div className="footer-new__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>info@undervaluedx.com</span>
              </div>
              <div className="footer-new__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Nationwide Coverage</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-new__column">
            <h3 className="footer-new__heading">Services</h3>
            <ul className="footer-new__list">
              <li><a href="https://www.undervalued-x-exchange.co/services">Motivated Seller Leads</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/matching">Investor Matching</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/analytics">Market Analytics</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/nurturing">Lead Nurturing</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/crm">CRM Integration</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-new__column">
            <h3 className="footer-new__heading">Resources</h3>
            <ul className="footer-new__list">
              <li><Link to="/">Blog</Link></li>
              <li><a href="https://www.undervalued-x-exchange.co/success-stories">Success Stories</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/market-reports">Market Reports</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/training">Training Center</a></li>
              <li><a href="https://www.undervalued-x-exchange.co/faq">FAQ</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="footer-new__column">
            <h3 className="footer-new__heading">Ready to Get Started?</h3>
            <p className="footer-new__cta-text">
              Join hundreds of successful real estate professionals already using our platform.
            </p>
            <a href="https://www.undervalued-x-exchange.co/signup" className="footer-new__button">
              Start Free Trial
            </a>
            <p className="footer-new__disclaimer text-sm">
              No setup fees. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-new__bottom">
          <div className="footer-new__copyright">
            © 2025 UndervaluedX Realty Exchange. All rights reserved.
          </div>
          <div className="footer-new__links">
            <a href="https://www.undervalued-x-exchange.co/privacy">Privacy Policy</a>
            <a href="https://www.undervalued-x-exchange.co/terms">Terms of Service</a>
            <a href="https://www.undervalued-x-exchange.co/data">Data Usage</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
