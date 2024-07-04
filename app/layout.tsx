import { generateSEOTags } from '@/lib/seo';
import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});
export const metadata = generateSEOTags({
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={'scroll-smooth antialiased ' + inter.className}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <script
          defer
          src="https://aliytics.netlify.app/script.js"
          data-website-id="47b996fd-088c-4d37-9ea2-b172bc689b61"
        ></script>
      </head>
      <body className="selection:bg-zinc-800 selection:text-zinc-100">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
