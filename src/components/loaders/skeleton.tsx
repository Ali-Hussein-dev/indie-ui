//======================================
export const Skeleton_v1 = () => {
  return (
    <div className="mx-auto w-full max-w-[270px] animate-pulse rounded-md border p-4 shadow-sm">
      <div className="mb-4 h-36 w-full rounded-sm bg-zinc-200 dark:bg-zinc-800"></div>
      <div className="space-y-2">
        <div className="h-4 w-[60%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[90%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[90%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[40%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </div>
  );
};

//======================================
export const Skeleton_v2 = () => {
  return (
    <div className="mx-auto flex max-w-[270px] w-full animate-pulse space-x-4 rounded-lg border p-4 shadow-sm">
      <div className="size-11 rounded-full bg-zinc-200 dark:bg-zinc-800"></div>
      <div className="grow space-y-2 py-1">
        <div className="h-4 rounded bg-zinc-200 dark:bg-zinc-800"></div>
        <div className="h-4 w-[70%] rounded bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
    </div>
  );
};
