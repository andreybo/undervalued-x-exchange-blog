import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby";

const Categories = () => {
  

  const data = useStaticQuery(graphql`{
  allWpCategory(
    sort: {count: DESC}
    filter: {name: {nin: ["Highlighted1", "Highlighted3", "Highlighted2", "Highlighted4", "Highlighted3-2"]}, count: {gte: 1}}
  ) {
    nodes {
      name
      uri
      count
    }
  }
}`)

const [list, setList] = useState(false) 
const [i, setI] = useState(5) 

const handleLoadMore = () => {
  setList(!list)
}
const max = data.allWpCategory.nodes.lenth

  useEffect(() => {
    if(list){
      setI(max)
    }
    else{
      setI(5)
    }
  },[setI,list,max])

  return (
    <div className='categories'>
      <h3 className="categories__title">
        Categories
      </h3>
      <div className="categories__item-container">
        {data.allWpCategory.nodes.slice(0,i).map((cat, index) => (
          <div className='categories__item' key={index}>
              <p className="categories__item--title">{cat.name}</p>
              <Link
                  to={cat.uri}
                  className="categories__item--link"
                ></Link>
          </div>
        ))}
      </div>
        <div className="categories__more">
          <button onClick={handleLoadMore}>
            <svg className={list?'acti':'nn'} width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.939453 3.06077L3.06077 0.939453L11.5001 9.37879L19.9395 0.939453L22.0608 3.06077L11.5001 13.6214L0.939453 3.06077Z" fill="#9AB8E5"/>
            </svg>
          </button>
        </div>
    </div>
  );
};

export default Categories;
