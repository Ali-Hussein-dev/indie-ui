import { generateSEOTags } from "@/src/utils/seo"
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
})
export const metadata = generateSEOTags()

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={"scroll-smooth antialiased " + inter.className}
      style={{ colorScheme: "dark" }}
    >
      <body>
        <RootProvider>{children}</RootProvider>
        <Analytics />
      </body>
    </html>
  )
}