import { configs } from "@/configs"
import { Button } from "@/src/components/buttons/button"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"
export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <span className="mb-5 text-2xl font-bold">Indie UI</span>
      <h1 className="text-xl sm:text-3xl md:text-5xl mb-1 text-center font-bold">
        UI components with variants
      </h1>
      <p className="text-cneter mb-4">
        Powered by <b>Tailwindcss</b>
      </p>
      <div className="flex-row-center gap-4 mx-auto">
        <Button asChild>
          <Link href="/docs" className="text-lg font-semibold w-fit mx-auto">
            Docs
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
