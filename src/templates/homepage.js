import React from "react";
import { graphql } from "gatsby";

import CardHot from "../components/cards/cardTemplateMainHot";
import CardMain from "../components/cards/cardTemplateMain";
import CardLong from "../components/cards/cardTemplateMainLong";
import CardSmall from "../components/cards/cardTemplateMainSmall";
import Layout from  "../components/layout";
import Seo from "../components/seo"
import Ads from "../components/ads";
import Subscribe from "../components/subscribe";

function IndexPage({
  data: {
    hot1,
    hot2,
    latest,
    blockchain,
    mgdissections,
  },
}) {
  return (
    <Layout classmain="home" title="Highlighted">
    <div className="hp-yellow">
        <div className="hp__container hp__container--hot container mt0">
          {hot1.nodes[0] && <CardHot post={hot1.nodes[0]} classmain=" imin"/>}
              <div className="hero">
                {hot2.nodes.map((post, index) => (
                  <CardSmall post={post} classmain="news__layout-small--out" key={index}/>
                ))}
              </div>
        </div>
    </div>
      <div className="hp container slatest">

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Latest</h3>
          </div>
              <div className="hp__row row mb40">
                <CardLong post={latest.nodes[0]} classmain="card-long imin"/>
              </div>
              <div className="row grid2">
                {latest.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/latest">
              View More
            </a>
          </div>
        </div>

        <Ads/>


        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Mobile Game Dissections</h3>
          </div>
              <div className="hp__row row mb40">
                <CardLong post={mgdissections.nodes[0]} classmain="card-long imin"/>
              </div>
              <div className="row grid2">
                {mgdissections.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/latest">
              View More
            </a>
          </div>
        </div>

        <Ads/>
      </div>
      <div className="hp-yellow2">
        <div className="home_sub">
          <Subscribe/>
        </div>
      </div>
    </Layout>
  );
}

export const indexPageQuery = graphql`fragment postData on WpPost {
  featuredImage {
    node {
      localFile {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
      }
    }
  }
  date
  excerpt
  id
  slug
  tags {
    nodes {
      name
      uri
    }
  }
  title
  uri
  seo {
    metaDesc
  }
  categories {
    nodes {
      name
      slug
    }
  }
}

{
  hot1: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted1"}}}}}
    sort: {date: DESC}
    limit: 1
  ) {
    nodes {
      ...postData
      modified
    }
  }
  hot2: allWpPost(
    filter: {
      categories: {
        nodes: {
          elemMatch: {
            name: { in: ["Highlighted2", "Highlighted3", "Highlighted3-2"] }
          }
        }
      }
    }
    sort: { date: DESC }
    limit: 3
  ) {
    nodes {
      ...postData
      modified
    }
  }
  latest: allWpPost(sort: {date: DESC}, limit: 4) {
    nodes {
      ...postData
      modified
    }
  }
  blockchain: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Blockchain Game Dissections"}}}}}
    sort: {date: DESC}
    limit: 4
  ) {
    nodes {
      ...postData
      modified
    }
  }
  mgdissections: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Mobile Game Dissections"}}}}}
    sort: {date: DESC}
    limit: 4
  ) {
    nodes {
      ...postData
      modified
    }
  }
}`;

export default IndexPage;

export const Head = () => (
  <Seo
  title='Smart advertising | Udonis Mobile Marketing Agency '
  metaDesciption='Udonis Blog is your go-to place for all the news related to mobile games & apps, offering a variety of content available to everyone.'
  />
)