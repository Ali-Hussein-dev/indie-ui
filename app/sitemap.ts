import { type MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const headersList = headers();
    const host = headersList.get('host');
    const lastModified = new Date();
    const list = [
        '',
        '/docs/docs',
        '/docs/changelog',
        '/docs/cards-simple',
        '/docs/cards-multi-layers',
        '/docs/cards-with-image-bg',
        '/docs/cards-with-pattern',
        '/docs/base-button',
        '/docs/buttons',
        '/docs/eye-catching-buttons',
        '/docs/skeleton',
        '/docs/text-animation',
        '/docs/counter',
        '/docs/header',
        '/docs/separator',
        '/docs/inputs',
        '/docs/bento-4',
        '/docs/bento-5',
        '/docs/bento-6',
    ];
    return list.map(path => ({
        url: `https://${host}/${path}`,
        lastModified,
    }))
}
