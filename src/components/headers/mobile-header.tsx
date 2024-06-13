"use client"

import { Button } from "../buttons/button"
import { IconsList, LinksList } from "./header"
import { CgClose, CgMenu } from "react-icons/cg"
import * as React from "react"
import { cn } from "@/src/utils/cn"

export const MobileHeader = ({
  links,
  icons,
  Logo,
  AuthButton,
}: {
  links: LinksList
  icons?: IconsList
  Logo: React.ReactNode
  AuthButton: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div
      className={cn(
        "md:hidden px-4 pt-2 border-b",
        isOpen && "min-h-screen z-40 dark:bg-zinc-950 bg-white fixed size-full"
      )}
    >
      <div className="flex-row-between pb-2">
        {Logo}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-xl"
          variant={"outline"}
        >
          {isOpen ? <CgClose /> : <CgMenu />}
        </Button>
      </div>

      <nav
        className={
          isOpen ? "animate-popover-in flex flex-col gap-4 mb-5" : "hidden"
        }
      >
        {links.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={"outline"}
            className="w-full rounded-xl justify-start"
            size="lg"
          >
            <a href={link.href}>{link.name}</a>
          </Button>
        ))}

        <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
          {icons && (
            <div className="flex-row-start grow gap-2">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={"outline"}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={icon.href}>{icon.icon}</a>
                </Button>
              ))}
            </div>
          )}
          {AuthButton}
        </div>
      </nav>
    </div>
  )
}
