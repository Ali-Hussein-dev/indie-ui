/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';
import contributors from '@/constants/contributors.json';

//======================================
export const WithContributor = ({
  contributorKey,
  children,
  ...rest
}: {
  contributorKey: string; // key of the contributor in the contributors.json
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const contributor = contributors[contributorKey as keyof typeof contributors];
  if (!contributorKey || !contributor) {
    console.warn("Contributor key doesn't exist in the contributors.json");
    return null;
  }

  const { name, avatar, url } = contributor;
  return (
    <>
      <div className={cn('w-full py-4', rest.className)}>{children}</div>
      <div className="pt-4 flex-row-end w-full dark:text-zinc-400 text-zinc-600">
        <div className="flex-row-end gap-2 border rounded-full px-3 py-1.5 text-sm">
          Built by{' '}
          <img
            src={avatar}
            alt={name}
            className="size-6 rounded-full m-0"
            loading="lazy"
          />
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline dark:text-zinc-400 text-zinc-600"
          >
            {name}
          </a>
        </div>
      </div>
    </>
  );
};
