const _ = require("lodash")
const fetch = require('node-fetch');
const redirects = require("./redirects.json");

exports.createPages = async function ({ actions, graphql }) {
  const { createRedirect } = actions

    const { data } = await graphql(`
      query {
        posts: allWpPost(filter: {status: {eq: "publish"}}) {
          edges {
            node {
                slug
                id
                guid
                categories{
                  nodes{
                    name
                    slug
                  }
                }
                uri
                content
            }
          }
          totalCount
        }
        catGroup: allWpCategory {
          group(field: {uri: SELECT}) {
            fieldValue
            sum(field: {count: SELECT})
          }
        }
      }
    `)

    // Create posts
    data.posts.edges.forEach(edge => {
      const postUri = edge.node.uri
      const postSlug = edge.node.slug
      const id = edge.node.id
      actions.createPage({
        path: postUri,
        id: id,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: { slug: postSlug },
      })
    })

    // Make category pages
      data.catGroup.group.forEach(cat => {
        const catSlug = cat.fieldValue

        const posts = cat.sum
        const postsPerPage = 12
        const numPages = Math.ceil(posts / postsPerPage)
        Array.from({ length: numPages > 1 ? numPages : 1 }).forEach((_, i) => {
          actions.createPage({
            path: i === 0 ? `${catSlug}` : `${catSlug}/${i + 1}`,
            component: require.resolve(`./src/templates/category-template.js`),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
              cat: catSlug,
              uri: catSlug + `/${i}`
            },
          })
        })
      })

    // Make latest page
    // Set the number of posts per page
    const POSTS_PER_PAGE = 12;

    // Calculate the number of pages needed
    const postsCount = data.posts.totalCount;
    const numPages = Math.ceil(postsCount / POSTS_PER_PAGE);

    // Create a page for each group of posts
    if (actions && actions.createPage) {
      for (let pageNumber = 0; pageNumber < numPages; pageNumber++) {
        const path = pageNumber === 0 ? `/latest` : `/latest/${pageNumber + 1}`;

        actions.createPage({
          path,
          component: require.resolve(`./src/templates/blog-list.js`),
          context: {
            limit: POSTS_PER_PAGE,
            skip: pageNumber * POSTS_PER_PAGE,
            numPages,
            currentPage: pageNumber + 1,
          },
        });
      }
    }

      // Make homepage
      actions.createPage({
        path: '/',
        id: 'homepage',
        component: require.resolve(`./src/templates/homepage.js`),
        context: { slug: '/' },
      })

      actions.createPage({
        path: '/privacy',
        id: 'privacy',
        component: require.resolve(`./src/templates/privacy.js`),
        context: { slug: '/privacy' },
      })

      actions.createPage({
        path: '/terms',
        id: 'terms',
        component: require.resolve(`./src/templates/terms.js`),
        context: { slug: '/terms' },
      })

      actions.createPage({
        path: '/thank-you',
        id: 'thank-you',
        component: require.resolve(`./src/templates/thank-you.js`),
        context: { slug: '/thank-you' },
      })

      redirects.forEach(redirect => 
        createRedirect({
          fromPath: redirect.fromPath,
          toPath: redirect.toPath,
          statusCode: redirect.status,
          redirectInBrowser: true,
          isPermanent: true,
        })
      )
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type WpPost implements Node {
      related_posts: WpNodePost!
    }

    type WpNodePost implements Node {
      nodes: [WpPost]
    }
  `
  createTypes(typeDefs)
}


exports.createResolvers = ({
  actions,
  createResolvers,
}) => {

  createResolvers({
    WpPost: {
      related_posts: {
        resolve: async (source, args, context, info) => {
          const { databaseId } = source

          const response = await fetch(
            `https://cms.udonis.co/wp-json/yarpp/v1/related/${databaseId}`
          ).then(res => res.json())

          if (response && response.length) {
            const result = await context.nodeModel.runQuery({
              query: {
                filter: { databaseId: { in: response.map(({ id }) => id) } },
              },
              type: 'WpPost',
            })
            return { nodes: result }
          } else return { nodes: [] }
        },
      },
    }
  })
}

