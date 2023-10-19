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
    mgm,
    mgdissections,
    monetization,
    recent,
    ua,
    allWpCategory
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

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Recently updated</h3>
          </div>
              <div className="hp__row row mb40">
                <CardLong post={recent.nodes[0]} classmain="card-long imin"/>
              </div>
              <div className="row grid2">
                {recent.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/recently-updated/">
              View More
            </a>
          </div>
        </div>

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

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Mobile Game Market</h3>
          </div>
              <div className="hp__row row mb40">
                <CardLong post={mgm.nodes[0]} classmain="card-long imin"/>
              </div>
              <div className="row grid2">
                {mgm.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/mobile-game-market/">
              View More
            </a>
          </div>
        </div>

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">User Acquisition</h3>
          </div>
              <div className="hp__row row mb40">
                <CardLong post={ua.nodes[0]} classmain="card-long imin"/>
              </div>
              <div className="row grid2">
                {ua.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/user-acquisition/">
              View More
            </a>
          </div>
        </div>

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">Monetization</h3>
          </div>
              <div className="hp__row row mb40">
                <CardLong post={monetization.nodes[0]} classmain="card-long imin"/>
              </div>
              <div className="row grid2">
                {monetization.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="col-md-4 col-12" key={index}/>
                ))}
              </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/monetization/">
              View More
            </a>
          </div>
        </div>

        <div className="hp__container">
          <div className="hp__title">
            <h3 className="hp__title--text">All Categories</h3>
          </div>

          <div className="cats">
            <ul>
              {allWpCategory.nodes.map((category, index) => (
                <li key={index}><a href={category.uri}>{category.name}</a></li>
              ))}
            </ul>
          </div>
        </div>

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
            name: { in: ["Highlighted2", "Highlighted3", "Highlighted3-2", "Highlighted4"] }
          }
        }
      }
    }
    sort: { date: DESC }
    limit: 4
  ) {
    nodes {
      ...postData
      modified
    }
  }
  recent: allWpPost(
    filter: {
      categories: {
        nodes: {
          elemMatch: {
            name: { in: ["Recently updated"] }
          }
        }
      }
    }
    sort: { date: DESC }
    limit: 4
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
  
  mgm: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Mobile Game Market"}}}}}
    sort: {date: DESC}
    limit: 4
  ) {
    nodes {
      ...postData
      modified
    }
  }
  
  monetization: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "Monetization"}}}}}
    sort: {date: DESC}
    limit: 4
  ) {
    nodes {
      ...postData
      modified
    }
  }
  
  ua: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {eq: "User Acquisition"}}}}}
    sort: {date: DESC}
    limit: 4
  ) {
    nodes {
      ...postData
      modified
    }
  }
  

allWpCategory(
  sort: {count: DESC}
  filter: {name: {nin: ["Highlighted1", "Highlighted3", "Highlighted2", "Highlighted4", "Highlighted3-2", "Uncategorized"]}, count: {gte: 1}}
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
  title='Blog | Udonis Mobile Marketing Agency'
  metaDesciption='Dive deep into the mobile games industry: from user acquisition to monetization. Discover the latest trends, insights, and expert analyses all in one place.'
  />
)