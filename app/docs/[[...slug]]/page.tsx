import { getPage, getPages } from '../../../app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { CiEdit } from 'react-icons/ci';
import { Button } from '@/components/ui/button';
import { FaRegStar } from 'react-icons/fa';
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
                  className="hover:font-semibold"
                >
                  Edit this page
                </a>
              </span>
            </Button>
            <Button asChild className="w-[88%]" variant="outline">
              <a
                href={configs.urls.github}
                data-umami-event="gh-star"
                target="_blank"
              >
                <FaRegStar className="inline mr-2 size-4" />
                Star us
              </a>
            </Button>
            <Button asChild className="w-[88%]" variant="outline">
              <a
                href={configs.urls.github + '/blob/main/CONTRIBUTING.md'}
                data-umami-event="gh-star"
                target="_blank"
              >
                Contribute
              </a>
            </Button>
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

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
