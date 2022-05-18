module.exports = {
  siteMetadata: {
    title: `Udonis Mobile Marketing Agency`,
    description: `Udonis offers all the mobile marketing services you need. Creative production, user acquisition, monetization, growth consulting, and more.!`,
    siteUrl: `https://www.blog.udonis.co`,
    author: `@UdonisMarketing`,
    keywords: "Digital, Ads"
  },
  plugins: [
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
      url: process.env.WPGRAPHQL_URL || `https://cms.udonis.co/graphql`,
      develop: {
        hardCacheMediaFiles: true,
        hardCacheData: true,
      },
      type: {
        Post: {
          limit:
            process.env.NODE_ENV === `development` ? 50 : 5000,
        }
      }
    },
  },
  "gatsby-plugin-image",
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1500,
            withWebp: true,
            showCaptions: true,
            quality: 100,
            loading: 'auto',
            linkImagesToOriginal: false,
          },
        },
        `gatsby-remark-lazy-load`
      ],
    },
  },
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaultQuality: 90,
      failOnError: false,
    },
  },
  `gatsby-transformer-sharp`,
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
    resolve: "gatsby-plugin-robots-txt",
    options: {
      host: "https://wwww.blog.udonis.co/",
      sitemap: "https://www.blog.udonis.co/sitemap/sitemap-index.xml",
      policy: [
        {
          userAgent: "*",
          disallow: "/api",
        },
      ],
    },
  },
  {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      excludes: ["/404"],
    },
  },
  "gatsby-plugin-sass",
  "gatsby-plugin-react-helmet",
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
  {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `udonis-blog`
      }
  },
  `gatsby-plugin-gatsby-cloud`
  ]
};