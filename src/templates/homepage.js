import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import CardH from "../components/cards/cardHor";
import CardV from "../components/cards/cardVert";
import CardT from "../components/cards/cardTitle";
import Layout from  "../components/layout";
import Seo from "../components/seo"
import Blur from "../components/blur";
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
    hotImage
  },
}) {
  return (
    <Layout>
      <Seo
        title='Smart advertising | Udonis Mobile Marketing Agency '
        metaDesciption='Udonis Blog is your go-to place for all the news related to mobile games & apps, offering a variety of content available to everyone.'
        />
        <Blur/>
      <div className="hp">
        <Ads/>
        <div className="hp__container hp__container--hot container">
          <div className="hp__hot">
            <div className="hp__sticker">
              <StaticImage
                alt='hot'
                objectFit='contain'
                className='hp__sticker--image'
                src='../images/icons/Icons_0000s_0021_03.png'
              />
            </div>
            <h3 className="hp__hot--text">Highlighted</h3>
          </div>
          <div className="hp__row row fixcolor">
            <div className="hp__col col-md-7 col-12">
              <div className="hp__row row">
                  <CardH data={hot1} descr={true} classmain="col-md-6 col-12"/>
                  <CardH data={hot2} descr={true} classmain="col-md-6 col-12"/>
                  <CardT data={hot3} descr={true} classmain="col-md-6 col-12"/>
                  <CardT data={hot32} descr={true} classmain="col-md-6 col-12"/>
              </div>
            </div>
            <div className="hp__col col-md-5 col-12 fixheight">
              <div className="hp__row row">
                  <CardV data={hot4} descr={true} classmain="col-md-12 col-12"/>
              </div>
            </div>
          </div>
        </div>
        <div className="hp__container container">
          <p className="hp__subtitle">Trends for you</p>
          <div className="hp__title">
            <h3 className="hp__title--text">Latest</h3>
            <a className="hp__title--link" href="/latest">
              <img src="link.svg" alt="link" />
            </a>
          </div>
          <div className="hp__row row">
            <div className="hp__col col-md-7 col-12">
              <div className="hp__row row">
                <CardH data={latest} homepage={true} classmain="col-md-6 col-12" />
              </div>
            </div>
            <div className="hp__col col-md-5 col-12">
              <div className="hp__row row">
                <CardV data={latestOld} classmain="col-md-12 col-12" />
              </div>
            </div>
          </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/latest">
              View More
            </a>
          </div>
        </div>
        <Ads/>
        <div className="hp__container container">
          <p className="hp__subtitle">Trends for you</p>
          <div className="hp__title">
            <h3 className="hp__title--text">Mobile Game Dissections</h3>
            <a className="hp__title--link" href="/topics/mobile-game-dissections">
              <img src="link.svg" alt="link" />
            </a>
          </div>
          <div className="hp__row row">
            <div className="hp__col col-md-7 col-12">
              <div className="hp__row row">
                <CardH data={mgdissections} homepage={true} classmain="col-md-6 col-12" />
              </div>
            </div>
            <div className="hp__col col-md-5 col-12">
              <div className="hp__row row">
                <CardV data={mgdissectionsOld} classmain="col-md-12 col-12" />
              </div>
            </div>
          </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/mobile-game-dissections">
              View More
            </a>
          </div>
        </div>
        <Ads/>
        <div className="hp__container container">
          <p className="hp__subtitle">Trends for you</p>
          <div className="hp__title">
            <h3 className="hp__title--text">Blockchain</h3>
            <a className="hp__title--link" href="/topics/blockchain">
              <img src="link.svg" alt="link" />
            </a>
          </div>
          <div className="hp__row row">
            <div className="hp__col col-md-7 col-12">
              <div className="hp__row row">
                <CardH data={blockchain} homepage={true} classmain="col-md-6 col-12" />
              </div>
            </div>
            <div className="hp__col col-md-5 col-12">
              <div className="hp__row row">
                <CardV data={blockchainOld} classmain="col-md-12 col-12" />
              </div>
            </div>
          </div>
          <div className="hp__more">
            <a className="hp__more--link" href="/topics/blockchain">
              View More
            </a>
          </div>
        </div>
        <Ads/>
      </div>
    </Layout>
  );
}

export const indexPageQuery = graphql`

  fragment postData on WpPost {
    featuredImage {
      node{
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
    tags{
      nodes{
        name
      }
    }
    title
    uri
    categories{
      nodes{
        name
        slug
      }
    }
  }

  query {
    hot1: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted1"}}}}}
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      nodes {
        ...postData
        modified
      }
    },
    hot2: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted2"}}}}}
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      nodes {
        ...postData
        modified
      }
    },
    hot3: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted3"}}}}}
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      nodes {
        ...postData
        modified
      }
    },
    hot32: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted3-2"}}}}}
      sort: { fields: date, order: DESC }
      limit: 1
    ) {
      nodes {
        ...postData
        modified
      }
    },
    hot4: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Highlighted4"}}}}}
      sort: { fields: date, order: DESC }
      limit: 3
    ) {
      nodes {
        ...postData
        modified
      }
    },
    latest: allWpPost(
      sort: { fields: date, order: DESC }
      limit: 4
    ) {
      nodes {
        ...postData
        modified
      }
    }
    latestOld: allWpPost(
      sort: { fields: date, order: DESC }
      limit: 3
      skip: 4
    ) {
      nodes {
        ...postData
        modified
      }
    }
    blockchain: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Blockchain"}}}}}
      sort: { fields: date, order: DESC }
      limit: 4
    ) {
      nodes {
        ...postData
        modified
      }
    }
    blockchainOld: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Blockchain"}}}}}
      sort: { fields: date, order: DESC }
      limit: 3
      skip: 4
    ) {
      nodes {
        ...postData
        modified
      }
    }
    mgdissections: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Mobile Game Dissections"}}}}}
      sort: { fields: date, order: DESC }
      limit: 4
    ) {
      nodes {
        ...postData
        modified
      }
    }
    mgdissectionsOld: allWpPost(
      filter: {categories: {nodes: {elemMatch: {name: {eq: "Mobile Game Dissections"}}}}}
      sort: { fields: date, order: DESC }
      limit: 3
      skip: 4
    ) {
      nodes {
        ...postData
        modified
      }
    }
  }
`;

export default IndexPage;