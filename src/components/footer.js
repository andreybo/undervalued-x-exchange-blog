import * as React from "react";
import { Link } from "gatsby";

const Footer = () => (
  <div className="footer">
    <footer className="footer-container container">
      <div className="row">

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">Our services</h3>
          <ul>
              <li>
                <a href="https://www.udonis.co/acquisition">
                  Managed User Acqusition
                </a>
              </li>
              <li>
                <a href="https://www.udonis.co/creative">
                  Creative Production
                </a>
              </li>
              <li>
                <Link to="#">
                  Predictive modeling (Coming Soon)
                </Link>
              </li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">Learn more about</h3>
          <ul>
              <li><a href="/">Mobile Marketing</a></li>
              <li><a href="/topics/user-acquisition">User Acquisition</a></li>
              <li><a href="/topics/mobile-marketing/mobile-apps">Mobile Apps</a></li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">Udonis</h3>
          <ul>
              <li><a href="https://www.udonis.co/about">About us</a></li>
              <li><a href="https://www.udonis.co/portfolio">Portfolio</a></li>
              <li><a href="https://www.udonis.co/careers">Careers</a></li>
              <li><a href="https://www.udonis.co/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="col-md-3 col-6 footer-logo logohover mobile">
          <Link to="/">
            <img src={`/svg/logo-w.svg`} alt="Udonis" className="fl"/>
          </Link>
          <div className="footer_copyright">
            <p>© {new Date().getFullYear()} Udonis. All rights reserved.</p>
          </div>
          <ul className="soc">
            <li>
              <a href="https://www.facebook.com/udonis.co/">
                <img src={`/icons/fb.svg`} alt="facebook"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/udonisagency/">
                <img src={`/icons/inst.svg`} alt="instagram"/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/UdonisMarketing/">
                <img src={`/icons/tw.svg`} alt="twitter"/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/udonis-inc/">
                <img src={`/icons/in.svg`} alt="linkedin"/>
              </a>
            </li>
          </ul>
        </div>

        <div className="footerhr"/>

        

        <div className="col-md-12 col-12 hor padn end">
              <ul>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li>|</li>
                <li><Link to="/terms">Terms &amp; conditions</Link></li>
              </ul>
            </div>
      </div>
    </footer>
  </div>
);

export default Footer;
