import React from "react";
import Seo from "../components/seo";
import Layout from  "../components/layout";

const ThankYou = ({ pageContext: { page } }) => {

  return (
    <Layout>

      <div className="thanks__hero">
        <div className="thanks__hero-image">
        </div>
        <h1 className="thanks__hero-title htitle gifBack gifBack--v1">
          Thank you for reaching us!
        </h1>
        <p className="thanks__hero-descr">
          Your information has been submitted and we will get back to you soon.
        </p>
        <div className="thanks__hero-buttons">
          <a className="main_cta main_cta--white" href="https://www.blog.undervalued-x-exchange.co">
            <span>Blog</span>
          </a>
          <a className="main_cta main_cta--white" href="https://www.undervalued-x-exchange.co">
            <span>About us</span>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;

export const Head = () => (
  <Seo
    title="Thank You"
    metaDesciption="Thank you for reaching out to undervalued-x-exchange. Our team will reach out to you as soon as possible."
  />
)
