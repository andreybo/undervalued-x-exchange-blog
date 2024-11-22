import React, { useEffect, useState } from "react";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isNotificationClosed = localStorage.getItem("udonis-notification-closed");
    if (!isNotificationClosed) {
      setIsVisible(true);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    localStorage.setItem("udonis-notification-closed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="notification-banner">
      <a href="https://www.blog.udonis.co/mobile-marketing/udonis-warns-public-against-impersonation-scams" className="notification-banner__link">
        ⚠️ Udonis officers and staff members exclusively use @udonis.co emails. If you receive
        employment, investment, or similar opportunities from fraudulent emails, LinkedIn, or
        Facebook profiles, please report them to us immediately.
      </a>
      <button onClick={closeBanner} className="notification-banner__close">
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
