import { generateSEOTags } from '@/lib/seo';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, Poppins } from 'next/font/google';
import type { ReactNode } from 'react';
import { Banner } from '@/components/banner';
import { AnalyticsProv } from '@/analytics-prov';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const font = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
export const metadata = generateSEOTags({
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={'scroll-smooth antialiased ' + font.className}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <AnalyticsProv />
      </head>
      <body className="selection:bg-zinc-800 selection:text-zinc-100 relative">
        <Banner />
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
