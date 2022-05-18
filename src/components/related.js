import React from "react";
import CardTemplate from "./cards/cardTemplate";

const RelatedArticles = ({ posts, classmain = "hp__col",  layoutHorizontal=false, layoutVertical=false, layoutTitle=false, titleh3=false }) => {

  return (
    <>
      {titleh3 &&
      <h3 className="related__title">
        Related posts
      </h3>
      }
      
      {posts.nodes.map((post, index) => (
        <CardTemplate post={post} key={index} layoutHorizontal={true} classmain={classmain}/>
      ))}
    </>
  );
};

export default RelatedArticles