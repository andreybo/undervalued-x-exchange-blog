import { graphql } from "gatsby";
import React, { useEffect, useState, useRef } from 'react';
import Layout from "../components/layout";
import Seo from "../components/seo";
import CardMain from "../components/cards/cardTemplateMain";


export default function Author({ data }) {
  const author = data.wpUser

  return (
    <Layout classmain="author" title="Author">
      <div className="author__container container">
        <div className="author__about">
          <div className="author__image">
            <img src={"/authors/" + author.slug + ".jpg"} alt={author.name}/>
          </div>
          <div className="author__descr">
            <h1>{author.name}</h1>
            <p>{author.description}</p>
          </div>
        </div>
        <h3 className="h3">Latest posts</h3>
        <div className="row grid2">
          {author.posts.nodes.slice(0, 6).map((post, index) => (
              <CardMain post={post} classmain="newsout" key={index}/>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const Head = ({data}) => (
  <Seo
    title={data.wpUser.name}
    metaDesciption={data.wpUser.description}
  />
)

export const query = graphql`
  query($slug: String) {
    wpUser(slug: { ne: "", eq: $slug }) {
      name
      slug
      description
      posts {
        nodes {
          title
          uri
          featuredImage {
            node{
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
                }
              }
            }
          }
          tags{
            nodes{
              name
              uri
            }
          }
          categories{
            nodes{
              name
              slug
            }
          }
          excerpt
          modified
          seo{
            title
            metaDesc
          }
        }
      }
    }
  }
`