import React from "react";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

const ThankYou = ({ pageContext: { page } }) => {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div>
      <Seo
        title="Thank You"
        metaDesciption="Thank you for reaching out to Udonis. Our team will reach out to you as soon as possible."
      />

      <div className="blur-container">
        <div
          className={"blur blur__position-5 blur__variant-" + getRandomInt(4)}
        />
      </div>

      <div className="thanks__hero">
        <div className="thanks__hero-image">
          <StaticImage
            src="../images/home/bottle.png"
            quality={95}
            formats={["auto", "webp"]}
            placeholder="blurred"
            alt=""
          />
        </div>
        <h1 className="thanks__hero-title htitle">
          Thank you for reaching us!
        </h1>
        <p className="thanks__hero-descr">
          Your information has been submitted and we will get back to you soon.
        </p>
        <div className="none__hero-buttons">
          <a className="btn btn--v1" href="https://www.blog.udonis.co">
            Blog
          </a>
          <button
            className="btn btn--v1"
            onClick={() => {
              navigate("/");
            }}
          >
            Homepage
          </button>
          <button
            className="btn btn--v1"
            onClick={() => {
              navigate("/contact");
            }}
          >
            About us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
