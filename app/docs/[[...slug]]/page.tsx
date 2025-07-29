import { getPage, getPages } from '../../../app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { CiEdit } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { configs } from '@/configs';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage
      toc={page.data.exports.toc}
      tableOfContent={{
        footer: (
          <div className="flex-col-start gap-2 dark:text-zinc-300">
            <Button variant={'link'} asChild className="pl-1">
              <span className="flex-row-start gap-2">
                <CiEdit />
                <a
                  href={`${configs.urls.github}/blob/main/content${page.url}.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edit this page
                </a>
              </span>
            </Button>
            <div className="w-[88%] border rounded-sm dark:text-green-300 text-green-600 border-dashed p-2.5 dark:border-green-300/40 border-green-600/40">
              <a
                href={
                  'https://scrimba.com/build-reusable-react-components-c0f?via=nextradardotdev'
                }
                target="_blank"
              >
                Build Reusable React Components
                <HiOutlineExternalLink className="inline ml-2 size-4" />
              </a>
            </div>
          </div>
        ),
      }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();
  const title = page.data.title;
  const description = page.data.description;
  return {
    title,
    description,
    twitter: {
      title,
      description,
      creator: '@AliHussein_20',
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
  } satisfies Metadata;
}
