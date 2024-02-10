import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby";

const Categories = () => {
  

  const data = useStaticQuery(graphql`{
  allWpCategory(
    sort: {count: DESC}
    filter: {name: {nin: ["Highlighted1", "Highlighted3", "Highlighted2", "Highlighted4", "Highlighted3-2", "Uncategorized", "News", "Analytics", "Google Ads", "TikTok Updates", "Gaming Talks"]}, count: {gte: 1}}
  ) {
    nodes {
      name
      uri
      count
    }
  }
}`)
const max = data.allWpCategory.nodes.lenth

  return (
    <div className='categories'>
      <h3 className="categories__title">
        Categories
      </h3>
      <div className="categories__item-container">
        {data.allWpCategory.nodes.slice(0,max).map((cat, index) => (
          <div className='categories__item' key={index}>
              <p className="categories__item--title">{cat.name}</p>
              <Link
                  to={cat.uri}
                  className="categories__item--link"
                ></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
