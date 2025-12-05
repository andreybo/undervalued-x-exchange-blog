import React from "react";
import { graphql } from "gatsby";

import CardMain from "../components/cards/cardTemplateMain";
import CardLong from "../components/cards/cardTemplateMainLong";
import Layout from  "../components/layout";
import Seo from "../components/seo"
import Subscribe from "../components/subscribe";
import HeroSection from "../components/hero-section";

function IndexPage({
  data: {
    latest,
    mgdissections,
    allWpCategory
  },
}) {
  return (
    <Layout classmain="home" title="Highlighted">
      <HeroSection categories={allWpCategory.nodes} />
      
      <div className="hp container slatest">

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Latest Articles</h3>
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

        <div className="hp__container hidden">
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
            <a className="hp__more--link" href="/topics/mobile-game-dissections">
              View More
            </a>
          </div>
        </div>

      </div>
      <div className="container">
        <div className="home_sub">
          <Subscribe/>
        </div>
      </div>
      <div className="hp-yellow2">
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
  modified
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
  latest: allWpPost(sort: {date: DESC}, limit: 4) {
    nodes {
      ...postData
    }
  }
  mgdissections: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Mobile Game Dissections"}}}}}
    sort: {date: DESC}
    limit: 4
  ) {
    nodes {
      ...postData
    }
  }

allWpCategory(
  sort: {count: DESC}
  filter: {name: {nin: ["Highlighted1", "Highlighted3", "Highlighted2", "Highlighted4", "Highlighted3-2", "Uncategorized", "News", "Analytics", "Google Ads", "TikTok Updates", "Gaming Talks"]}, count: {gte: 1}}
) {
  nodes {
    name
    uri
    count
  }
}
}`;

export default IndexPage;

export const Head = () => (
  <Seo
  title='Blog | undervalued-x-exchange Mobile Marketing Agency'
  metaDesciption='Dive deep into the mobile games industry: from user acquisition to monetization. Discover the latest trends, insights, and expert analyses all in one place.'
  />
)