import React from 'react'
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Moment from 'moment';

const CardMain = ({ post, classmain = "hp__col"}) => {

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
                  <div className="news__top--image">
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
                      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.549 2.1681H11.7647V1.3841C11.7647 0.952898 11.4118 0.600098 10.9804 0.600098C10.549 0.600098 10.1961 0.952898 10.1961 1.3841V2.1681H3.92157V1.3841C3.92157 0.952898 3.56863 0.600098 3.13725 0.600098C2.70588 0.600098 2.35294 0.952898 2.35294 1.3841V2.1681H1.56863C0.698039 2.1681 0.00784313 2.8737 0.00784313 3.7361L0 14.7121C0 15.128 0.165266 15.5268 0.45944 15.8208C0.753615 16.1149 1.1526 16.2801 1.56863 16.2801H12.549C13.4118 16.2801 14.1176 15.5745 14.1176 14.7121V3.7361C14.1176 2.8737 13.4118 2.1681 12.549 2.1681ZM12.549 13.9281C12.549 14.3593 12.1961 14.7121 11.7647 14.7121H2.35294C1.92157 14.7121 1.56863 14.3593 1.56863 13.9281V6.0881H12.549V13.9281ZM3.13725 7.6561H4.70588V9.2241H3.13725V7.6561ZM6.27451 7.6561H7.84314V9.2241H6.27451V7.6561ZM9.41177 7.6561H10.9804V9.2241H9.41177V7.6561Z" fill="#171F26"/>
                      </svg>
                      <time dateTime={post.modified}>{Moment(post.modified).format('MMMM D, YYYY')}</time>
                    </div>
                  </div>
                </div>
                    <div className={post.tags.nodes.length > 0?"news__tag-container":"news__tag-empty"}>
                      {post.tags.nodes.slice(0,3).map((tag, index) => (
                        <div key={index}>
                          <p className="news__tag">
                            #{tag.name.replace(/ /g,"")}
                          </p>
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