import React, { useEffect, useState } from "react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const isNotificationClosed = localStorage.getItem("udonis-notification-closed");
    if (!isNotificationClosed) {
      setIsVisible(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem("udonis-notification-closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      className={`notification-banner ${isSticky ? "sticky" : ""}`}
      style={{
        position: "fixed",
        transition: "top 0.3s ease",
        zIndex: 1000,
        width: "100%",
        background: "#000",
        padding: "10px",
      }}
    >
      <a
        href="https://www.blog.udonis.co/mobile-marketing/udonis-warns-public-against-impersonation-scams"
        className="notification-banner__link"
      >
        ⚠️ Udonis officers and staff members exclusively use @udonis.co emails. If you receive
        employment, investment, or similar opportunities from fraudulent emails, LinkedIn, or
        Facebook profiles, please report them to us immediately.
      </a>
      <button
        onClick={closeBanner}
        className="notification-banner__close"
        style={{
          background: "transparent",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
          marginLeft: "10px",
        }}
      >
        ✖
      </button>
    </div>
  );
};

export const wrapRootElement = ({ element }) => (
  <>
    <NotificationBanner />
    {element}
  </>
);
