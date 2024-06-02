import { configs } from "@/configs"
import { Button } from "@/src/components/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <span className="mb-4 text-2xl font-bold">Indie UI</span>
      <h1 className="text-xl sm:text-3xl md:text-4xl mb-6 font-semibold">
        Cool UI components for free <br />
      </h1>
      <div className="flex-row-center gap-4 mx-auto">
        <Button asChild>
          <Link href="/docs" className="text-lg font-semibold w-fit mx-auto">
            Start Exploring
          </Link>
        </Button>
        <Button asChild variant={"outline"}>
          <span>
            <FaGithub />
            <Link href={configs.urls.github}>Star us on GitHub</Link>
          </span>
        </Button>
      </div>
    </main>
  )
}
