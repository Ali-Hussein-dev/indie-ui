'use client';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Button } from '@/components/buttons/button';

export function ExpandableCard({
  /**
   * The height of the card when it is collapsed.
   */
  height = '8rem',
  /**
   * The class name to apply to the root container.
   */
  className = '',
  children,
}: {
  height: string;
  className?: string;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div
      className={cn(
        'bg-zinc-50 dark:bg-zinc-950 w-full border px-4 pt-8 pb-5 rounded-lg',
        className,
      )}
    >
      <div className="relative overflow-hidden">
        <div
          ref={contentRef}
          id="expandable-content"
          className="transition-all duration-300 ease-in-out"
          style={{ height: isExpanded ? `${contentHeight}px` : height }}
        >
          <div>{children}</div>
        </div>
        {!isExpanded && (
          <div
            className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        )}
      </div>
      <div className="bg-zinc-50 dark:bg-zinc-950 pt-2">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-controls="expandable-content"
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </Button>
      </div>
    </div>
  );
}
