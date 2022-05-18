import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

function SEO({ title, seo }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          keywords
          title
        }
      }
    }
  `);

  const defaultTitle = siteMetadata.title;

  const pageDescription = seo?.metaDesc || siteMetadata.description;
  const pageKeywords = seo?.metaKeywords || siteMetadata.keywords;
  const pageTitle = seo?.title || title || "Home";

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      {seo?.opengraphImage && <meta property="image" content={seo.opengraphImage.sourceUrl} />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo?.opengraphImage && <meta property="og:image" content={seo.opengraphImage.sourceUrl} />}
      <meta name="og:type" content="website" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

      </meta>
      <meta name="twitter:site" content="@GraphCMS" />
      <meta name="twitter:title" content={`${pageTitle} | ${defaultTitle}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {seo?.opengraphImage && <meta name="twitter:image:src" content={seo.opengraphImage.sourceUrl} />}
    </Helmet>
  );
}

export default SEO;
