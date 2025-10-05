import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from '@reach/router';

function SEO({ title, seo, robots, metaDesciption, amp, author, datePublished, dateModified, category, faqData, noindex = false }) {
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

  const authorName = author?.node?.name || "undervalued-x-exchange";
  const authorSlug = "https://www.blog.undervalued-x-exchange.co/authors/" + author?.node?.slug;

  console.log(authorSlug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": pageTitle,
    "image": [
      seo?.opengraphImage?.sourceUrl || "https://www.blog.undervalued-x-exchange.co/og/og.jpg"
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
      "name": "undervalued-x-exchange",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.blog.undervalued-x-exchange.co/u.png"
      }
    },
    "articleSection": category,
  };

  const schemaAsString = JSON.stringify(schema, null, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData?.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  console.log("faq" + faqData);

  const structuredDataScript = JSON.stringify(structuredData, null, 2);


  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      {seo?.opengraphImage ? <meta property="image" content={seo.opengraphImage.sourceUrl} /> : <meta property="image" content="https://www.blog.undervalued-x-exchange.co/og/og.jpg" />}

      <meta property="og:title" content={pageTitle} />
      <meta property="og:url" content={pageUrl} />
      <meta name="google-site-verification" content="AQfC9vwDmiwy2GWVkVmAKhWjhZbuNiwW14hWhwdKsgs" />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:site_name" content={defaultTitle} />
      {seo?.opengraphImage ? <meta property="og:image" content={seo.opengraphImage.sourceUrl} /> : <meta property="og:image" content="https://www.blog.undervalued-x-exchange.co/og/og.jpg" />}
      <meta name="og:type" content="website" />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="twitter:site" content="@undervalued-x-exchangeMarketing" />
      <meta name="twitter:title" content={pageTitle} />
      <meta property="twitter:domain" content="blog.undervalued-x-exchange.co"/>
      <meta property="twitter:url" content={pageUrl}/>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={pageDescription}/>
      {seo?.opengraphImage ? <meta property="twitter:image:src" content={seo.opengraphImage.sourceUrl} /> : <meta property="twitter:image:src" content="https://www.blog.undervalued-x-exchange.co/og/og.jpg" />}
      {robots ? <meta name="robots" content="noindex"></meta> : ""}
      {amp &&
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no" />
      }
      {author &&
        <script type="application/ld+json">{schemaAsString}</script>
      }
      {faqData && faqData[0] &&<script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: structuredDataScript }} 
      />}
      
    </>
  );
}

export default SEO;