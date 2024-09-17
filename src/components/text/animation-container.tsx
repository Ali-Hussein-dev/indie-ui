'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { FaPlay } from 'react-icons/fa';
import { cn } from '@/lib/utils';

export const AnimationContainer = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [key, setKey] = React.useState(0);
  const onClick = () => {
    setKey((prv) => prv + 1);
  };
  return (
    <div className={cn('pb-12 pt-4 border-b dark:border-zinc-900', className)}>
      <div className="flex-row-end w-full mb-2">
        <Button
          onClick={onClick}
          size="icon"
          className="rounded-lg size-9"
          variant="outline"
        >
          <FaPlay className="size-3" />
        </Button>
      </div>
      <div key={key}>{children}</div>
    </div>
  );
};
