import React from 'react'
import CardTemplate from "./cardTemplate";

const CardVert = ({ data, classmain = "hp__col"}) => {
  const news = data;

  return (
    <>
      {news.nodes.map((post, index) => (
        <CardTemplate post={post} key={index} layoutVertical={true} classmain={classmain}/>
      ))}
    </>
  );
};

export default CardVert;
