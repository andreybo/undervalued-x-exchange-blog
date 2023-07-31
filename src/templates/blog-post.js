import { graphql } from "gatsby";
import React from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import Comments from "../components/comments";
import Subscribe from "../components/subscribe";
import Trends from "../components/trends";
import Categories from "../components/categories";
import ShareButtons from "../components/share-buttons";
import Related from "../components/related";
import Ads from "../components/ads";
import Moment from 'moment';


export default function BlogPost({ data }) {
  const post = data.wpPost
  const postDate = post.modified ? post.modified : post.date
  const url = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <Layout classmain="blogpost">
      <div className="post container">
        <div className="post__top">
          <div className="post__left">
            <div className="post__out">
              <div className="post__head">
                <ShareButtons url={url} title={post.title} description={data.wpPost.seo.metaDesc} />
                <div className="post__head--image-top">
                  <GatsbyImage
                    image={post.featuredImage ==null ? null : post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                    alt={post.title}
                    objectFit='cover'
                  />
                </div>
                <h1 className="post__head--title">{post.title}</h1>
                <div className="trends__tag-container">
                  {post.tags.nodes.map((tag, index) => (
                    <div key={index}>
                      <p className="trends__tag">
                        #{tag.name.replace(/ /g,"")}
                      </p>
                    </div>
                  ))}
                </div>
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
            </div>
              <div className="post__about">
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
              <Subscribe buttonId="ud-postform"/>
              <div className="post__comments">
                <h3>
                  Comments
                </h3>
                <Comments slug={post.slug} title={post.title} id={post.id}/>
              </div>
          </div>
          <div className="post__right">
              <Trends/>
              <div className="maxw">
                <Categories/>
                <Ads/>
                <Related posts={post.relatedPosts} limit={4} classmain="postcard" layoutHorizontal={true} titleh3={true}/>
              </div>
          </div>
        </div>
        
        <div className="post__related">
          <h3 className="related__title">
            Related posts
          </h3>
          <div className="post__related-out">
              <Related posts={post.relatedPosts} limit={4} classmain="postcard" layoutHorizontal={true} titleh3={true}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({data}) => (
  <Seo title={data.wpPost.title} seo={data.wpPost.seo} />
)

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
      relatedPosts {
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
          modified
          seo{
            title
            metaDesc
          }
        }
      }
    }
  }
`