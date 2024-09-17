/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/homepage/header';
import { configs } from '@/configs';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
// import components from '@/constants/components.json';
// import { cn } from '@/lib/utils';

const ProductHunt = () => (
  <a href="https://www.producthunt.com/posts/indie-ui" target="_blank">
    <img
      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=477059&theme=dark"
      alt="Indie UI - Rich Styled UI | Product Hunt"
      className="w-[250px] h-[54px] mx-auto"
      width="250"
      height="54"
    />
  </a>
);

//======================================
export const Hero = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-4xl h-[85vh] lg:h-[90vh] center px-2">
        <div className="animate-in mt-10 sm:mt-16">
          <h1 className="text-4xl md:text-5xl text-center font-black text-balance lg:text-6xl h1 mb-4">
            Rich Styled UI Components
          </h1>
          <p className="text-center text-pretty text-lg mb-4 dark:text-zinc-400 mx-auto">
            Make your website stand out with minimal effort.
            <span className="block">
              Built with{' '}
              <span className="dark:text-green-300 text-green-700 font-semibold">
                Reactjs
              </span>
              ,{' '}
              <span className="dark:text-green-300 text-green-700 font-semibold">
                shadcn
              </span>{' '}
              and{' '}
              <span className="dark:text-green-300 text-green-700 font-semibold">
                Framer Motion
              </span>{' '}
              for animation.
            </span>
          </p>
          <div className="flex-row-center gap-4 mx-auto max-w-fit py-4">
            <Button asChild rightIcon={<FaArrowRight />}>
              <Link href="/docs" className="font-semibold w-fit mx-auto">
                Docs
              </Link>
            </Button>
            <Button asChild variant={'outline'} leftIcon={<FaGithub />}>
              <Link href={configs.urls.github}>Star on GitHub</Link>
            </Button>
          </div>
          {/* <div className="mx-auto pt-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
              {Object.values(components).map((o, i) => (
                <Button
                  key={o.id}
                  size="sm"
                  variant={'outline'}
                  asChild
                  className={cn('sm:justify-start text-xs')}
                >
                  <a href={`#${o.id}`}>{o.title}</a>
                </Button>
              ))}
            </div>
          </div> */}
          {/* <div className="pt-8 pb-8">
            <ProductHunt />
          </div> */}
        </div>
      </div>
    </div>
  );
};
