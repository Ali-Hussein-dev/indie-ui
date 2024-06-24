//======================================
export const Dot_Loader_v1 = () => {
  const dotStyle = "size-8 bg-zinc-900 rounded-full border-2 shadow-sm animate-bounce dark:bg-zinc-50"
  return (
    <div className="flex space-x-2 justify-center items-center">
      {/* Animated bouncing Dots */}
      <div className={dotStyle} style={{ animationDelay: "-0.3s" }}></div>
      <div className={dotStyle} style={{ animationDelay: "-0.15s" }}></div>
      <div className={dotStyle}></div>
    </div>
  )
}



