import { cn } from '@/lib/utils';

const Cell = ({ i = 0 }) => {
  return (
    <div className="size-full rounded-lg center bg-zinc-200 dark:bg-zinc-900 text-xl">
      {i}
    </div>
  );
};

const cells = [1, 2, 3, 4, 5, 6];
//======================================
export const Bento_6_v1 = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg h-32',
            i == 1 && 'md:col-span-2 md:h-full md:row-span-2',
            i == 4 && 'md:col-start-4',
            i == 5 && 'md:col-span-4'
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};

//======================================
export const Bento_6_v2 = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg min-h-32',
            i === 0 && 'row-span-2 h-full',
            i === 2 && 'row-span-2 h-full'
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};

//======================================
export const Bento_6_v3 = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg h-32',
            i == 2 && 'col-span-2',
            i == 3 && 'col-span-2'
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};

//======================================
export const Bento_6_v4 = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-6 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg h-32',
            i < 2 && 'md:col-span-3',
            i == 2 && 'md:col-span-4',
            i == 3 && 'md:col-span-2',
            i == 4 && 'md:col-span-2',
            i == 5 && 'md:col-span-4'
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};
