import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "./button"

//======================================
export const EyeCatchingButton_v1 = ({ ...props }: ButtonProps) => {
  return (
    <div className="relative overflow-hidden rounded-full dark:bg-zinc-900 bg-white shadow border dark:border-zinc-800 group border-zinc-400 p-0.5">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#09090B_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)] group-hover:bg-none" />
      <Button
        {...props}
        className={cn(
          "h-10 px-8 w-full rounded-full font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-zinc-50 dark:bg-zinc-900",
          props.className
        )}
      />
    </div>
  )
}

//======================================Shiny Background
export const EyeCatchingButton_v2 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
        "dark:bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] dark:text-zinc-200 dark:border-zinc-800",
        "bg-[linear-gradient(110deg,#FFF,45%,#E4E4E7,55%,#FFF)] text-zinc-800 border-zinc-300",
        props.className
      )}
    />
  )
}

//======================================Shiny Text
export const EyeCatchingButton_v3 = ({ ...props }: ButtonProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "border-[1px] rounded-lg bg-clip-text text-transparent dark:text-transparent animate-bg-shine bg-[length:250%_100%] shadow font-bold tracking-wide",
        "dark:bg-[linear-gradient(110deg,#D4D4D8,45%,#27272A,55%,#D4D4D8)] dark:border-zinc-800",
        "bg-[linear-gradient(110deg,#09090B,45%,#fff,55%,#09090B)] border-zinc-300",
        props.className
      )}
    />
  )
}
