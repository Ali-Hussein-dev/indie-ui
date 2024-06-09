import { configs } from "@/configs"
import { FaGithub } from "react-icons/fa"
import { ThemeToggle } from "./toggle-theme"

export const Header = () => {
  return (
    <header
      className={
        "sticky top-0 z-50 h-14 backdrop-blur dark:bg-zinc-950/30 bg-zinc-50/30"
      }
    >
      <nav className="mx-auto flex size-full max-w-container flex-row-start gap-6 border-b">
        <span className="font-extrabold">Indie UI</span>
        <div className="flex flex-1 flex-row items-center gap-2 justify-end">
          <ThemeToggle />
          <a
            href={configs.urls.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </nav>
    </header>
  )
}
