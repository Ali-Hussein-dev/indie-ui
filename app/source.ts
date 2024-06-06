import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { PageTree } from 'fumadocs-core/server';

export const { getPage, getPages, pageTree: originalTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),  
});

export const pageTree: PageTree.Root = {
  name: "Indie UI",
  children: [
    { type: "separator", name: "Setup" },

    { type: "page", name: "Quick Start", url: "/docs" },

    { type: "separator", name: "Cards" },
    { type: "page", name: "Simple", url: "/docs/cards-simple" },
    { type: "page", name: "Multi layers", url: "/docs/cards-multi-layers" },
    { type: "page", name: "With image BG", url: "/docs/cards-with-image-bg" },
    { type: "separator", name: "Buttons" },
    { type: "page", name: "Simple", url: "/docs/buttons" },
    { type: "page", name: "Eye catching", url: "/docs/eye-catching-buttons" },

    { type: "separator", name: "Input Block" },
    { type: "page", name: "Inputs", url: "/docs/inputs" },

    { type: "separator", name: "Layout" },
    { type: "page", name: "Bento Grid (4 cells)", url: "/docs/bento-4" },
    { type: "page", name: "Bento Grid (5 cells)", url: "/docs/bento-5" },
    // { type: "page", name: "Bento Grid (4 cells)", url: "/good-question" },
    // { type: "page", name: "Bento Grid (6 cells)", url: "/good-question" },
    // { type: "page", name: "Bento Grid (7 cells)", url: "/good-question" },
    // { type: "page", name: "Bento Grid (8 cells)", url: "/good-question" },

    // { type: "separator", name: "Hero" },
    // { type: "page", name: "Centeric", url: "/good-question" },
    // ...originalTree.children

     { type: "separator", name: "Loaders" },
     { type: "page", name: "Skeleton", url: "/docs/skeleton" },
  ],
};
