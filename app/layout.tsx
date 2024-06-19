import { generateSEOTags } from "@/lib/seo"
import "./global.css"
import { RootProvider } from "fumadocs-ui/provider"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
})
export const metadata = generateSEOTags({
  icons: [{ rel: "icon", url: "/favicon.ico" }],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={"scroll-smooth antialiased " + inter.className}
      style={{ colorScheme: "dark" }}
    >
      <head>
        {/* <script
          defer
          src="https://eu.umami.is/script.js"
          data-website-id="3877cb40-b9fe-4b1d-a8e1-2957dc18cf0a"
          // data-host-url="https://ui.indie-starter.dev"
        ></script> */}
      </head>
      <body className="selection:bg-zinc-800 selection:text-zinc-100">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
