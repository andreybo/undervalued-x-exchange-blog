import React from "react";
import CardTemplate from "./cards/cardTemplateMain";

const RelatedArticles = ({ posts, classmain = "hp__col",  layoutHorizontal=false, layoutVertical=false, layoutTitle=false, titleh3=false }) => {

  return (
    <>
      {posts.nodes.map((post, index) => (
        <CardTemplate post={post} key={index} layoutHorizontal={true} classmain={classmain}/>
      ))}
    </>
  );
};

export default RelatedArticles