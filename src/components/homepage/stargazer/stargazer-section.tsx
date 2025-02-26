'use client';
import { Star } from 'lucide-react';
import { Stargazer, StargazerLoading, StargazerMore } from './stargazer';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { configs } from '@/configs';

export const StargazerSection = () => {
  const { data, isFetching } = useQuery({
    queryKey: ['stargazers'],
    queryFn: () => fetch('api/stargazers').then((res) => res.json()),
  });
  const count = data?.stargazerCount
    ? Intl.NumberFormat('en-us', { notation: 'compact' }).format(
        data.stargazerCount,
      )
    : '...';
  // if (!data) return null;
  return (
    <section className="relative w-full py-6">
      <div className="w-full px-4 sm:px-0 flex gap-4 flex-col items-center pt-2">
        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center flex-wrap">
            {isFetching ? (
              <>
                {Array.from({ length: 6 }).map((_, i) => (
                  <StargazerLoading key={i} />
                ))}
                <StargazerMore />
              </>
            ) : (
              <>
                {data?.stargazers.map((o: { id: number; login: string }) => (
                  <Stargazer key={o.id} login={o.login} name={o.login} />
                ))}
                <StargazerMore />
              </>
            )}
          </div>
        </div>
        <p className="text-muted-foreground text-lg/7 max-w-prose text-center text-pretty sm:text-wrap">
          Join our stargazers!
        </p>
        <div className="flex flex-col items-center gap-2">
          <Button
            className="order-2 button px-4 has-[>svg]:px-10 h-11 rounded-xl text-muted-foreground group"
            variant="outline"
            asChild
          >
            <a
              href={configs.urls.github}
              target="_blank"
              rel="noreferrer"
              className="flex gap-1 items-center"
            >
              Star on GitHub
              <Star className="size-4 shrink-0 group-hover:fill-foreground transition-colors" />
              {count}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
