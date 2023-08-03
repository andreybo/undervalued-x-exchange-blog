import React, { useState, useEffect} from "react"

import Footer from "./footer";
import Header from "./header";
import "../styles/boot.scss";
import "../styles/layout.scss";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import CustomCursor from "./custom-cursor"

function Layout({ children, classmain = "page" }) {
  const location = useLocation()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isZoom, setIsZoom] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
      const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      };
  }, []);

  useEffect(() => {
    const imins = document.querySelectorAll('.imin');
    if (imins) {
      imins.forEach(imin => {
        imin.addEventListener('mouseover', () => {
          document.body.classList.add('mhovered');
        });
        imin.addEventListener('mouseout', () => {
          document.body.classList.remove('mhovered');
        });
      });
    }
  }, []);

  return (
    <React.Fragment>
      <div className={classmain}>
        <Header />
        <main className="overflow main">{children}</main>
        <Footer />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          declineButtonText="Decline"
          cookieName="gatsby-gdpr-google-tagmanager"
          onAccept={() => initializeAndTrack(location)}
        >
          In order to deliver superior & personalized user experience we use
          cookies.
        </CookieConsent>
      </div>
      <CustomCursor isDisplay={isDisplay} position={cursorPosition} />
    </React.Fragment>
  );
}

export default Layout;
