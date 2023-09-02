const path = require("path");

exports.createPages = async function ({ actions, graphql }) {
  const { createRedirect, createPage } = actions

    const result = await graphql(`
      {
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
                tags{
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
        allWpCategory(filter: {name: {nin: ["Uncategorized", "Highlighted1", "Highlighted2", "Highlighted3-2", "Highlighted3", "Highlighted4"]}}) {
          nodes {
            id
            name
            uri
            count
          }
        }
        allWpTag {
          nodes {
            id
            name
            uri
            count
          }
        }
      }
    `)

    if (result.errors) {
      throw result.errors
    }

    // Create posts
    result.data.posts.edges.forEach(edge => {
      const postUri = edge.node.uri
      const postSlug = edge.node.slug
      const id = edge.node.id
      createPage({
        path: postUri,
        id: id,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: { slug: postSlug },
      })
    })

    
    const categoryTemplate = path.resolve("./src/templates/blog-list.js")
    const categories = result.data.allWpCategory.nodes
    const postsPerPage = 12

    // Make category pages
    categories.forEach((category) => {

        const numberOfPages = Math.ceil(category.count / postsPerPage)

        Array.from({ length: numberOfPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? category.uri : `${category.uri}/${i + 1}`,
            component: categoryTemplate,
            context: {
              id: category.id,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numberOfPages,
              numPosts: category.count,
              currentPage: i + 1,
              cat: category.uri,
              name: category.name
            },
          })
        })
    })

    // Make tag pages
    const tagTemplate = path.resolve("./src/templates/tag-list.js")
    const tags = result.data.allWpTag.nodes

    tags.forEach((tag) => {
      const numberOfPages = Math.ceil(tag.count / postsPerPage)

      Array.from({ length: numberOfPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? tag.uri : `${tag.uri}/${i + 1}`,
          component: tagTemplate,
          context: {
            id: tag.id,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: numberOfPages,
            numPosts: tag.count,
            currentPage: i + 1,
            tag: tag.uri,
            name: tag.name
          },
        })
      })
    })

    // Make latest page
      const allposts = result.data.posts.totalCount
      const categoryIds = result.data.allWpCategory.nodes.map(category => category.id); 

      const allnumPages = Math.ceil(allposts / postsPerPage)
      Array.from({ length: allnumPages }).forEach((_, i) => {
        actions.createPage({
          path: i === 0 ? `/latest` : `/latest/${i + 1}`,
          component: categoryTemplate,
          context: {
            id: categoryIds,
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages: allnumPages,
            numPosts: allposts,
            currentPage: i + 1,
            name: 'Latest Posts',
            cat: '/latest'
          },
        })
      })

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


exports.createResolvers = ({ actions, createResolvers }) => {
  const fetch = require('node-fetch')

  createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: `File`,
        async resolve(source, args, context, info) {
          if (source.sourceUrl) {
            let fileNodeID;
            let fileNode;
            let sourceModified;

            // Set the file cacheID, get it (if it has already been set)
            const mediaDataCacheKey = `wordpress-media-${source.mediaItemId}`;
            const cacheMediaData = await cache.get(mediaDataCacheKey);

            if (source.modified) {
              sourceModified = source.modified;
            }

            // If we have cached media data and it wasn't modified, reuse
            // previously created file node to not try to redownload
            if (cacheMediaData && sourceModified === cacheMediaData.modified) {
              fileNode = getNode(cacheMediaData.fileNodeID);

              // check if node still exists in cache
              // it could be removed if image was made private
              if (fileNode) {
                fileNodeID = cacheMediaData.fileNodeID;
                // https://www.gatsbyjs.org/docs/node-creation/#freshstale-nodes
                touchNode({
                  nodeId: fileNodeID
                });
              }
            }

            // If we don't have cached data, download the file
            if (!fileNodeID) {
              try {
                // Get the filenode
                fileNode = await createRemoteFileNode({
                  url: source.sourceUrl,
                  store,
                  cache,
                  createNode,
                  createNodeId,
                  reporter
                });

                if (fileNode) {
                  fileNodeID = fileNode.id;

                  await cache.set(mediaDataCacheKey, {
                    fileNodeID,
                    modified: sourceModified
                  });
                }
              } catch (e) {
                // Ignore
                console.log(e);
                return null;
              }
            }

            if (fileNode) {
              return fileNode;
            }
          }
          return null;
        }
      }
    },
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
