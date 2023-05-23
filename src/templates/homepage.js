import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import CardHot from "../components/cards/cardTemplateMainHot";
import CardMain from "../components/cards/cardTemplateMain";
import CardImage from "../components/cards/cardTemplateMainImage";
import CardLong from "../components/cards/cardTemplateMainLong";
import CardSmall from "../components/cards/cardTemplateMainSmall";
import Layout from  "../components/layout";
import Seo from "../components/seo"
import Ads from "../components/ads";

function IndexPage({
  data: {
    hot1,
    hot2,
    hot3,
    hot32,
    hot4,
    latest,
    latestOld,
    blockchain,
    blockchainOld,
    mgdissections,
    mgdissectionsOld,
  },
}) {
  return (
    <Layout>
      <div className="hp">
        <Ads/>
        <div className="hp__container hp__container--hot">
              <CardHot post={hot1.nodes[0]} classmain="hot_card"/>
              <div className="hero">
                  <CardMain post={hot2.nodes[0]} classmain="card-main"/>
                  <CardMain post={hot3.nodes[0]} classmain="card-main"/>
                  <CardMain post={hot32.nodes[0]} classmain="card-main"/>
                  <CardMain post={hot4.nodes[0]} classmain="card-main"/>
              </div>
        </div>

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Latest</h3>
          </div>
          <div className="gap20">
                {latest.nodes.map((post, index) => (
                  <CardImage post={post} classmain="news__layout-image-out" key={index}/>
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
          <div className="layout">
            <div className="layout__left">
              <div className="hp__row row mb40">
                <CardLong post={mgdissections.nodes[0]} classmain="card-long"/>
              </div>
              <div className="hp__row row">
                {mgdissections.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
            </div>
            <div className="layout__right vertsmall">
                {mgdissectionsOld.nodes.map((post, index) => (
                  <CardSmall post={post} classmain="news__layout-small--out" key={index}/>
                ))}
            </div>
          </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/mobile-game-dissections">
              View More
            </a>
          </div>
        </div>

        <Ads/>

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Blockchain Game Dissections</h3>
          </div>
          <div className="hp__row block__blockchain--top">
                <div className="block__blockchain--top_2">
                  {blockchain.nodes.map((post, index) => (
                    <CardMain post={post} classmain="card-main" key={index}/>
                  ))}
                </div>
                <div className="block__blockchain--right">
                  <p>yappy</p>
                </div>
          </div>
          <div className="hp__row block__blockchain--bottom">
              {blockchainOld.nodes.map((post, index) => (
                <CardMain post={post} classmain="card-main" key={index}/>
              ))}
          </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/blockchain-game-dissections">
              View More
            </a>
          </div>
        </div>
        <Ads/>
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
    }
  }
  title
  uri
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
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted2"}}}}}
    sort: {date: DESC}
    limit: 1
  ) {
    nodes {
      ...postData
      modified
    }
  }
  hot3: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted3"}}}}}
    sort: {date: DESC}
    limit: 1
  ) {
    nodes {
      ...postData
      modified
    }
  }
  hot32: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted3-2"}}}}}
    sort: {date: DESC}
    limit: 1
  ) {
    nodes {
      ...postData
      modified
    }
  }
  hot4: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted4"}}}}}
    sort: {date: DESC}
    limit: 1
  ) {
    nodes {
      ...postData
      modified
    }
  }
  latest: allWpPost(sort: {date: DESC}, limit: 3) {
    nodes {
      ...postData
      modified
    }
  }
  latestOld: allWpPost(sort: {date: DESC}, limit: 3, skip: 4) {
    nodes {
      ...postData
      modified
    }
  }
  blockchain: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Blockchain Game Dissections"}}}}}
    sort: {date: DESC}
    limit: 2
  ) {
    nodes {
      ...postData
      modified
    }
  }
  blockchainOld: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Blockchain Game Dissections"}}}}}
    sort: {date: DESC}
    limit: 4
    skip: 2
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
  mgdissectionsOld: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Mobile Game Dissections"}}}}}
    sort: {date: DESC}
    limit: 5
    skip: 4
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