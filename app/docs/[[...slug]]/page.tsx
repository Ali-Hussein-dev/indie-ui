import { getPage, getPages } from "../../../app/source"
import type { Metadata } from "next"
import { DocsPage, DocsBody } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import { CiEdit } from "react-icons/ci"
import { Button } from "@/components/buttons/button"
import { FaRegStar } from "react-icons/fa"
export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
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
          <div className="flex-col-start gap-2 dark:text-zinc-300">
            <Button variant={"link"} asChild className="pl-1">
              <span className="flex-row-start gap-2">
                <CiEdit />
                <a
                  href={`https://github.com/Ali-Hussein-dev/indie-ui/blob/main/content${page.url}.mdx`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:font-semibold"
                >
                  Edit this page
                </a>
              </span>
            </Button>
            <div className="flex-col-center w-full gap-2 border rounded-lg px-2 py-3">
              <p className="text-center font-medium">
                Support us with one click
              </p>
              <Button asChild className="w-[88%]" variant="secondary">
                <a
                  href="https://github.com/Ali-Hussein-dev/indie-ui"
                  data-umami-event="gh-star"
                  target="_blank"
                >
                  <FaRegStar className="inline mr-2 size-4" />
                  Star
                </a>
              </Button>
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
  )
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }))
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
