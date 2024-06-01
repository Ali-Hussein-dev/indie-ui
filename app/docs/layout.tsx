import { pageTree } from "../source";
import { DocsLayout } from "fumadocs-ui/layout";
import type { ReactNode } from "react";

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={pageTree}
      nav={{
        title: "Indie UI",
        githubUrl: "https://github.com/ali-hussein-dev",
      }}
      links={[
        {
          url: "https://indie-starter.dev?ref=indie-ui",
          text: "Indie Starter",
          external: true,
        },
      ]}
    >
      {children}
    </DocsLayout>
  )
}
