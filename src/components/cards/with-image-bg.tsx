import { cn } from "@/src/utils/cn"
import Image from "next/image"

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum! Qui dicta debitis aliquid quo molestias explicabo iure!",
}
const CardBody = ({ className = "" }) => (
  <div className={cn("px-2 sm:px-4 py-0 sm:pb-3", className)}>
    <h3 className="text-lg sm:text-2xl font-bold text-gray-100 tracking-tighter mt-3 mb-2">
      {cardContent.title}
    </h3>
    <p className="text-gray-100 text-sm">{cardContent.description}</p>
  </div>
)

//======================================
export const Card_with_image_bg_v1 = () => {
  return (
    <div className="pt-4">
      <div className="rounded-2xl relative aspect-[4/3] max-w-xl mx-auto overflow-hidden group">
        <Image
          fill
          className="w-full object-cover m-0"
          src="/lemons.jpeg"
          alt="lemon"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-stone-900/90 via-stone-900/60 to-stone-900/5 bg-gradient-to-t backdrop-blur-[2px] transition-all duration-300"></div>
        <CardBody className="absolute inset-0 flex flex-col justify-end size-full" />
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_bg_v2 = () => {
  return (
    <div className="pt-4">
      <div className="rounded-2xl relative aspect-[4/3] max-w-xl mx-auto overflow-hidden group">
        <Image
          fill
          className="w-full object-cover m-0"
          src="/lemons.jpeg"
          alt="veggtables"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-black/95 via-black/70 to-black/10 bg-gradient-to-t"></div>
        <CardBody className="absolute inset-0 flex flex-col justify-end size-full" />
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_bg_v3 = () => {
  return (
    <div className="mx-auto from-red-700 to-green-400 bg-gradient-to-b p-[3px] max-w-xl rounded-2xl">
      <div className="rounded-2xl relative aspect-[4/3] max-w-xl overflow-hidden group">
        <Image
          fill
          src="/waterlemons.jpg"
          alt="image"
          className="w-full object-cover m-0 rounded-2xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-teal-900/90 to-red-900/35 bg-gradient-to-t backdrop-blur-[1px]"></div>
        <CardBody className="absolute inset-0 flex flex-col justify-end size-full" />
      </div>
    </div>
  )
}

//======================================
export const Card_with_image_bg_v4 = () => {
  return (
    <div className="pt-4">
      <div className="rounded-2xl relative aspect-[4/3] max-w-xl mx-auto overflow-hidden group">
        <Image
          fill
          className="w-full object-cover m-0"
          src="/lemons.jpeg"
          alt="veggtables"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="flex flex-col justify-end h-full p-1 sm:p-2">
          <CardBody className="sm:pb-0 bg-gray-600/35 rounded-2xl backdrop-blur-lg" />
        </div>
      </div>
    </div>
  )
}
