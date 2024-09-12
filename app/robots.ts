import { type MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default function robots(): MetadataRoute.Robots {
    const headersList = headers();
    const host = headersList.get('host');

    return {
        rules: [
            {
                userAgent: [
                    'Googlebot',
                    'Bingbot',
                    'DuckDuckBot',
                    'YandexBot',
                    'Baiduspider',
                    'LinkedInBot',
                ],
                allow: ['/$'], // allow the home page and the OG image API
                disallow: '/_next/static/media', // disallow everything else
            },
        ],
        sitemap: `https://${host}/sitemap.xml`,
    };
}
