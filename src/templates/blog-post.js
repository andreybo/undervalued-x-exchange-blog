import { graphql } from "gatsby";
import React, { useEffect, useState, useRef } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Comments from "../components/comments";
import Subscribe from "../components/subscribe";
import Trends from "../components/trends";
import Faq from "../components/faq";
import Categories from "../components/categories";
import Related from "../components/related";
import Moment from 'moment';
import "../styles/subscribe.css";

import parse from 'html-react-parser';
import 'react-responsive-modal/styles.css';


export default function BlogPost({ data }) {
  const post = data.wpPost
  const postDate = post.modified ? post.modified : post.date

  const h2Texts = [];
  
  const transformedContent = parse(post.content, {
    replace: domNode => {
      switch (domNode.name) {
        case 'img':
          // Handle lazy loading images
          if (domNode.attribs) {
            const attrs = { ...domNode.attribs };
            
            // If image has data-src but no src, copy data-src to src for immediate loading
            if (attrs['data-src'] && !attrs.src) {
              attrs.src = attrs['data-src'];
            }
            
            // Ensure lazyload class is present for lazysizes
            if (attrs['data-src']) {
              attrs.className = attrs.className ? `${attrs.className} lazyload` : 'lazyload';
            }
            
            return <img {...attrs} />;
          }
          break;
  
        case 'h2':
          let innerHTML = '';
          if (domNode.children) {
            domNode.children.forEach(child => {
              if (child.type === 'text') {
                innerHTML += child.data;
              } else if (child.type === 'tag') {
                innerHTML += `<${child.name}>${child.children.map(c => c.data).join('')}</${child.name}>`;
              }
            });
          }
          const id = `h2-${h2Texts.length}`;
          h2Texts.push({ id, innerHTML });
        
          return (
            <h2 id={id} dangerouslySetInnerHTML={{ __html: innerHTML }}>
            </h2>
          );

        default:
          // If you want to handle other tags differently, add more cases here.
          break;
      }
    }
  });

  const h2Links = h2Texts.map(({ id, innerHTML, ariaLabel }) => (
    <li key={id} className="tol__li">
      <a href={`#${id}`} aria-label={ariaLabel || "Table of contents"} dangerouslySetInnerHTML={{ __html: innerHTML }}></a>
    </li>
  ));

  

  const [height, setHeight] = useState('400px');
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
                      by <a href={"/authors/" + post.author.node.slug}><b>{post.author ? post.author.node.name : 'undervalued-x-exchange'}</b></a>,&nbsp; 
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
                <div className="toc">
                  <h2>Table of contents</h2>
                  <ul className="toc__ul">
                    {h2Links}
                  </ul>
                </div>
                <div
                  className="blog-post-content"
                >
                  {transformedContent}
                </div>
              </div>
            </div>
              <Subscribe buttonId="ud-postform"/>
              <div className="about-container">
                <div className="about-content">
                  <h3 className="about-title">
                    Ready to Get Started?
                  </h3>
                  <p className="about-description">
                    Connect with motivated sellers and start building your real estate portfolio today.
                  </p>
                  <a href="https://www.undervalued-x-exchange.co/" className="about-button">
                    <span>Get Your Leads Now</span>
                  </a>
                </div>
              </div>
          </div>
          <div className="post__right">
              <Trends/>
              <div className="maxww">
                <Categories/>
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

          <div className="post__comments hidden">
                <h3>
                  Comments
                </h3>
                <Comments slug={post.slug} title={post.title} id={post.id}/>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({ data }) => {
  return (
    <Seo 
      title={data.wpPost.title} 
      seo={data.wpPost.seo} 
      author={data.wpPost.author} 
      dateModified={data.wpPost.seo.opengraphModifiedTime} 
      datePublished={data.wpPost.seo.opengraphPublishedTime} 
      category={data.wpPost.categories.nodes.slice(-1)[0].name} 
    />
  );
};


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