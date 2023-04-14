module.exports = {
  trailingSlash: `always`,
  siteMetadata: {
    title: `Udonis Mobile Marketing Agency`,
    description: `Udonis offers all the mobile marketing services you need. Creative production, user acquisition, monetization, growth consulting, and more.!`,
    siteUrl: `https://www.blog.udonis.co`,
    author: `@UdonisMarketing`,
    keywords: "Digital, Ads"
  },
  plugins: [
  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allWpPost } }) => {
            return allWpPost.edges.map(edge => {
              return Object.assign({}, edge.node, {
                title: edge.node.title,
                description: edge.node.excerpt,
                date: edge.node.date,
                url: site.siteMetadata.siteUrl + edge.node.uri,
                guid: site.siteMetadata.siteUrl + edge.node.uri,
              })
            })
          },
          query: `{
            allWpPost(sort: {date: DESC}, limit: 40) {
              edges {
                node {
                  date
                  title
                  content
                  excerpt
                  uri
                }
              }
            }
          }`,
          output: "/rss.xml",
          title: `RSS Feed`,
        },
      ],
    },
  },
  {
      resolve: 'gatsby-plugin-local-search',
      options: {
        // A unique name for the search index. This should be descriptive of
        // what the index contains. This is required.
        name: 'posts',

        // Set the search engine to create the index. This is required.
        // The following engines are supported: flexsearch, lunr
        engine: 'flexsearch',

        // Provide options to the engine. This is optional and only recommended
        // for advanced users.
        //
        // Note: Only the flexsearch engine supports options.
        engineOptions: {'tokenize':'forward'},

        // GraphQL query used to fetch all data for the search index. This is
        // required.
        query: `
          {
            allWpPost {
              nodes {
                  id
                  title
                  uri
                  excerpt
              }
            }
          }
        `,

        // Field used as the reference value for each document.
        // Default: 'id'.
        ref: 'id',

        // List of keys to index. The values of the keys are taken from the
        // normalizer function below.
        // Default: all fields
        index: ['title'],

        // List of keys to store and make available in your UI. The values of
        // the keys are taken from the normalizer function below.
        // Default: all fields
        store: ['id', 'path', 'title', 'excerpt'],

        // Function used to map the result from the GraphQL query. This should
        // return an array of items to index in the form of flat objects
        // containing properties to index. The objects must contain the `ref`
        // field above (default: 'id'). This is required.
        normalizer: ({ data }) =>
          data.allWpPost.nodes.map((node) => ({
            id: node.id,
            path: node.uri,
            title: node.title,
            excerpt: node.excerpt
          })),
      },
    },
  {
    resolve: `gatsby-source-wordpress`,
    options: {
      html: {
        useGatsbyImage: true,
      },
      url: process.env.WPGRAPHQL_URL || `https://cms.udonis.co/graphql`,
      type: {
        Post: {
          limit:
            process.env.NODE_ENV === `development` ? 50 : 5000,
        },
        MediaItem: {
          localFile: {
            requestConcurrency: 50,
          },
        },
      }
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `images`,
      "path": `${__dirname}/src/images/`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": `pages`,
      "path": `${__dirname}/src/pages/`
    }
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1000,
            withWebp: true,
            showCaptions: true,
            quality: 80,
            loading: 'auto',
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`
      ],
    },
  },
  {
    resolve: 'gatsby-remark-audio',
    options: {
      preload: 'auto',
      loop: false,
      controls: true,
      muted: false,
      autoplay: false
    }
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaultQuality: 90,
      failOn: 'none',
    },
  },
  `gatsby-transformer-sharp`,
  "gatsby-plugin-image",
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      excludes: ["/404"],
    },
  },
  "gatsby-plugin-sass",
  "gatsby-plugin-sitemap",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `udonis-website`,
      short_name: `udonis`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `minimal-ui`,
      icon: `src/images/udonis-icon.png`
    },
  },
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-65953491-2"
    }
  },
  /*{
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleTagManager: {
        trackingId: 'GTM-W7X6VM9', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-google-tagmanager', // default
        dataLayerName: 'dataLayer', // default
      },
      environments: ["production", "development"],
    }
  },*/
  {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `udonis-blog`
      }
  },
  {
    resolve: `gatsby-plugin-canonical-urls`,
    options: {
      siteUrl: `https://www.blog.udonis.co`,
      stripQueryString: true,
    },
  },
  ]
};