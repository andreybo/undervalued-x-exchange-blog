import React from 'react'
import CardTemplateMain from "./cardTemplateMain";

const CardHor = ({ data, classmain = "hp__col"}) => {
  const news = data;

  return (
    <>
      {news.nodes.map((post, index) => (
          index < 2 ? <CardTemplateMain post={post} key={index} classmain={classmain}/>
          : <CardTemplateMain post={post} key={index} classmain={classmain}/>
      ))}
    </>
  );
};

export default CardHor;
