import { cn } from '@/lib/utils';

const cardContent = {
  title: 'Lorem ipsum dolor',
  description:
    'Lorem ipsum dolor, sit amet elit consectetur adipisicing. Nostrum, hic ipsum! dolor, sit amet elit consectetur amete elite!',
};
export const CardBody = ({ className = '' }) => (
  <div className={cn('text-left p-4 md:p-6', className)}>
    <h3 className="text-lg font-bold mb-1 text-zinc-200">
      {cardContent.title}
    </h3>
    <p className="text-wrap text-zinc-500 text-sm">{cardContent.description}</p>
  </div>
);

//======================================
export const CardWithEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="border w-full rounded-md overflow-hidden border-zinc-900 bg-zinc-950 p-3">
    <div className="size-full bg-repeat bg-[url(/svg/ellipsis.svg)] bg-[length:30px_30px]">
      <div
        className={
          'size-full bg-gradient-to-tr from-zinc-950/90 via-zinc-950/40 to-zinc-950/10'
        }
      >
        {children}
      </div>
    </div>
  </div>
);

//======================================
export const CardWithGridEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="border w-full rounded-md overflow-hidden border-zinc-900 bg-zinc-950 p-1">
    <div className="size-full bg-repeat bg-[url(/svg/grid-ellipsis.svg)] bg-[length:25px_25px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/70 to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);

//======================================
export const CardWithCircleEllipsis = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="border w-full rounded-md overflow-hidden border-zinc-900 bg-zinc-950 p-1">
    <div
      className={`size-full bg-[url(/svg/circle-ellipsis.svg)] bg-repeat bg-[length:30px_30px]`}
    >
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/10">
        {children}
      </div>
    </div>
  </div>
);

//======================================
export const CardWithLines = ({ children }: { children: React.ReactNode }) => (
  <div className="border w-full rounded-md overflow-hidden border-zinc-900 bg-zinc-950 p-[1px]">
    <div className="bg-[url(/svg/lines.svg)] bg-[length:40px_40px] size-full bg-repeat rounded-md">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/80 to-zinc-900/40">
        {children}
      </div>
    </div>
  </div>
);
//======================================
export const CardWithPlus = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border w-full rounded-md overflow-hidden dark:border-zinc-900 bg-zinc-950">
      <div className="size-full bg-[url(/svg/plus.svg)] bg-repeat bg-[length:65px_65px]">
        <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[0.93] to-zinc-950">
          {children}
        </div>
      </div>
    </div>
  );
};
//======================================
export const CardWithSquareX = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="border w-full rounded-md overflow-hidden dark:border-zinc-900 bg-zinc-950">
    <div className="size-full bg-[url(/svg/square-x.svg)] bg-repeat bg-[length:95px_95px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[0.93] to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);
//======================================
export const CardWithGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="border w-full rounded-md overflow-hidden dark:border-zinc-900 bg-zinc-950">
    <div className="size-full bg-[url(/svg/grid.svg)] bg-repeat bg-[length:50px_50px]">
      <div className="size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[.85] to-zinc-950">
        {children}
      </div>
    </div>
  </div>
);

//======================================
export const CardWithNoise = ({ children }: { children: React.ReactNode }) => (
  <div className="border w-full rounded-md overflow-hidden dark:border-zinc-900 bg-zinc-950">
    <div
      className={`size-full bg-[url(/svg/noise.svg)] bg-repeat bg-[length:500px_500px]`}
    >
      <div className="bg-zinc-950/30">{children}</div>
    </div>
  </div>
);
