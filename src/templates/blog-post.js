import { graphql } from "gatsby";
import React, { useState, useEffect } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Comments from "../components/comments";
import Subscribe from "../components/subscribe";
import Trends from "../components/trends";
import Categories from "../components/categories";
import Blur from "../components/blur";
import Related from "../components/related";
import Ads from "../components/ads";
import Moment from 'moment';


export default function BlogPost({ data }) {
  const post = data.wpPost
  const postDate = post.modified ? post.modified : post.date

  return (
    <Layout>
      <Seo title={post.title} seo={post.seo} />
      <Blur/>
      <div className="post post__container container">
        <div className="post__row row">
          <div className="post__col post__col--left col-md-7 col-12">
            <div className="post__out">
              <div className="post__head">
                  <GatsbyImage
                    image={post.featuredImage ==null ? null : post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                    alt={post.title}
                    objectFit='cover'
                  />
                <h1 className="post__head--title">{post.title}</h1>
                <p className="post__head--author">
                  by <b>{post.author ? post.author.node.name : 'Udonis'}</b>,&nbsp; 
                  <time dateTime={postDate}>{Moment(postDate).format('MMMM D, YYYY')}</time>
                </p>
              </div>
              <div className="post__content">
                <div
                  className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
              </div>
              <div className="post__border post__border--first emptytag">
                <StaticImage
                  alt='hot'
                  objectFit='contain'
                  className='post__border--image'
                  src='../images/down.png'
                />
              </div>
            </div>
              <div className="post__about">
                <div className="post__border post__border--second">
                  <StaticImage
                    alt='hot'
                    objectFit='contain'
                    className='post__border--image'
                    src='../images/up.png'
                  />
                </div>
                <h3>
                  About Udonis
                </h3>
                <p>
                  Udonis is an independent full-service mobile marketing agency that acquired more than 200,000,000 users for mobile games since 2018. Visit
                  <a href="https://www.udonis.co/" className="post-abouta">
                      udonis.co
                  </a>
                </p>
              </div>
              <StaticImage
                alt='hot'
                objectFit='contain'
                className='post__hot--image'
                src='../images/icons/Icons_0000s_0021_03.png'
              />
              <Subscribe buttonId="ud-postform"/>
              <div className="post__related">
                <div className="hp__row row">
                  <Related posts={post.related_posts} title={post.title} limit={4} classmain="col-md-6 col-12 gobottom" layoutHorizontal={true} titleh3={true}/>
                </div>
              </div>
              <div className="post__comments">
                <h3>
                  Comments
                </h3>
                <Comments slug={post.slug} title={post.title} id={post.id}/>
              </div>
              
          </div>
          <div className="col-md-5 col-12 postLeft">
            <div className="gap-container">
              <Trends/>
              <div className="postLeft__subscribe">
                <Subscribe buttonId="ud-sidebarform"/>
              </div>
              <Ads/>
              <Related posts={post.related_posts} title={post.title} limit={2} classmain="postLeft__related gobottom" layoutHorizontal={true} titleh3={false}/>
              <Categories/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    wpPost(slug: { ne: "", eq: $slug }) {
      content
      id
      author{
        node{
          name
        }
      }
      title
      categories{
        nodes{
          name
          slug
        }
      }
      date
      modified
      slug
      excerpt
      seo {
        metaDesc
        metaKeywords
        title
        opengraphImage {
          sourceUrl
        }
      }
      tags{
        nodes{
          name
        }
      }
      uri
      featuredImage {
        node{
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
            }
          }
        }
      }
      related_posts {
        nodes {
          title
          uri
          featuredImage {
            node{
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                }
              }
            }
          }
          tags{
            nodes{
              name
            }
          }
          excerpt
          seo{
            title
            metaDesc
          }
        }
      }
    }
  }
`