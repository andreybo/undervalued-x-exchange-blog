import React from "react"
import CardMain from "../components/cards/cardTemplateMain";
import CardLong from "../components/cards/cardTemplateMainLong";
import Layout from  "../components/layout";
import { Link } from 'gatsby'
import Seo from "../components/seo";
import Subscribe from "../components/subscribe";
// Components
import { graphql } from "gatsby"


const TagList = ({ pageContext, data:{postdata} }) => {
  const { tag, currentPage, numPages,  name, numPosts } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? tag : tag + "/" + (currentPage - 1).toString()
  const nextPage = tag + "/" + (currentPage + 1).toString()
  return (
      <Layout>
      <div className="hp-yellow">
          <div className="container mt0">
                <CardLong post={postdata.nodes[0]} classmain="card-long"/>
          </div>
      </div>
      <div className="category__container container">
            <div className="row grid2">
                {postdata.nodes.map((post, index) => (
                  index !== 0 && <CardMain post={post} classmain="newsout" key={index}/>
                ))}
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
                    <Link to={`${pageIndex === 1 ? tag : tag + "/" + pageIndex}`}>
                      {pageIndex}
                    </Link>
                  </li>
                );
              }
              return null; // Return null for indices that do not correspond to valid pages
            })}
            {!isLast && numPages > 1  && (
              <Link to={nextPage} rel="next" className="next">
                <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M45.8585 15L0 15V11L45.8581 11L37.6484 3.4745L40.3513 0.525879L51.7777 11H52V11.2038L53.9597 13.0002L52 14.7966V15H51.7781L40.3513 25.4745L37.6484 22.5259L45.8585 15Z" fill="#D89C1E"/>
                </svg>
              </Link>
            )}
            </ul>
      </div>
      <div className="hp-yellow2">
        <div className="home_sub">
          <Subscribe/>
        </div>
      </div>
    </Layout>
  )
}
export default TagList

export const query = graphql`
  query ($id: [String], $skip: Int!, $limit: Int!) {
  postdata: allWpPost(
    filter: { tags: { nodes: { elemMatch: { id: { in: $id } } } } }
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
          uri
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      title
      uri
    }
  }
}`;


export const Head = ({ pageContext }) => (
  <Seo title={`${pageContext.name} ${pageContext.currentPage === 1 ? "" : `| Page ${pageContext.currentPage} `}| Udonis`} metaDesciption={`${pageContext.numPosts} post${
    pageContext.numPosts === 1 ? "" : "s"
  } in "${pageContext.name}"`} />
)