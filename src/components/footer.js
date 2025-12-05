import * as React from "react"
import { Link } from "gatsby"
import logoLight from "../../static/uploads/logo-light.png"

const Footer = () => (
  <footer className="footer bg-primary text-white">
    <div className="container mx-auto px-4 py-16">
      <div className="footer-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div className="footer-company">
          <img
            src={logoLight}
            alt="UndervaluedX Realty Exchange"
            className="footer-logo h-10 w-auto mb-4"
          />
          <p className="footer-description font-sans text-white/80 mb-6 leading-relaxed">
            Connecting motivated property sellers with qualified real estate investors 
            through premium lead generation services.
          </p>
          <div className="footer-contact">
            <div className="flex items-center space-x-3 mb-0">
              <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-sans text-sm">(555) 123-LEADS</span>
            </div>
            <div className="flex items-center space-x-3 mb-0">
              <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="font-sans text-sm">info@undervaluedx.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-sans text-sm">Nationwide Coverage</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3 className="footer-title font-sans font-semibold text-lg mb-6">Services</h3>
          <ul className="font-sans text-white/80 !gap-1 flex">
            <li className="mb-0"><Link to="/lead-generation" className="hover:text-accent transition-colors">Real Estate Lead Generation</Link></li>
            <li className="mb-0"><a href="https://www.undervalued-x-exchange.co/real-estate-marketing" className="hover:text-accent transition-colors">Real Estate Marketing</a></li>
            <li className="mb-0"><a href="https://www.undervalued-x-exchange.co/lead-nurturing" className="hover:text-accent transition-colors">Lead Nurturing</a></li>
            <li className="mb-0"><a href="https://www.undervalued-x-exchange.co/market-analytics" className="hover:text-accent transition-colors">Market Analytics</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-resources">
          <h3 className="footer-title font-sans font-semibold text-lg mb-6">Resources</h3>
          <ul className="font-sans text-white/80 !gap-1">
            <li className="mb-0"><Link to="/" className="hover:text-accent transition-colors">Blog</Link></li>
            <li className="mb-0"><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
            <li className="mb-0"><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer-cta">
          <h3 className="footer-title font-sans font-semibold text-lg mb-6">Ready to Get Started?</h3>
          <p className="font-sans text-white/80 mb-6 text-sm">
            Join hundreds of successful real estate professionals already using our platform.
          </p>
          <Link 
            to="/contact" 
            className="footer-button btn-accent w-full mb-4 inline-block text-center bg-accent text-primary px-6 py-3 rounded-md font-semibold hover:bg-accent-glow transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="font-sans text-xs text-white/60">
            No setup fees. Cancel anytime.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom border-t border-white/20 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-sans text-white/60 text-sm">
            © {new Date().getFullYear()} UndervaluedX Realty Exchange. All rights reserved.
          </div>
          <div className="flex space-x-6 font-sans text-white/60 text-sm">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="https://www.undervalued-x-exchange.co/data-usage" className="hover:text-white transition-colors">Data Usage</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
