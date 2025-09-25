import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

const SEO = ({
  title = "Festiva Foundation - Empowering Engineers to Build Humanity",
  description = "Join Festiva Foundation, a social initiative in collaboration with MIT NGO. 100+ CSR activities, 150+ volunteers, 1000+ meals distributed. Structured volunteering programs for socially responsible engineers.",
  keywords = "NGO, volunteering, social impact, CSR activities, community service, Karnataka, MIT NGO, social responsibility, humanitarian work, charity",
  image = "/hero-main.jpg",
  url = "https://foundation.festivamoments.co.in",
  type = "website",
  schemaData
}: SEOProps) => {
  const structuredData = schemaData || {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Festiva Foundation",
    "description": description,
    "url": url,
    "logo": "/festiva-logo.png",
    "sameAs": [
      "https://linkedin.com/company/festiva-foundation",
      "https://www.instagram.com/festivafoundation"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "festivamoments77@gmail.com",
      "contactType": "customer support"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Karnataka"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Festiva Foundation" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#8B5CF6" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Festiva Foundation" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Additional SEO Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Karnataka, India" />
      <meta name="language" content="English" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;