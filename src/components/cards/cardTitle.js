import React from 'react'
import CardTemplate from "./cardTemplate";

const CardTitle = ({ data, classmain = "hp__col"}) => {
  const news = data;

  return (
    <>
      {news.nodes.map((post, index) => (
        <CardTemplate post={post} key={index} layoutTitle={true} classmain={classmain}/>
      ))}
    </>
  );
};

export default CardTitle;
