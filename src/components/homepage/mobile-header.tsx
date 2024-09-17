'use client';

import { Button } from '../ui/button';
import { IconsList, LinksList } from './header';
import { CgClose, CgMenu } from 'react-icons/cg';
import * as React from 'react';
import { cn } from '@/lib/utils';

export const MobileHeader = ({
  links,
  icons,
  Logo,
}: {
  links: LinksList;
  icons?: IconsList;
  Logo: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={cn(
        'md:hidden px-4 pt-2 border-b',
        isOpen && 'min-h-screen z-40 dark:bg-zinc-950 bg-white fixed size-full'
      )}
    >
      <div className="flex-row-between pb-2">
        {Logo}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="icon"
          className="rounded-xl"
          variant={'outline'}
        >
          {isOpen ? <CgClose /> : <CgMenu />}
        </Button>
      </div>
      <dialog
        open={isOpen}
        className={
          isOpen
            ? 'animate-popover-in size-full flex flex-col pt-5 gap-4 mb-5 dark:bg-zinc-950/10 backdrop-blur bg-white px-4'
            : ''
        }
      >
        {links.map((link) => (
          <Button
            key={link.href}
            asChild
            variant={'outline'}
            className="w-full rounded-xl justify-start"
            size="lg"
          >
            <a href={link.href}>{link.label}</a>
          </Button>
        ))}

        <div className="flex-row-end w-full gap-3 border-t pt-4 border-dashed">
          {icons && (
            <div className="flex-row-center grow gap-5">
              {icons.map((icon) => (
                <Button
                  key={icon.name}
                  size="icon"
                  className="rounded-full"
                  variant={'outline'}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <a href={icon.href}>{icon.icon}</a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
};
