import Link from 'next/link';
import { Button } from '@/components/buttons/button';
import { Header } from '@/components/homepage/header';
import { configs } from '@/configs';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import components from '@/constants/components.json';

//======================================
export const Hero = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto max-w-2xl h-[95vh] center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-black text-balance leading-loose lg:text-6xl h1">
            Rich Styled UI
          </h1>
          <p className="text-center text-pretty w-11/12 text-lg mb-4 dark:text-zinc-400 mx-auto">
            Make your website stand out with minimal effort
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
          <div className="mx-auto pt-10 w-fit">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-5 ">
              {Object.values(components).map((o) => (
                <Button
                  key={o.id}
                  size="sm"
                  variant={'outline'}
                  asChild>
                  <a href={`#${o.id}`} className="text-xs">
                    {o.title}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
