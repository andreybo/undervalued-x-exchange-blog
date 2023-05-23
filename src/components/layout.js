import React from "react";

import Footer from "./footer";
import Header from "./header";
import "../styles/boot.scss";
import "../styles/layout.scss";
import CookieConsent from "react-cookie-consent";
import { useLocation } from "@reach/router" // this helps tracking the location
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'

function Layout({ children, classmain = "page" }) {
  const location = useLocation()
  return (
    <React.Fragment>
      <Header />
      <main className={"overflow main container " + classmain}>{children}</main>
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
    </React.Fragment>
  );
}

export default Layout;
