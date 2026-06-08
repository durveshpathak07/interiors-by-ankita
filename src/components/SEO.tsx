import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
}

export function SEO({
  title = 'Interiors By Ankita Shinde | Luxury Interior Design',
  description = 'Creating Beautiful Homes That Reflect Your Lifestyle. Premium luxury residential and commercial interior design studio based in Nashik, Maharashtra.',
  type = 'website',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
