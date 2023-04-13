import React from "react";
import Card from "../components/cards/cardHor";
import Layout from  "../components/layout";
import { Link } from 'gatsby';
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Blur from "../components/blur";
import Seo from "../components/seo";
import Categories from "../components/categories";
import Subscribe from "../components/subscribe";
import Ads from "../components/ads";
// Components
import { graphql } from "gatsby"
const Category = ({ pageContext, data:{catName, postdata, hotImage} }) => {
  const { cat, currentPage, numPages, uri } = pageContext
  const { totalCount } = postdata
  const catHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } in "${catName.name}"`

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? uri : uri + '/' + (currentPage - 1).toString()
  const nextPage = uri + '/' + (currentPage + 1).toString()
  return (
    <Layout>
      <Seo title={`${catName.name} | Udonis`} metaDesciption={catHeader} />
      <Blur/>
      <div className="category container">
        <div className="category__title-container">
          <p className="category__tag">Category</p>
          <h1 className="category__title">{catName.name}</h1>
        </div>
        <div className="category__row row">
          <div className="col-md-8 col-12">
              <div className="row">
                  <Card data={postdata} layoutHorizontal={true} descr={false} classmain="col-md-6 col-12 gobottom"/>
              </div>
              <ul className="category__np">
                {!isFirst && (
                  <Link to={prevPage} rel="prev" className="prev">
                  <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.14152 15L54 15V11L8.14192 11L16.3516 3.4745L13.6487 0.525879L2.22235 11H2V11.2038L0.040329 13.0002L2 14.7966V15H2.22195L13.6487 25.4745L16.3516 22.5259L8.14152 15Z" fill="white"/>
                  </svg>
                  </Link>
                )}
                {Array.from({ length: numPages > currentPage + 5 ? currentPage + 5 : numPages - currentPage }, (_, i) => (
                  <li
                    key={`pagination-number${i + 1}`}
                    className={`nota${(i === currentPage - 1 && ' activeli') || (i > currentPage + 2 && ' disactiveli') || (i < currentPage - 2 && ' disactiveli') || ''}`}
                  >
                    <Link
                      to={`${i === 0 ? cat : cat + '/' + (i + 1)}`}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}
                {!isLast && numPages > 1 && (
                  <Link to={nextPage} rel="next" className="next">
                  <svg width="54" height="26" viewBox="0 0 54 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M45.8585 15L0 15V11L45.8581 11L37.6484 3.4745L40.3513 0.525879L51.7777 11H52V11.2038L53.9597 13.0002L52 14.7966V15H51.7781L40.3513 25.4745L37.6484 22.5259L45.8585 15Z" fill="white"/>
                  </svg>
                  </Link>
                )}
              </ul>
              <div style={{margin:'30px 0'}}>
                <svg style={{width:'100%'}} width="803" height="18" viewBox="0 0 803 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.37158L26.0313 16.6287L51.0625 1.37158L76.0938 16.6287L101.125 1.37158L126.156 16.6287L151.188 1.37158L176.219 16.6287L201.25 1.37158L226.281 16.6287L251.313 1.37158L276.344 16.6287L301.375 1.37158L326.406 16.6287L351.438 1.37158L376.469 16.6287L401.5 1.37158L426.531 16.6287L451.563 1.37158L476.594 16.6287L501.625 1.37158L526.656 16.6287L551.688 1.37158L576.719 16.6287L601.75 1.37158L626.781 16.6287L651.813 1.37158L676.844 16.6287L701.875 1.37158L726.906 16.6287L751.938 1.37158L776.969 16.6287L802 1.37158" stroke="#E7F0F8" stroke-width="2"/>
                </svg>
              </div>
                <StaticImage
                  alt='hot'
                  objectFit='contain'
                  className='post__hot--image'
                  style={{marginTop:'10px'}}
                  src='../images/icons/Icons_0000s_0021_03.png'
                />
                <div style={{padding:'0 15px'}}>
                <Subscribe buttonId="ud-categoryform"/>
                </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="gap-container">
              <Categories/>
              <Ads/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default Category

export const pageQuery = graphql`query ($cat: String, $skip: Int!, $limit: Int!) {
  postdata: allWpPost(
    limit: $limit
    skip: $skip
    sort: {date: DESC}
    filter: {categories: {nodes: {elemMatch: {uri: {eq: $cat}}}}}
  ) {
    totalCount
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
      seo {
        title
        metaDesc
      }
    }
  }
  catName: wpCategory(uri: {eq: $cat}) {
    name
  }
}`