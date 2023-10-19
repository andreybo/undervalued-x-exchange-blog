import React, { useEffect, useState, useRef } from 'react';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from 'moment';

const CardImage = ({ post, classmain = "hp__col"}) => {

  const [height, setHeight] = useState('auto');
  const imageRef = useRef(null);

  useEffect(() => {
      const element = imageRef.current;
      if(element) {
          setHeight(`${(1/1.91) * element.offsetWidth}px`);
      }
  }, []);

  const isRecentlyUpdated = post.categories.nodes.some(category => category.name === "Recently updated");
  

  return (
        <div className={classmain}>
            <div 
              className="news__layout-image"
            >
              <Link to={post.uri}
                className="news__link"
              ></Link>
              <div className='news__layout-image--background' style={{height: height}} ref={imageRef}>
                  <GatsbyImage
                    alt={post.title}
                    objectFit='cover'
                    image={
                      post.featuredImage == null ? null : post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                    }
                  />
              </div>
              <div className="news__layout-image--out">
                <div className="news__layout-image--top">
                  <h3 className="news__top--title">{post.title}</h3>
                </div>
                <div className="news__layout-image--hover">
                  <div className='news__date'>
                    {isRecentlyUpdated ? (
                      <time dateTime={post.modified}>{Moment(post.modified).format('MMMM D, YYYY')}</time>
                    ) : (
                      <time dateTime={post.date}>{Moment(post.date).format('MMMM D, YYYY')}</time>
                    )}
                  </div>
                  <div className={post.tags.nodes.length > 0?"news__tag-container":"news__tag-empty"}>
                    {post.tags.nodes.slice(0,3).map((tag, index) => (
                      <div key={index}>
                        <a className="news__tag" href={tag.uri}>
                          #{tag.name.replace(/ /g,"")}
                        </a>
                      </div>
                    ))}
                  </div>
                  <div dangerouslySetInnerHTML = {{ __html: post.excerpt ? post.excerpt : "" }} className="news__layout-image--excerpt"></div>
                </div>
              </div>
            </div>

          </div>
  );
};

export default CardImage;