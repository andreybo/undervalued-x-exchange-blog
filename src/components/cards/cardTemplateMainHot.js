import React, { useEffect, useState, useRef } from 'react';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from 'moment';

const CardHot = ({ post, classmain = "hp__col"}) => {
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
            <div 
              className={"news news__layout-hot" + classmain}
            >
              <Link to={post.uri}
                className="news__link"
              ></Link>
              <div className="news-out">
                <div className="news__top news__top--hor">
                  <div className="news__top news__top--hor news__top--image" style={{height: height}} ref={imageRef}>
                      <GatsbyImage
                        alt={post.title}
                        objectFit='cover'
                        image={
                          post.featuredImage == null ? null : post.featuredImage.node.localFile.childImageSharp.gatsbyImageData
                        }
                      />
                  </div>
                  <div
                    className="news__withtag">
                    <div className={post.tags.nodes.length > 0?"news__tag-container":"news__tag-empty"}>
                    {isRecentlyUpdated ? (
                      <time dateTime={post.modified}>{Moment(post.modified).format('MMMM D, YYYY')}</time>
                    ) : (
                      <time dateTime={post.date}>{Moment(post.date).format('MMMM D, YYYY')}</time>
                    )}
                      {post.tags.nodes.slice(0,3).map((tag, index) => (
                        <div key={index}>
                          <a className="news__tag" href={tag.uri}>
                            #{tag.name.replace(/ /g,"")}
                          </a>
                        </div>
                      ))}
                    </div>
                    <h3 className="news__top--title">{post.title}</h3>
                  </div>
                </div>
                <div dangerouslySetInnerHTML = {{ __html: post.excerpt ? post.excerpt : "" }} className="news__padfix">
                </div>
              </div>
            </div>
  );
};

export default CardHot;