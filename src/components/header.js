import React, { useEffect, useState } from 'react';
import '../styles/tailwind.css';

const Header = () => {
  const [isOnDark, setIsOnDark] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

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
        ? 'bg-primary/95 border-white/20' 
        : 'bg-white/98 border-gray-200'
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
        
        <nav className="hidden md:!flex items-center space-x-10">
          <a href="/marketplace" className={`transition-colors font-sans text-sm font-medium tracking-wide ${
            isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
          }`}>
            Marketplace
          </a>
          
          <div className="relative group">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'leads' ? null : 'leads')}
              onMouseEnter={() => setOpenDropdown('leads')}
              className={`transition-colors font-sans text-sm font-medium tracking-wide flex items-center gap-1 ${
                isOnDark ? 'text-white/90 hover:text-accent' : 'text-foreground/80 hover:text-primary'
              }`}
            >
              Leads
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'leads' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {openDropdown === 'leads' && (
              <div 
                className="absolute left-0 mt-0 w-[420px] bg-white rounded-lg shadow-lg p-3 z-50"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="grid gap-0">
                  <a
                    href="/leads/motivated-sellers"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#c6ab6c]"
                  >
                    <div className="text-sm font-medium leading-none text-gray-900">Motivated Seller Leads</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Pre-qualified sellers ready to close deals quickly
                    </p>
                  </a>
                  <a
                    href="/leads/off-market"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#c6ab6c]"
                  >
                    <div className="text-sm font-medium leading-none text-gray-900">Off-Market Leads</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Exclusive properties not listed publicly
                    </p>
                  </a>
                  <a
                    href="/leads/distressed"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#c6ab6c]"
                  >
                    <div className="text-sm font-medium leading-none text-gray-900">Distressed Seller Leads</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Time-sensitive opportunities for quick acquisitions
                    </p>
                  </a>
                  <a
                    href="/leads/pre-foreclosure"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#c6ab6c]"
                  >
                    <div className="text-sm font-medium leading-none text-gray-900">Pre-Foreclosure Leads</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      Properties in early stages of foreclosure process
                    </p>
                  </a>
                </div>
              </div>
            )}
          </div>
          
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
          <a href="/signin" className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
            isOnDark 
              ? 'bg-accent text-primary hover:opacity-90' 
              : 'bg-primary !text-white hover:opacity-90'
          }`}>
            Sign In
          </a>
        </div>
      </div>

      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpenDropdown(null)}
        />
      )}
    </header>
  );
};

export default Header;
