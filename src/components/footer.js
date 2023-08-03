import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <div className="footer">
    <footer className="footer-container container">
      <div className="row">
        
        <div className="col-md-3 col-6 footer-logo logohover mobile">
          <Link to="/">
            <img src={`/svg/logo-w.svg`} alt="Udonis" className="fl"/>
          </Link>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">services</h3>
          <ul>
              <li>
                <a href="https://udonis.co/acquisition">
                  Managed User Acqusition
                </a>
              </li>
              <li>
                <a href="https://udonis.co/creative">
                  Creative Production
                </a>
              </li>
              <li>
                <a href="https://udonis.co/mobile-business-development">
                Business Development
                </a>
              </li>
              <li>
                <a href="https://udonis.co/reporting-development">
                  RReporting Dashboards
                </a>
              </li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">udonis</h3>
          <ul>
              <li><a href="https://udonis.co/about">About us</a></li>
              <li><a href="https://udonis.co/portfolio">Portfolio</a></li>
              <li><a href="https://udonis.co/careers">Careers</a></li>
              <li><a href="https://udonis.co/contact">Contact</a></li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <h3 className="footer-title2">social</h3>
          <ul>
              <li><a href="https://twitter.com/UdonisMarketing/">Twitter</a></li>
              <li><a href="https://www.facebook.com/udonis.co/">Facebook</a></li>
              <li><a href="https://www.linkedin.com/company/udonis-inc/">Linkedin</a></li>
          </ul>
        </div>

        <div className="footerhr"/>

        

        <div className="col-md-12 col-12 hor padn end">
              <ul>
                <li className="allrights">© {new Date().getFullYear()} Udonis. All rights reserved.</li>
                <li>|</li>
                <li><a href="https://udonis.co/privacy">Privacy Policy</a></li>
                <li>|</li>
                <li><a href="https://udonis.co/terms">Terms &amp; conditions</a></li>
              </ul>
            </div>
      </div>
    </footer>
  </div>
)

export default Footer
