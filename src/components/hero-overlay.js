import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HeroWithOverlay = ({ title, subtitle, showStats = false }) => {
  return (
    <div className="hero-overlay">
      <div className="hero-overlay__background">
        <StaticImage
          src="../images/hero-background.jpg"
          alt="Real Estate Investment Background"
          layout="fullWidth"
          quality={90}
          placeholder="blurred"
          className="hero-overlay__image"
        />
        <div className="hero-overlay__blue-overlay"></div>
      </div>
      
      <div className="hero-overlay__content container">
        <div className="hero-overlay__text">
          <h1 className="hero-overlay__title">
            {title || (
              <>
                While You're Reading This,<br />
                <span className="hero-overlay__title-accent">Members Are Making Money</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p className="hero-overlay__subtitle">{subtitle}</p>
          )}
          {!subtitle && (
            <p className="hero-overlay__subtitle">
              <span className="hero-overlay__live">LIVE DATA:</span> These numbers update in real-time. 
              See what our members are achieving while you're here.
            </p>
          )}
        </div>
        
        {showStats && (
          <div className="hero-overlay__stats">
            <div className="hero-overlay__stat-card">
              <div className="hero-overlay__stat-icon">📈</div>
              <div className="hero-overlay__stat-number">127</div>
              <div className="hero-overlay__stat-label">Deals Closed Today</div>
              <div className="hero-overlay__stat-desc">Real investors, real closings, real profits</div>
            </div>
            
            <div className="hero-overlay__stat-card">
              <div className="hero-overlay__stat-icon">⏱️</div>
              <div className="hero-overlay__stat-number">73%</div>
              <div className="hero-overlay__stat-label">Close Within 30 Days</div>
              <div className="hero-overlay__stat-desc">While others wait months, our members close fast</div>
            </div>
            
            <div className="hero-overlay__stat-card">
              <div className="hero-overlay__stat-icon">🛡️</div>
              <div className="hero-overlay__stat-number">847</div>
              <div className="hero-overlay__stat-label">Active Members Online</div>
              <div className="hero-overlay__stat-desc">Elite investors competing for the same deals</div>
            </div>
            
            <div className="hero-overlay__stat-card">
              <div className="hero-overlay__stat-icon">⭐</div>
              <div className="hero-overlay__stat-number">$847K</div>
              <div className="hero-overlay__stat-label">Average Member Profit</div>
              <div className="hero-overlay__stat-desc">Last 90 days - verified by third party</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroWithOverlay;
