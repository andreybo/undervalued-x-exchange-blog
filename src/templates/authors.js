import React from "react";
import Seo from "../components/seo";
import { graphql } from "gatsby";
import Layout from  "../components/layout";

function Authors({
  data: {
    users
  },
}) {
  return (
    <Layout classmain="authors" title="Authors">
      <div className="authors__container container">
        <div className="authors__grid">
          {users.nodes.map((user, index) => (
            <div className="author__about">
              <div className="author__image">
                <img src={"/authors/" + user.slug + ".jpg"} alt={user.name}/>
              </div>
              <div className="author__descr">
                <h1>{user.name}</h1>
                <p>{user.description}</p>
                <a className="learn" href={"/authors/" + user.slug}>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  {
    users: allWpUser(filter: {name: {in: ["Andrea Knezovic", "Mihovil Grguric"]}}) {
      nodes {
        name
        slug
        description
      }
    }
  }
`

export default Authors;

export const Head = () => (
  <Seo
    title="Authors"
  />
)