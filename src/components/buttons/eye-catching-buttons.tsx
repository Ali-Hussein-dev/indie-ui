import { cn } from "@/src/utils/cn"

//======================================
export const Button_v1 = () => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] shadow-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50">
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#000_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)]" />
      <span className="inline-flex h-full w-44 cursor-pointer items-center justify-center rounded-full bg-primary-900 px-3 py-1 font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-[72px] bg-white/90 dark:bg-zinc-900">
        Get Started
      </span>
    </button>
  )
}
