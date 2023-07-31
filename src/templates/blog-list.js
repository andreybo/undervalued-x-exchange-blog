import React from "react"
import Card from "../components/cards/cardHor";
import Layout from  "../components/layout";
import { Link } from 'gatsby'
import Seo from "../components/seo";
import Categories from "../components/categories";
import Subscribe from "../components/subscribe";
import Ads from "../components/ads";
// Components
import { graphql } from "gatsby"
const BlogList = ({ pageContext, data:{postdata} }) => {
  const { cat, currentPage, numPages,  name, numPosts } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? cat : cat + "/" + (currentPage - 1).toString()
  const nextPage = cat + "/" + (currentPage + 1).toString()
  return (
    <Layout>
      <div className="category__container container">
        <div className="category__title-container">
          <p className="category__tag">Category</p>
          <h1 className="category__title">{name}</h1>
        </div>
        <div className="category__top">
          <div className="category__left">
            <div className="category__main">
              <Card data={postdata} layoutHorizontal={true} descr={false} classmain="postcard"/>
            </div>
            <ul className="category__np" style={{display: numPages > 1 ? 'flex' : 'none'}}>
            {!isFirst && (
              <Link to={prevPage} rel="prev" className="prev">
                <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.14152 15L54 15V11L8.14192 11L16.3516 3.4745L13.6487 0.525879L2.22235 11H2V11.2038L0.040329 13.0002L2 14.7966V15H2.22195L13.6487 25.4745L16.3516 22.5259L8.14152 15Z" fill="#D89C1E"/>
                </svg>
              </Link>
            )}
            {Array.from({ length: 11 }, (_, i) => {
              const pageIndex = currentPage > 5 ? currentPage + i - 5 : i + 1;
              const classes = ['nota'];
              if (pageIndex === currentPage) {
                classes.push('activeli');
              } else if (pageIndex > currentPage + 2 || pageIndex < currentPage - 2) {
                classes.push('disactiveli');
              }
              if (pageIndex <= numPages) {
                return (
                  <li key={`pagination-number-${pageIndex}`} className={classes.join(' ')}>
                    <Link to={`${pageIndex === 1 ? cat : cat + "/" + pageIndex}`}>
                      {pageIndex}
                    </Link>
                  </li>
                );
              }
            })}
            {!isLast && numPages > 1  && (
              <Link to={nextPage} rel="next" className="next">
                <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M45.8585 15L0 15V11L45.8581 11L37.6484 3.4745L40.3513 0.525879L51.7777 11H52V11.2038L53.9597 13.0002L52 14.7966V15H51.7781L40.3513 25.4745L37.6484 22.5259L45.8585 15Z" fill="#D89C1E"/>
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

export const query = graphql`
  query ($id: [String], $skip: Int!, $limit: Int!) {
  postdata: allWpPost(
    filter: { categories: { nodes: { elemMatch: { id: { in: $id } } } } }
    limit: $limit,
    skip: $skip,
    sort: {date: DESC})
    {
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


export const Head = ({ pageContext }) => (
  <Seo title={`${pageContext.name} ${pageContext.currentPage === 1 ? "" : `| Page ${pageContext.currentPage} `}| Udonis`} metaDesciption={`${pageContext.numPosts} post${
    pageContext.numPosts === 1 ? "" : "s"
  } in "${pageContext.name}"`} />
)