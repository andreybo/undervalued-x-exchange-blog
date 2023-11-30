import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from '@reach/router';

function SEO({ title, seo, robots, metaDesciption, amp, author, datePublished, dateModified, category }) {
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

  
  const location = useLocation();

  const pageUrl = seo?.opengraphUrl || location.href;

  const pageDescription = metaDesciption || seo?.metaDesc || siteMetadata.description;
  const pageKeywords = seo?.metaKeywords || siteMetadata.keywords;
  const pageTitle = seo?.title || title || "Home";

  const authorName = author?.node?.name || "Udonis";
  const authorSlug = "https://www.blog.udonis.co/authors/" + author?.node?.slug;

  console.log(authorSlug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": pageTitle,
    "image": [
      seo?.opengraphImage?.sourceUrl || "https://www.blog.udonis.co/og/og.jpg"
    ],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "description": pageDescription,
    "author": [
      {
        "@type": "Person",
        "name": authorName,
        "url": authorSlug
      }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Udonis",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.blog.udonis.co/u.png"
      }
    },
    "articleSection": category,
  };

  const schemaAsString = JSON.stringify(schema, null, 2);

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      {seo?.opengraphImage ? <meta property="image" content={seo.opengraphImage.sourceUrl} /> : <meta property="image" content="https://www.blog.udonis.co/og/og.jpg" />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta name="google-site-verification" content="AQfC9vwDmiwy2GWVkVmAKhWjhZbuNiwW14hWhwdKsgs" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo?.opengraphImage ? <meta property="og:image" content={seo.opengraphImage.sourceUrl} /> : <meta property="og:image" content="https://www.blog.udonis.co/og/og.jpg" />}
      <meta name="og:type" content="website" />
      
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="twitter:site" content="@UdonisMarketing" />
      <meta name="twitter:title" content={pageTitle} />
      <meta property="twitter:domain" content="blog.udonis.co"/>
      <meta property="twitter:url" content={pageUrl}/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={pageDescription}/>
      {seo?.opengraphImage ? <meta property="twitter:image:src" content={seo.opengraphImage.sourceUrl} /> : <meta property="twitter:image:src" content="https://www.blog.udonis.co/og/og.jpg" />}
      {robots ? <meta name="robots" content="noindex"></meta> : ""}
      {amp &&
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
      }
      {author &&
        <script type="application/ld+json">{schemaAsString}</script>
      }
    </>
  );
}

export default SEO;