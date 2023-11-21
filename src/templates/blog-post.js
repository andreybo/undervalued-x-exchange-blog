import { graphql } from "gatsby";
import React, { useEffect, useState, useRef } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import Comments from "../components/comments";
import Subscribe from "../components/subscribe";
import Trends from "../components/trends";
import Categories from "../components/categories";
import Related from "../components/related";
import Ads from "../components/ads";
import Moment from 'moment';

import parse from 'html-react-parser';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default function BlogPost({ data }) {
  const post = data.wpPost
  const postDate = post.modified ? post.modified : post.date
  const [open, setOpen] = useState(false);

  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const onOpenModal = (src) => {
    setOpen(true);
    return setImageSrc(src);
  };
  const onCloseModal = () => setOpen(false);
  const currentDomain = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://www.blog.udonis.co';

  const transformedContent = parse(post.content, {
    replace: domNode => {
      if (domNode.name && domNode.name === 'img') {
        const w = domNode.attribs && domNode.attribs.width;
        const h = domNode.attribs && domNode.attribs.height;
        const attr = w && h ? `&w=${w}&h=${h}` : '';
        const src = currentDomain +"/.netlify/images?url=" + domNode.attribs.src;
        
        return (
          <div>
            <img
              src={src + attr}
              alt={domNode.attribs.altText || data.wpPost.title}
              onClick={() => onOpenModal(src, domNode.attribs.src)}
              width={w}
              height={h}
              style={{ cursor: 'pointer'}}
            />
          </div>
        );
      }
    }
  });

  

  const [height, setHeight] = useState('auto');
  const imageRef = useRef(null);

  useEffect(() => {
      const element = imageRef.current;
      if(element) {
          setHeight(`${(1/1.91) * element.offsetWidth}px`);
      }
  }, []);

  return (
    <Layout classmain="blogpost">
      <div className="post container">
        <div className="post__top">
          <div className="post__left">
            <div className="post__out">
              <div className="post__head">
                <div className="post__head--image-top" style={{height: height}} ref={imageRef}>
                  <GatsbyImage
                    image={post.featuredImage ==null ? null : post.featuredImage.node.localFile.childImageSharp.gatsbyImageData}
                    alt={post.title}
                    objectFit='cover'
                  />
                </div>
                <div className="p60">
                  <h1 className="post__head--title">{post.title}</h1>
                  <div className="news__tag-container">
                    <p className="post__head--author">
                      by <a href={"/authors/" + post.author.node.slug}><b>{post.author ? post.author.node.name : 'Udonis'}</b></a>,&nbsp; 
                      <time dateTime={postDate}>{Moment(postDate).format('MMMM D, YYYY')}</time>
                    </p>
                    {post.tags.nodes.map((tag, index) => (
                      <div key={index}>
                        <a className="news__tag" href={tag.uri}>
                          #{tag.name.replace(/ /g,"")}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="post__content p60">
                <div
                  className="blog-post-content"
                >
                  {transformedContent}
                </div>
              </div>
            </div>
              <Subscribe buttonId="ud-postform"/>
              <div className="post__about">
                <div className="post__grid-bottom p60">
                  <div className="left">
                    <h3>
                      About Udonis
                    </h3>
                    <p>
                      Udonis is an independent full-service mobile marketing agency that acquired more than 300,000,000 users for mobile games since 2018.
                      <a href="https://www.udonis.co/" className="main_cta main_cta--u">
                          <span>Visit udonis.co</span>
                      </a>
                    </p>
                  </div>
                  <div className="right fixright">
                      <img className="imgsvg imgu" src="/svg/short.svg" alt="Udonis" width="150" height="164"/>
                  </div>
                </div>
              </div>
          </div>
          <div className="post__right">
              <Trends/>
              <div className="maxww">
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

          <div className="post__comments">
                <h3>
                  Comments
                </h3>
                <Comments slug={post.slug} title={post.title} id={post.id}/>
          </div>
        </div>
      </div>
        <Modal open={open} onClose={onCloseModal} center>
          <img src={imageSrc} alt={imageAlt} />
        </Modal>
    </Layout>
  )
}

export const Head = ({data}) => (
  <Seo title={data.wpPost.title} seo={data.wpPost.seo} author={data.wpPost.author} dateModified={data.wpPost.seo.opengraphModifiedTime} datePublished={data.wpPost.seo.opengraphPublishedTime} category={data.wpPost.categories.nodes.slice(-1)[0].name}/>
)

export const query = graphql`
  query($slug: String) {
    wpPost(slug: { ne: "", eq: $slug }) {
      content
      id
      author{
        node{
          name
          slug
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
        opengraphModifiedTime
        opengraphPublishedTime
        opengraphImage {
          sourceUrl
        }
      }
      tags{
        nodes{
          name
          uri
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
              uri
            }
          }
          categories{
            nodes{
              name
              slug
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