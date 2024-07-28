import { cn } from '@/lib/utils';

export const Cell = ({ i = 0 }) => {
  return (
    <div className="size-full rounded-lg center bg-zinc-200 dark:bg-zinc-900 text-xl">
      {i}
    </div>
  );
};
const cells = [1, 2, 3, 4];
//======================================
export const Bento_4_v1 = () => {
  return (
    <div className="grid md:grid-cols-4 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg h-32',
            i == 0 && 'md:col-span-3',
            i == 2 && 'md:col-start-1',
            i == 3 && 'md:col-start-2 md:col-span-3',
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};

//======================================
export const Bento_4_v2 = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-2">
        {cells.map((n, i) => (
          <div
            key={n}
            className={cn(
              'p-1 rounded-lg h-32',
              i == 0 && 'md:col-span-3',
              i > 1 && 'md:col-span-2'
            )}
          >
            <Cell i={i + 1} />
          </div>
        ))}
      </div>
    </div>
  );
};

//======================================
export const Bento_4_v3 = () => {
  return (
    <div className="grid md:grid-cols-4 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg h-32',
            i == 0 && 'md:col-start-1 ',
            i == 1 && 'md:col-span-2',
            i == 2 && 'md:col-start-4',
            i == 3 && 'md:col-span-4',
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};

//======================================
export const Bento_4_v4 = () => {
  return (
    <div className="grid md:grid-cols-6 gap-2">
      {cells.map((n, i) => (
        <div
          key={n}
          className={cn(
            'p-1 rounded-lg h-32',
            i == 0 && 'md:col-span-4 md:row-span-4 md:h-full',
            i == 1 && 'md:col-span-2',
            i == 2 && 'md:col-span-2 md:row-span-3',
            i == 3 && 'md:col-span-6'
          )}
        >
          <Cell i={i + 1} />
        </div>
      ))}
    </div>
  );
};
