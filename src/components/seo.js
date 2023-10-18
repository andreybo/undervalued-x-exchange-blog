import React from "react";
import { graphql, useStaticQuery } from "gatsby";

function SEO({ title, seo, robots, metaDesciption, amp }) {
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

  const pageDescription = metaDesciption || seo?.metaDesc || siteMetadata.description;
  const pageKeywords = seo?.metaKeywords || siteMetadata.keywords;
  const pageTitle = seo?.title || title || "Home";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      {seo?.opengraphImage ? <meta property="image" content={seo.opengraphImage.sourceUrl} /> : <meta property="image" content="/og/og.jpg" />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo?.opengraphImage ? <meta property="og:image" content={seo.opengraphImage.sourceUrl} /> : <meta property="og:image" content="/og/og.jpg" />}
      <meta name="og:type" content="website" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="twitter:site" content="@GraphCMS" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:card" content="summary_large_image" />
      {seo?.opengraphImage ? <meta property="twitter:image:src" content={seo.opengraphImage.sourceUrl} /> : <meta property="twitter:image:src" content="/og/og.jpg" />}
      {robots ? <meta name="robots" content="noindex"></meta> : ""}
      {amp &&
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
      }
    </>
  );
}

export default SEO;