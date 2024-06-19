"use client"
import { type AnimationProps, motion } from "framer-motion"

//======================================
export const Button_v1 = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] shadow-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#000_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)]" />
      <span className="inline-flex h-full w-44 cursor-pointer items-center justify-center rounded-full bg-primary-900 px-3 py-1 font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-white/30 dark:bg-zinc-900/50">
        Get Started
      </span>
    </button>
  )
}

//======================================

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps

export const Button_v2 = ({
  label = "Get started",
  ...rest
}: { label: string } & React.ButtonHTMLAttributes<HTMLButtonElement> &
  AnimationProps) => {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsla(0,0,98%,0.1)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsla(0,0,98%,0.1)]"
    >
      <span
        className="relative block h-full w-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {label}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsla(0,0,98%,0.1)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsla(0,0,98%,0.1)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  )
}
