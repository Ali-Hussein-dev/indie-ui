import { configs } from '@/configs';
import { pageTree } from '../source';
import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{ title: 'Indie UI' }}
      githubUrl={configs.urls.github}
      links={[
        {
          url: configs.urls.indiestarter,
          text: 'Indie Starter',
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  );
}
