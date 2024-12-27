import { map } from '../.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { PageTree } from 'fumadocs-core/server';

export const {
  getPage,
  getPages,
  pageTree: originalTree,
} = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
});

export const pageTree: PageTree.Root = {
  name: 'Indie UI',
  children: [
    { type: 'separator', name: 'Getting Started' },
    { type: 'page', name: 'Setup', url: '/docs' },
    { type: 'page', name: 'Changelog', url: '/docs/changelog' },

    { type: 'separator', name: 'Form' },
    { type: 'page', name: 'Input', url: '/docs/inputs' },
    { type: 'page', name: 'Form Builder', url: '/form-builder', },

    { type: 'separator', name: 'Card' },
    { type: 'page', name: 'Simple', url: '/docs/cards-simple' },
    { type: 'page', name: 'Multi layers', url: '/docs/cards-multi-layers' },
    { type: 'page', name: 'With image', url: '/docs/cards-with-image-bg' },
    { type: 'page', name: 'With pattern', url: '/docs/cards-with-pattern' },
    { type: 'page', name: 'Interactive', url: '/docs/cards-interactive' },

    { type: 'separator', name: 'Button' },
    { type: 'page', name: 'Base', url: '/docs/base-button' },
    { type: 'page', name: 'Simple', url: '/docs/buttons' },
    { type: 'page', name: 'Eye catching', url: '/docs/eye-catching-buttons' },
    { type: 'page', name: 'Stateful', url: '/docs/stateful-buttons' },

    { type: 'separator', name: 'Grid' },
    { type: 'page', name: 'Bento Grid (4 cells)', url: '/docs/bento-4' },
    { type: 'page', name: 'Bento Grid (5 cells)', url: '/docs/bento-5' },
    { type: 'page', name: 'Bento Grid (6 cells)', url: '/docs/bento-6' },

    { type: 'separator', name: 'Loader' },
    { type: 'page', name: 'Skeleton', url: '/docs/skeleton' },
    { type: 'page', name: 'Dots', url: '/docs/loader-dots' },
    { type: 'page', name: 'Text', url: '/docs/loader-text', },

    { type: 'separator', name: 'Text animation' },
    { type: 'page', name: 'Text', url: '/docs/text-animation' },
    { type: 'page', name: 'Counter', url: '/docs/counter' },


    { type: 'separator', name: 'Other' },
    { type: 'page', name: 'Header', url: '/docs/header' },
    { type: 'page', name: 'Separator', url: '/docs/separator' },
  ],
};
