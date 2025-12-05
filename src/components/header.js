import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isOnDark, setIsOnDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSections = document.querySelectorAll('[data-section="dark"]');
      const headerHeight = 64;
      const scrollY = window.scrollY;
      
      let onDarkSection = false;
      
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollY < sectionBottom && scrollY + headerHeight > sectionTop) {
          onDarkSection = true;
        }
      });
      
      setIsOnDark(onDarkSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm transition-all duration-300 ${
      isOnDark 
        ? 'bg-primary/95 border-white/20 text-white' 
        : 'bg-white/98 border-border/20 text-foreground'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/">
            <img
              src={isOnDark
                ? "/uploads/logo-light.png"
                : "/uploads/logo-dark.png"
              }
              alt="UndervaluedX Realty Exchange"
              className="h-10 w-auto transition-all duration-300"
            />
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="/marketplace" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            Marketplace
          </a>
          
          <a href="/leads" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            Leads
          </a>
          
          <a href="/how-it-works" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            How It Works
          </a>

          <a href="/success-stories" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            Success Stories
          </a>

          <a href="/" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            Blog
          </a>

          <a href="/about" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            About
          </a>

          <a href="/contact" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="https://www.undervalued-x-exchange.co/signin" className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
            isOnDark 
              ? 'bg-white/20 text-white hover:bg-white/30' 
              : 'bg-primary text-white hover:bg-primary/90'
          }`}>
            Sign In
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-white/20 bg-primary/95">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <a href="/marketplace" className="text-white/90 hover:text-accent py-2">Marketplace</a>
            <a href="/leads" className="text-white/90 hover:text-accent py-2">Leads</a>
            <a href="/how-it-works" className="text-white/90 hover:text-accent py-2">How It Works</a>
            <a href="/success-stories" className="text-white/90 hover:text-accent py-2">Success Stories</a>
            <a href="/" className="text-white/90 hover:text-accent py-2">Blog</a>
            <a href="/about" className="text-white/90 hover:text-accent py-2">About</a>
            <a href="/contact" className="text-white/90 hover:text-accent py-2">Contact</a>
            <a href="https://www.undervalued-x-exchange.co/signin" className="text-white/90 hover:text-accent py-2">Sign In</a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
