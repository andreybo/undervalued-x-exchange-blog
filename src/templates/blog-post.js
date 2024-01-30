import { graphql } from "gatsby";
import React, { useEffect, useState, useRef } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import Comments from "../components/comments";
import Subscribe from "../components/subscribe";
import Trends from "../components/trends";
import FAQ from "../components/faq";
import Categories from "../components/categories";
import Related from "../components/related";
import Ads from "../components/ads";
import Promo from "../components/promo";
import Moment from 'moment';

import parse from 'html-react-parser';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


export default function BlogPost({ data }) {
  const post = data.wpPost
  const postDate = post.modified ? post.modified : post.date
  const [open, setOpen] = useState(false);

  const faqData = [];
  for (let i = 1; i <= 10; i++) {
    const questionKey = `question${i}`;
    const answerKey = `answer${i}`;

    // Check if both question and answer are non-empty before adding to faqData
    if (post.faq[questionKey] && post.faq[answerKey]) {
      faqData.push({
        question: post.faq[questionKey],
        answer: post.faq[answerKey],
      });
    }
  }

  const [imageSrc, setImageSrc] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const onOpenModal = (src) => {
    setOpen(true);
    return setImageSrc(src);
  };
  const onCloseModal = () => setOpen(false);
  const currentDomain = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://www.blog.udonis.co';
  const h2Texts = [];
  
  const transformedContent = parse(post.content, {
    replace: domNode => {
      if (domNode.children && domNode.children.some(child => child.type === 'text' && child.data.includes('<--PROMO-->'))) {
        return <Promo />;
      }

      switch (domNode.name) {
  
          case 'h2':
            let innerHTML = '';
            if (domNode.children) {
              domNode.children.forEach(child => {
                if (child.type === 'text') {
                  innerHTML += child.data;
                } else if (child.type === 'tag') {
                  innerHTML += `<${child.name}>${child.children.map(c => c.data).join('')}</${child.name}>`;
                }
                // Add more conditions if there are other types of children you expect
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

  const h2Links = h2Texts.map(({ id, innerHTML }) => (
    <li key={id} className="tol__li"><a href={`#${id}`} dangerouslySetInnerHTML={{ __html: innerHTML }}></a></li>
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
              {faqData.length > 0 ? <FAQ faqData={faqData}/> : ''}
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

export const Head = ({ data }) => {
  const faqData = [];
  for (let i = 1; i <= 10; i++) {
    const questionKey = `question${i}`;
    const answerKey = `answer${i}`;

    // Check if both question and answer are non-empty before adding to faqData
    if (data.wpPost.faq[questionKey] && data.wpPost.faq[answerKey]) {
      faqData.push({
        question: data.wpPost.faq[questionKey],
        answer: data.wpPost.faq[answerKey],
      });
    }
  }

  return (
    <Seo 
      title={data.wpPost.title} 
      seo={data.wpPost.seo} 
      author={data.wpPost.author} 
      dateModified={data.wpPost.seo.opengraphModifiedTime} 
      datePublished={data.wpPost.seo.opengraphPublishedTime} 
      category={data.wpPost.categories.nodes.slice(-1)[0].name} 
      faqData={faqData} 
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
      faq{
        question1
        answer1
        question2
        answer2
        question3
        answer3
        question4
        answer4
        question5
        answer5
        question6
        answer6
        question7
        answer7
        question8
        answer8
        question9
        answer9
        question10
        answer10
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