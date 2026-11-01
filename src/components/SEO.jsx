import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "profile",
  twitterCard = "summary_large_image",
}) => {
  const defaultTitle =
    "Dhrumil Patel | Software Developer Portfolio | Lemon Software Solution";
  const defaultDescription =
    "Official portfolio of Dhrumil Patel, Software Developer at Lemon Software Solution. Showcasing published Android app MoneyFlow on Google Play, enterprise CRM & ERP systems, React.js, React Native, and full-stack solutions.";
  const defaultKeywords =
    "Dhrumil Patel, Dhrumil Patel portfolio, Dhrumil Patel developer, Dhrumil Patel software developer, Dhrumil Patel Lemon Software Solution, Dhrumil Patel Walter Technologies, MoneyFlow expense tracker, Dhrumil Patel Play Store, React developer India, React Native developer, CRM developer, ERP developer, full stack developer Dhrumil Patel, dhrumiilportfolio, dhrumil447, dhrumilp7";
  const siteUrl = "https://dhrumiilportfolio.netlify.app";
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const seoTitle = title ? `${title} | Dhrumil Patel` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoCanonical = canonical || `${siteUrl}/`;
  const seoImage = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content="Dhrumil Patel" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <meta
        name="googlebot"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={seoCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Dhrumil Patel Portfolio" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:url" content={seoCanonical} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Canonical Link */}
      <link rel="canonical" href={seoCanonical} />
    </Helmet>
  );
};

export default SEO;
