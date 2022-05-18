import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import Layout from "../components/layout";

const NotFoundPage = ({ pageContext: { page } }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <Layout>
      <Seo
        title="404"
        metaDesciption="Something is not right with this webpage, please try again or go try a different webpage."
      />
      <div className="blur-container">
        <div
          className={"blur blur__position-5 blur__variant-" + getRandomInt(4)}
        />
      </div>

      <div className="none__hero">
        <div className="none__hero-img">
          <StaticImage
            src="../images/404/cap.png"
            quality={95}
            formats={["auto", "webp"]}
            placeholder="blurred"
            alt="Acquisition"
          />
        </div>
        <h2 className="none__hero-title htitle">
          Huh, it seems you&#39;ve wandered into the Bermuda Triangle section of
          our web.
        </h2>

        <p className="none__hero-descr">
          This webpage disappeared and there&#39;s no reasonable explanation for
          it.
        </p>
        <div className="none__hero-buttons">
          <a className="btn btn--v1" href="https://www.blog.udonis.co/">
            Blog
          </a>
          <a className="btn btn--v1" href="https://www.udonis.co/">
            About us
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
