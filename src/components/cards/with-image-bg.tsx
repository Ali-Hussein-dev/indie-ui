import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const cardContent = {
  title: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!',
};
const CardBody = ({ className = '' }) => (
  <div
    className={cn(
      'px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left',
      className
    )}
  >
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
      {cardContent.title}
    </h3>
    <p className="text-sm leading-5">{cardContent.description}</p>
  </div>
);
type CardProps = {
  children?: React.ReactNode;
};
//======================================
export const Card_with_image_v1 = ({
  children = (
    <CardBody className="absolute px-4 pb-4 inset-0 flex flex-col justify-end size-full" />
  ),
}: CardProps) => {
  return (
    <div className="rounded-2xl relative aspect-[4/3] overflow-hidden group">
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
      {children}
    </div>
  );
};

//======================================
export const Card_with_image_v2 = ({
  children = (
    <CardBody className="absolute px-4 pb-4 inset-0 flex flex-col justify-end size-full " />
  ),
}: CardProps) => {
  return (
    <div className="rounded-2xl relative aspect-[4/3] overflow-hidden group">
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
      {children}
    </div>
  );
};

//======================================
export const Card_with_image_v3 = ({
  children = (
    <CardBody className="absolute inset-0 flex flex-col justify-end size-full px-3 pb-4" />
  ),
}: CardProps) => {
  return (
    <div className="from-red-700 to-teal-500 bg-gradient-to-bl p-0.5 rounded-2xl">
      <div className="rounded-2xl relative aspect-[4/3] overflow-hidden group">
        <Image
          fill
          src="/waterlemons.jpg"
          alt="image"
          className="w-full object-cover m-0 rounded-2xl"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {/* overlay */}
        <div className="absolute inset-0 from-teal-900/80 to-red-900/15 bg-gradient-to-t backdrop-blur-[1px]"></div>
        {children}
      </div>
    </div>
  );
};

//======================================
export const Card_with_image_v4 = ({
  children = (
    <CardBody className="sm:pb-2 bg-gray-600/35 rounded-2xl backdrop-blur-lg px-4 pb-4" />
  ),
}: CardProps) => {
  return (
    <div className="rounded-2xl relative aspect-[4/3] overflow-hidden group">
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
        {children}
      </div>
    </div>
  );
};

//======================================
export const Card_with_image_v5 = () => {
  return (
    <div className="rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2 border pb-3 ">
      <div className="relative aspect-video prose-img:m-0">
        <Image
          fill
          className="rounded-xl shadow-[0px_0px_10px_#A1A1AA] dark:shadow-[0px_0px_12px_rgb(39,39,42,0.7)]"
          src="/lemons.jpeg"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
          alt="image"
        />
      </div>
      <CardBody className="text-gray-800 dark:text-gray-200 mb-2 relative" />
      <div className="px-2">
        <Button className="w-full rounded-lg" asChild>
          <Link href="/docs/cards-with-image-bg">Learn more</Link>
        </Button>
      </div>
    </div>
  );
};

//======================================
export const Card_with_image_v6 = () => {
  return (
    <div className="rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden  pb-3 border border-lime-200 dark:border-lime-800">
      <div className="p-2 w-full bg-gradient-to-tr from-lime-300 to-lime-200 rounded-t-xl">
        <div className="w-full rounded-xl overflow-hidden relative aspect-video prose-img:m-0">
          <Image
            fill
            src="/lemons.jpeg"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
            alt="image"
          />
        </div>
      </div>
      <CardBody className="text-gray-800 dark:text-gray-200" />
      <div className="px-2">
        <Button
          asChild
          className="w-full bg-lime-600 dark:bg-lime-200 dark:text-lime-900 rounded-lg no-underline"
        >
          <Link href="/docs/cards-with-image-bg">Learn more</Link>
        </Button>
      </div>
    </div>
  );
};
