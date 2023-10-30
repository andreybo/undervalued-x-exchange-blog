import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div className="footer">
    <footer className="footer-container container">
      <div className="row">

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">our services</h3>
          <ul>
              <li>
                <a href="https://www.udonis.co/acquisition/">
                  user acquisition
                </a>
              </li>
              <li>
                <a href="https://www.udonis.co/creative-production/">
                  creative production
                </a>
              </li>
              <li>
                <a href="https://www.udonis.co/mobile-business-development/">
                  mobile business development
                </a>
              </li>
              <li>
                <a href="https://www.udonis.co/marketing-dashboard/">
                  marketing dashboard
                </a>
              </li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">learn more about</h3>
          <ul>
              <li><a href="/">mobile marketing</a></li>
              <li><a href="/topics/user-acquisition/">user acquisition</a></li>
              <li><a href="/topics/mobile-marketing/mobile-apps/">mobile apps</a></li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">udonis</h3>
          <ul>
              <li><a href="https://www.udonis.co/about/">about us</a></li>
              <li><a href="https://www.udonis.co/careers/">careers</a></li>
              <li><a href="https://www.udonis.co/contact/">contact</a></li>
          </ul>
        </div>
        
        <div className="col-md-3 col-6 footer-logo logohover mobile">
          <a href="/">
            <img src={`/svg/logo-w.svg`} alt="Udonis" className="fl"/>
          </a>
          <div className="footer_copyright">
            <p>© {new Date().getFullYear()} udonis. all rights reserved.</p>
          </div>
          <ul className="soc">
            <li>
              <a href="https://www.facebook.com/udonis.co/">
                <img src={`/icons/fb.svg`} alt="facebook"/>
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
                <li><a href="/privacy/">privacy policy</a></li>
                <li>|</li>
                <li><a href="/terms/">terms &amp; conditions</a></li>
              </ul>
            </div>
      </div>
    </footer>
  </div>
)

export default Footer
