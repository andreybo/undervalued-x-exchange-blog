import React, { useState, useEffect} from "react"

import Footer from "./footer";
import Header from "./header";
import "../styles/boot.scss";
import "../styles/layout.scss";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router"
import CustomCursor from "./custom-cursor"
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'

function Layout({ children, classmain = "page", title="undervalued-x-exchange" }) {
  const location = useLocation()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
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

    return () => {
      document.body.classList.remove('mhovered'); // This will be called on component unmount
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove('mhovered'); // This will be called on component mount
  }, []);

  return (
    <React.Fragment>
      <div className={classmain}>
        <Header title={title}/>
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
      <CustomCursor position={cursorPosition} />
    </React.Fragment>
  );
}

export default Layout;
