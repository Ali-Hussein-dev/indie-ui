import { getPage, getPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { CiEdit } from "react-icons/ci"
export default async function Page({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default

  return (
    <DocsPage
      toc={page.data.exports.toc}
      tableOfContent={{
        footer: (
          <div className="flex-row-start gap-2 dark:text-zinc-300">
            <CiEdit />
            <a
              href={`https://github.com/Ali-Hussein-dev/indie-ui/blob/main/content${page.url}.mdx`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:font-semibold"
            >
              Edit this page
            </a>
          </div>
        ),
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
