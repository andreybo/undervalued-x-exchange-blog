import React, { useEffect } from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { navigate } from "gatsby";

const NotFoundPage = ({ pageContext: { page } }) => {

  useEffect(() => {
    navigate("/404");
  }, []);

  return (
    <Layout>
      <div className='none container'>
                <h1 className="thanks__hero-title2 htitle gifBack gifBack--v2">
                  404
                </h1>
                <p className='none__hero-descr'>This webpage disappeared and there&#39;s no reasonable explanation for it.</p>
                <div className='none__hero-buttons'>
                    <a className="main_cta main_cta--white" href="https://www.blog.undervalued-x-exchange.co">
                        <span>Blog</span>
                    </a>
                    <a className="main_cta main_cta--white" href="/">
                        <span>Homepage</span>
                    </a>
                    <a className="main_cta main_cta--white" href="/contact">
                        <span>Contact us</span>
                    </a>
                </div>
            </div>
    </Layout>
  );
};

export default NotFoundPage;


export const Head = () => (
  <Seo
    title="404"
    metaDesciption="Something is not right with this webpage, please try again or go try a different webpage."
  />
)