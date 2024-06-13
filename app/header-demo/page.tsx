"use client"
import { Button } from "@/src/components/buttons/button"
import { Header } from "@/src/components/headers/header"
import * as React from "react"
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { LogoLink } from "@/src/components/logo"

const headerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]
const icons = [
  {
    name: "Twitter",
    icon: <FaXTwitter size="14" />,
    href: "https://x.com",
  },
  {
    name: "GitHub",
    icon: <FaGithub size="14" />,
    href: "https://github.com",
  },
]
//======================================
const HeaderDemoPage = () => {
  const [variant, setVariant] = React.useState<"default" | "centric">("default")
  return (
    <div className="relative">
      <Header
        variant={variant}
        Logo={<LogoLink />}
        links={headerLinks}
        icons={icons}
        AuthButton={
          <Button variant={"outline"} size="sm" className="px-4">
            Sign in
          </Button>
        }
      />
      <section className="h-screen">
        <div className="flex-row-center py-10 gap-10">
          <Button
            onClick={() => setVariant("default")}
            variant={variant == "default" ? "default" : "outline"}
          >
            default
          </Button>
          <Button
            onClick={() => setVariant("centric")}
            variant={variant == "centric" ? "default" : "outline"}
          >
            centric
          </Button>
        </div>
        <p className="text-center pb-8">
          Resize the window to see the mobile version
        </p>
      </section>
      <section className="h-screen mx-auto flex-row-center border-t">
        section
      </section>
      <section className="h-screen mx-auto flex-row-center border-t">
        section
      </section>
    </div>
  )
}

export default HeaderDemoPage
