import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby";

const Trends = () => {
  
  const data = useStaticQuery(graphql`{
  trends: allWpPost(
    filter: {categories: {nodes: {elemMatch: {name: {in: ["Highlighted1", "Highlighted2", "Highlighted3", "Highlighted3-2", "Highlighted4"]}}}}}
    sort: {date: DESC}
  ) {
    nodes {
      id
      title
      tags {
        nodes {
          name
        }
      }
      uri
    }
    totalCount
  }
}`)
const [list, setList] = useState(false) 
const [i, setI] = useState(3) 

const handleLoadMore = () => {
  setList(!list)
}
const max = data.trends.nodes.lenth

  useEffect(() => {
    if(list){
      setI(max)
    }
    else{
      setI(3)
    }
  },[setI,list,max])

  return (
    <div className='trends'>
      <div className="trends__title">
        <h3 className="trends__title--text">Trends for you</h3>
        <span className="trends__title--number">{data.trends.totalCount}</span>
      </div>
      <div className="trends__item-container">
        {data.trends.nodes.slice(0,i).map((post, index) => (
          <div className='trends__item' key={index}>
            <Link
                to={post.uri}
                className="trends__item--link"
              ></Link>
              <h3 className="trends__item--title">{post.title}</h3>
              <div className={post.tags.nodes.length > 0?"trends__tag-container":"trends__tag-empty"}>
                {post.tags.nodes.map((tag, index) => (
                  <div key={index}>
                    <p className="trends__tag">
                      #{tag.name.replace(/ /g,"")}
                    </p>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
        <div className="categories__more">
          <button onClick={handleLoadMore}>
            <svg className={list?'acti':'nn'} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L11.5 11.5L22 1" stroke="white" strokeOpacity="0.19"/>
            </svg>
          </button>
        </div>
    </div>
  );
};

export default Trends;
