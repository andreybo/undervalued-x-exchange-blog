import React, { useEffect, useState, useRef } from 'react';
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from 'moment';

const CardMain = ({ post, classmain = "hp__col"}) => {

  const [height, setHeight] = useState('auto');
  const imageRef = useRef(null);

  useEffect(() => {
      const element = imageRef.current;
      if(element) {
          setHeight(`${(1/1.91) * element.offsetWidth}px`);
      }
  }, []);


  return (
        <div className={classmain}>
            <div 
              className="news news__layout-hor"
            >
              <Link to={post.uri}
                className="news__link"
              ></Link>
              <div className="news-out">
                <div
                className="news__top news__top--hor">
                  <div className="news__top--image" style={{height: height}} ref={imageRef}>
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
                    <h3 className="news__top--title">{post.title}</h3>
                    <div className='news__date'>
                      <time dateTime={post.modified}>{Moment(post.modified).format('MMMM D, YYYY')}</time>
                    </div>
                  </div>
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
              </div>
              <div className="news__hover">
                <div dangerouslySetInnerHTML = {{ __html: post.seo ? post.seo.metaDesc : post.excerpt }} className="news__padfix">
                </div>
              </div>
            </div>

          </div>
  );
};

export default CardMain;