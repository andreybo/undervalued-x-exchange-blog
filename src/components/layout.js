import React from "react";

import Footer from "./footer";
import Header from "./header";
import "../styles/boot.scss";
import "../styles/layout.scss";

function Layout({ children, classmain = "page" }) {
  return (
    <React.Fragment>
      <Header />
      <main className={"overflow main " + classmain}>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
