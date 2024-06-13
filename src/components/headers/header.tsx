import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Button } from "../buttons/button"
import { MobileHeader } from "./mobile-header"
import { ThemeToggle } from "../toggle-theme"
import { cn } from "@/src/utils/cn"

const headerVariants = cva("mx-auto", {
  variants: {
    variant: {
      default: "max-w-container",
      centric:
        "max-w-4xl rounded-full mt-2 border dark:bg-zinc-950/50 backdrop-blur shadow-lg bg-zinc-50 dark:border-zinc-900",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})
export type LinksList = { name: string; href: string }[]
export type IconsList = { name: string; icon: React.ReactNode; href: string }[]

export interface HeaderProps extends VariantProps<typeof headerVariants> {
  sticky?: boolean
  links: LinksList
  /**
   * Icon buttons
   */
  icons?: IconsList
  Logo: React.ReactNode
  AuthButton: React.ReactNode
}
const HeaderLink = (props: { href: string; name: string }) => {
  return <a href={props.href}>{props.name}</a>
}

//======================================
export const Header = ({
  Logo,
  links,
  icons,
  sticky,
  variant,
  AuthButton,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        "w-full",
        sticky && "md:sticky top-3",
        sticky && variant === "default" && "dark:bg-zinc-950/50 backdrop-blur"
      )}
    >
      <div className={cn("hidden md:block", headerVariants({ variant }))}>
        <div className="flex-row-start px-6 py-2 w-full gap-2">
          {Logo}
          <nav className="grow flex-row-end gap-3 lg:gap-8">
            {links.map((link) => (
              <HeaderLink key={link.href} href={link.href} name={link.name} />
            ))}
            {icons && (
              <div className="flex-row-end gap-2 pl-3 lg:gap-3">
                {icons.map((link) => (
                  <Button
                    asChild
                    variant="ghost"
                    key={link.href}
                    size="icon"
                    className="rounded-full size-6"
                  >
                    <a href={link.href}>{link.icon}</a>
                  </Button>
                ))}
                <ThemeToggle />
                {AuthButton}
              </div>
            )}
          </nav>
        </div>
      </div>
      <MobileHeader
        AuthButton={AuthButton}
        Logo={Logo}
        links={links}
        icons={icons}
      />
    </header>
  )
}
