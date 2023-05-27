import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import Card from "../components/cards/cardHor";
import Layout from  "../components/layout";
import { Link } from 'gatsby'
import Seo from "../components/seo";
import Categories from "../components/categories";
import Subscribe from "../components/subscribe";
import Ads from "../components/ads";
// Components
import { graphql } from "gatsby"
const BlogList = ({ pageContext, data:{postdata, hotImage} }) => {
  const { currentPage, allNumPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === allNumPages
  const prevPage = currentPage - 1 === 1 ? '/latest/' : '/latest/' + (currentPage - 1).toString()
  const nextPage = '/latest/' + (currentPage + 1).toString()
  return (
    <Layout>
      <div className="category__container">
        <div className="category__title-container">
          <p className="category__tag">Category</p>
          <h1 className="category__title">Latest Posts</h1>
        </div>
        <div className="category__top">
          <div className="category__left">
            <div className="category__main">
              <Card data={postdata} layoutHorizontal={true} descr={false} classmain="postcard"/>
            </div>
            <ul className="category__np">
            {!isFirst && (
              <Link to={prevPage} rel="prev" className="prev">
                <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.14152 15L54 15V11L8.14192 11L16.3516 3.4745L13.6487 0.525879L2.22235 11H2V11.2038L0.040329 13.0002L2 14.7966V15H2.22195L13.6487 25.4745L16.3516 22.5259L8.14152 15Z" fill="white"/>
                </svg>
              </Link>
            )}
            {Array.from({ length: allNumPages > currentPage + 10 ? currentPage + 10 : allNumPages - currentPage }, (_, i) => (
              <li
                key={`pagination-number${currentPage + 1}`}
                className={`nota${(i === currentPage - 1 && ' activeli') || (i > currentPage + 2 && ' disactiveli') || (i < currentPage - 2 && ' disactiveli') || ''}`}
              >
                <Link
                  to={`${i === 0 ? '/latest/' : '/latest/' + (i + 1)}`}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
            {!isLast && allNumPages > 1  && (
              <Link to={nextPage} rel="next" className="next">
                <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M45.8585 15L0 15V11L45.8581 11L37.6484 3.4745L40.3513 0.525879L51.7777 11H52V11.2038L53.9597 13.0002L52 14.7966V15H51.7781L40.3513 25.4745L37.6484 22.5259L45.8585 15Z" fill="white"/>
                </svg>
              </Link>
            )}
            </ul>
              <Subscribe/>
          </div>
          <div className="category__right">
            <div className="maxw">
              <Categories/>
              <Ads/>
            </div>
          </div>
          </div>
      </div>
    </Layout>
  )
}
export default BlogList


export const Head = ({data}) => (
  <Seo title='Latest Posts | Udonis' />
)

export const indexPageQuery = graphql`query ($skip: Int!, $limit: Int!) {
  postdata: allWpPost(limit: $limit, skip: $skip, sort: {date: DESC}) {
    nodes {
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
  }
}`;