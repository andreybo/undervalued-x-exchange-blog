import React, { useState, useEffect} from "react"

import Footer from "./footer";
import Header from "./header";
import "../styles/boot.scss";
import "../styles/layout.scss";
import { useLocation } from "@reach/router" // this helps tracking the location
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
        <Header />
        <main className="overflow main">{children}</main>
        <Footer />
      </div>
      <CustomCursor isDisplay={isDisplay} position={cursorPosition} />
    </React.Fragment>
  );
}

export default Layout;
