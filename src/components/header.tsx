import { configs } from "@/configs"
import { FaGithub, FaXTwitter } from "react-icons/fa6"
import { ThemeToggle } from "./toggle-theme"
import { FaDiscord } from "react-icons/fa"
import { LogoLink } from "@/src/components/logo"

export const Header = () => {
  return (
    <header
      className={
        "sticky top-0 z-50 h-14 backdrop-blur dark:bg-zinc-950/60 bg-zinc-50/60"
      }
    >
      <nav className="mx-auto flex size-full max-w-container flex-row-start gap-6 border-b px-1">
        <LogoLink />
        <div className="flex flex-1 flex-row items-center gap-3 md:gap-4 justify-end">
          <ThemeToggle />
          <a href={configs.urls.x} target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a
            href={configs.urls.discord}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord />
          </a>
          <a
            href={configs.urls.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </header>
  )
}
