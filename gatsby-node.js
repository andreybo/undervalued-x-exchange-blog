const fetch = require('node-fetch');
//const redirects = require("./redirects.json");

exports.createPages = async function ({ actions, graphql }) {
  //const { createRedirect } = actions;

  const { data } = await graphql(`{
    posts: allWpPost(filter: {status: {eq: "publish"}}) {
      edges {
        node {
          slug
          id
          guid
          categories {
            nodes {
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
      group(field: { uri: SELECT }) {
        fieldValue
        sum(field: { count: SELECT })
      }
    }
  }`);

  // Create posts
  data.posts.edges.forEach(edge => {
    const postUri = edge.node.uri;
    const postSlug = edge.node.slug;
    const id = edge.node.id;
    actions.createPage({
      path: postUri,
      id: id,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: postSlug },
    });
  });

  // Make category pages
  data.catGroup.group.forEach(cat => {
    const catSlug = cat.fieldValue;
    const catName = cat.fieldValue;
    const posts = cat.sum;
    const postsPerPage = 12;
    const numPages = Math.ceil(posts / postsPerPage);

    for (let i = 0; i < numPages; i++) {
      actions.createPage({
        path: i === 0 ? `${catSlug}` : `${catSlug}/${i + 1}`,
        component: require.resolve(`./src/templates/category-template.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          cat: catName,
          uri: catSlug
        },
      });
    }
  });

  // Make latest page
  const allPosts = data.posts.totalCount;
  const allPostsPerPage = 12;
  const allNumPages = Math.ceil(allPosts / allPostsPerPage);

  for (let i = 0; i < allNumPages; i++) {
    actions.createPage({
      path: i === 0 ? `/latest` : `/latest/${i + 1}`,
      component: require.resolve(`./src/templates/blog-list.js`),
      context: {
        limit: allPostsPerPage,
        skip: i * allPostsPerPage,
        allNumPages,
        currentPage: i + 1,
      },
    });
  }

  // Make homepage
  actions.createPage({
    path: '/',
    id: 'homepage',
    component: require.resolve(`./src/templates/homepage.js`),
    context: { slug: '/' },
  });

  actions.createPage({
    path: '/privacy',
    id: 'privacy',
    component: require.resolve(`./src/templates/privacy.js`),
    context: { slug: '/privacy' },
  });

  actions.createPage({
    path: '/terms',
    id: 'terms',
    component: require.resolve(`./src/templates/terms.js`),
    context: { slug: '/terms' },
  });

  actions.createPage({
    path: '/thank-you',
    id: 'thank-you',
    component: require.resolve(`./src/templates/thank-you.js`),
    context: { slug: '/thank-you' },
  });

  /*redirects.forEach(redirect => 
    createRedirect({
      fromPath: redirect.fromPath,
      toPath: redirect.toPath,
      statusCode: redirect.status,
      redirectInBrowser: true,
      isPermanent: true,
    })
  )*/
}