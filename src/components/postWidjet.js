import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function FAQ({ postData }) {

  return (
    <Link to={postData.uri} className="postWidjet__link">
      <div className="postWidjet">
        <div className="postWidjet__text">
          <h3 className="postWidjet__title">{postData.title}</h3>
          <div className={postData.tags && postData.tags.nodes && postData.tags.nodes.length > 0 ? "postWidjet__tag-container" : "postWidjet__tag-empty"}>
            {postData.tags && postData.tags.nodes && postData.tags.nodes.slice(0, 3).map((tag, index) => (
                <div className="postWidjet__tag" href={tag.uri} key={index}>
                  #{tag.name.replace(/ /g, "")}
                </div>
            ))}
          </div>
        </div>
        <div className="postWidjet__image">
         <img class="imgsvg imgu" src="/svg/short.svg" alt="undervalued-x-exchange" width="150" height="164"/>
        </div>
      </div>
    </Link>
  );
}