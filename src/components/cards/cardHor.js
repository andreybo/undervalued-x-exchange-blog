import React from 'react'
import CardTemplate from "./cardTemplate";

const CardHor = ({ data, classmain = "hp__col", homepage=false}) => {
  const news = data;

  return (
    <>
      {news.nodes.map((post, index) => (
        homepage ? 
          index < 2 ? <CardTemplate post={post} key={index} layoutHorizontal={true} classmain={classmain}/>
          : <CardTemplate post={post} key={index} layoutTitle={true} classmain={classmain}/>
          : <CardTemplate post={post} key={index} layoutHorizontal={true} classmain={classmain}/>
      ))}
    </>
  );
};

export default CardHor;
