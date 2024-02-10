import React from "react"
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
          uri
        }
      }
      uri
    }
    totalCount
  }
}`)

  return (
    <div className='trends'>
      <div className="trends__title">
        <h3 className="trends__title--text">Trends for you</h3>
        <span className="trends__title--number">{data.trends.totalCount}</span>
      </div>
      <div className="trends__item-container">
        {data.trends.nodes.slice(0,3).map((post, index) => (
          <div className='trends__item' key={index}>
            <Link
                to={post.uri}
                className="trends__item--link"
              ></Link>
              <h3 className="trends__item--title">{post.title}</h3>
              <div className={post.tags.nodes.length > 0?"news__tag-container":"news__tag-empty"}>
                {post.tags.nodes.map((tag, index) => (
                  <div key={index}>
                    <a className="news__tag" href={tag.uri}>
                      #{tag.name.replace(/ /g,"")}
                    </a>
                  </div>
                ))}
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
