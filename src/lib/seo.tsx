import type { Metadata } from 'next';
import { configs } from '@/configs';

const { site } = configs;

const defaultkeywords = [
  'Indie Starter',
  'Typescript',
  'Tailwind',
  'Tailwindcss',
  'Boilerplate',
  'shadcn/ui',
];

/**
 * These are all the SEO tags you can add to your pages.
 * 
 * It automatically fills in information like the title, description, and OG, and you can personalize it for every page.
 * 
 * RECOMMENDED: set the canonical URL for each page (export const metadata = getSEOTags({canonicalUrlRelative: "/"});)

 */
export const generateSEOTags = ({
  title,
  description,
  keywords,
  openGraph,
  canonicalUrlRelative,
  extraTags,
}: Metadata & {
  canonicalUrlRelative?: string;
  extraTags?: Record<string, string>;
} = {}) => {
  return {
    // up to 50 characters (what does your app do for the user?)
    title: title ?? site.name,
    // up to 160 characters (how does your app help the user?)
    description: description ?? site.description,
    // some keywords separated by commas. by default it will be defaultKeywords, change it for your case.
    keywords: keywords ?? defaultkeywords,
    // the name of the application (e.g. Indie Starter)
    applicationName: site.name,
    // set a base URL prefix for other fields that require a fully qualified URL (.e.g og:image: og:image: 'https://yourdomain.com/share.png' => '/share.png')
    metadataBase: new URL(site.siteUrl),

    openGraph: {
      title: openGraph?.title ?? site.name,
      description: openGraph?.description ?? site.description,
      // url: openGraph?.url ?? site.siteUrl,
      siteName: openGraph?.title ?? site.name,
      // If you add an opengraph-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [
      //   {
      //     url: `https://${site.domain}/share.png`,
      //     width: 1200,
      //     height: 660,
      //   },
      // ],
      locale: 'en_US',
      type: 'website',
    },

    twitter: {
      title: openGraph?.title ?? site.name,
      description: openGraph?.description ?? site.description,
      // If you add an twitter-image.(jpg|jpeg|png|gif) image to the /app folder, you don't need the code below
      // images: [openGraph?.image || defaults.og.image],
      card: 'summary_large_image',
      creator: '@alihussein_20',
    },

    // If a canonical URL is given, we add it. The metadataBase will turn the relative URL into a fully qualified URL
    ...(canonicalUrlRelative && {
      alternates: { canonical: canonicalUrlRelative },
    }),

    // add extra tags here, you can pass them here
    ...extraTags,
  };
};

/**
 * @Resources
 *
 * Strctured Data for Rich Results on Google. Learn more: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
 *
 *
 * Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
 *
 * Use this tool to check data is well structure: https://search.google.com/test/rich-results
 *
 */

/**
 * @RECOMMENDED FOR SEO
 *
 * Use in your app/page.tsx for software apps: It tells Google your AppName is a Software, and it has a rating of 4.8/5 from 12 reviews.
 *
 */

export const getSchemaTags = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'http://schema.org',
          '@type': 'SoftwareApplication',
          name: site.name,
          description: site.description,
          image: `${site.siteUrl}/icon.png`,
          url: site.siteUrl,
          author: {
            '@type': 'Person',
            name: 'Ali Hussein',
          },
          datePublished: '2023-08-01',
          applicationCategory: 'EducationalApplication',
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '12',
          },
          offers: [
            {
              '@type': 'Offer',
              price: '9.00',
              priceCurrency: 'USD',
            },
          ],
        }),
      }}
    >
      {' '}
    </script>
  );
};
