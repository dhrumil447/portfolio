import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  twitterCard = "summary_large_image",
}) => {
  const defaultTitle =
    "Dhrumil Patel - Software Developer Portfolio | React, React Native, CRM & ERP Specialist";
  const defaultDescription =
    "Software Developer portfolio of Dhrumil Patel (Software Developer at Lemon Software Solution). Showcasing published Google Play Android apps, enterprise CRM & ERP systems, and modern web applications built with React.js, React Native, Node.js, and modern databases.";
  const defaultKeywords =
    "portfolio, software developer, Dhrumil Patel, Lemon Software Solution, MoneyFlow expense tracker, React developer, React Native developer, CRM developer, ERP developer, JavaScript, TypeScript, Node.js, Android apps, web applications";
  const siteUrl = "https://dhrumiilportfolio.netlify.app";
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const seoTitle = title ? `${title} | Dhrumil Patel` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoCanonical = canonical || siteUrl;
  const seoImage = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={seoCanonical} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Canonical */}
      <link rel="canonical" href={seoCanonical} />
    </Helmet>
  );
};

export default SEO;
