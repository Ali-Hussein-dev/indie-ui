'use client';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import * as React from 'react';
import { formElementsList } from './form-elements-selector';

export function FormElementsSelectorCommand({
  appendElement,
}: {
  appendElement: (elementVariant: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }
      if (e.key === 'f') {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);
  return (
    <div>
      <p className="text-sm text-muted-foreground mb-2 text-center">
        Press{' '}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          {/* <span className="text-xs">⌘</span> */}f
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type form field name..."
          className="max-w-sm"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Fields">
            {formElementsList.map((o) => (
              <CommandItem
                key={o.name}
                onSelect={() => {
                  appendElement(o.variant);
                }}
              >
                {o.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
