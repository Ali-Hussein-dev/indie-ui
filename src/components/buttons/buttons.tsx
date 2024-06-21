import { IoSend } from "react-icons/io5"
import { cn } from "@/lib/utils"
import { Button } from "@/components/buttons/button"

//======================================Neubrutalism
export const Button_v1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className={cn(
        "border-[0.5px] duration-200 rounded-sm bg-transparent",
        // light mode
        "shadow-[4px_4px_0px_0px_rgba(0,0,0)] active:shadow-none border-zinc-800 hover:bg-zinc-50 text-zinc-800",
        // dark mode
        "dark:border-zinc-600 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)] active:dark:shadow-none dark:text-zinc-50 dark:bg-zinc-950"
      )}
    >
      {children}
    </Button>
  )
}

//======================================Shine
export const Button_v2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden ease-in-out hover:scale-105 hover:shadow-lg",
        // light mode
        "text-zinc-50 bg-gradient-to-tr from-zinc-900 to-zinc-700 hover:shadow-zinc-500/30",
        // dark mode
        "dark:text-zinc-900 dark:bg-gradient-to-tr dark:from-zinc-50 dark:to-zinc-100 dark:hover:shadow-zinc-700/30"
      )}
    >
      <span>{children}</span>
      <span className="absolute inset-0 flex size-full justify-center [transform:skew(-14deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-14deg)_translateX(100%)]">
        <span className="relative h-full w-8 bg-white/20 dark:bg-black/10" />
      </span>
    </Button>
  )
}

//======================================
export const Button_v3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className={cn(
        "relative overflow-hidden group hover:ring-2 hover:ring-offset-2 ease-out hover:bg-gradient-to-r",
        // light mode
        "bg-zinc-900 hover:from-zinc-800 hover:to-zinc-700 text-zinc-50 hover:ring-zinc-900",
        // dark mode
        "dark:bg-zinc-50 dark:hover:from-zinc-50 dark:hover:to-zinc-100 dark:text-zinc-800 dark:hover:ring-white dark:ring-offset-black"
      )}
    >
      <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white dark:bg-zinc-900 opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
      <span className="relative">{children}</span>
    </Button>
  )
}

//======================================3D
export const Button_v4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden border-b-2 border-l-2 border-r-2 bg-gradient-to-tr shadow-lg duration-100 ease-in-out active:translate-y-0.5 active:shadow-none active:scale-100",
        // light mode
        "active:border-zinc-600 border-zinc-900 from-zinc-800 to-zinc-700 text-white",
        // dark mode
        "dark:active:border-zinc-600 dark:border-zinc-500 dark:from-zinc-50 dark:to-zinc-100 dark:text-zinc-800"
      )}
    >
      <span className="absolute size-0 rounded-full bg-white dark:bg-black opacity-10 transition-all duration-300 ease-out group-hover:h-32 group-hover:w-32"></span>
      <span className="relative">{children}</span>
    </Button>
  )
}

//======================================
export const Button_v5 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out border shadow group",
        // light mode
        "border-zinc-300 text-zinc-800 bg-zinc-50",
        // dark mode
        "dark:border-zinc-700 dark:text-zinc-100 dark:bg-zinc-950"
      )}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-500 -translate-x-full group-hover:translate-x-0 ease-out bg-zinc-800 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800">
        <IoSend size="20" />
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Button>
  )
}

//======================================
export const Button_v6 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-sm border dark:border-zinc-200 border-zinc-600 group">
      <Button
        className={cn(
          "scale-y-90 scale-x-95 group-hover:scale-100 group-hover:m-0 duration-300 font-semibold rounded-sm transition dark:bg-zinc-50 bg-zinc-950 text-zinc-100 dark:text-zinc-800"
        )}
      >
        {children}
      </Button>
    </div>
  )
}

//======================================
export const Button_v7 = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      className={cn(
        "hover:no-underline",
        "relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-800 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-1 hover:after:opacity-100 px-[1px] pb-0"
      )}
      variant="link"
    >
      {children}
    </Button>
  )
}
