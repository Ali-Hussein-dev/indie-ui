import { configs } from "@/configs"
import { FaDiscord, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { LogoLink } from "@/src/components/logo"

//======================================
export const Footer = () => {
  return (
    <footer className="h-16">
      <div className="border-t max-w-container w-full mx-auto flex-row-end pt-4 px-2">
        <LogoLink />
        <div className="flex flex-1 flex-row items-center gap-2 md:gap-3 justify-end">
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
      </div>
    </footer>
  )
}
